import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEnvelope, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { getApiUrl } from '../config/environment.js';

const AuthContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--corPrimaria) 0%, var(--corSecundaria) 100%);
  padding: 20px;
`;

const AuthCard = styled.div`
  background: white;
  border-radius: var(--bordaRaioGrande);
  box-shadow: var(--sombraForte);
  padding: 40px;
  width: 100%;
  max-width: 400px;
`;

const Logo = styled.div`
  text-align: center;
  margin-bottom: 30px;
  
  h1 {
    color: var(--corPrimaria);
    font-size: 2rem;
    font-weight: bold;
    margin: 0;
  }
  
  p {
    color: var(--corTextoSecundaria);
    margin: 5px 0 0 0;
  }
`;

const TabContainer = styled.div`
  display: flex;
  margin-bottom: 30px;
  border-bottom: 2px solid var(--corBordaPrimaria);
`;

const Tab = styled.button`
  flex: 1;
  padding: 15px;
  background: none;
  border: none;
  font-size: var(--tamanhoFonteGrande);
  font-weight: bold;
  color: ${props => props['data-active'] ? 'var(--corPrimaria)' : 'var(--corTextoSecundaria)'};
  border-bottom: 2px solid ${props => props['data-active'] ? 'var(--corPrimaria)' : 'transparent'};
  cursor: pointer;
  transition: all var(--transicaoMedia);
  
  &:hover {
    color: var(--corPrimaria);
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormGroup = styled.div`
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  padding: 15px 15px 15px 45px;
  border: 2px solid var(--corBordaPrimaria);
  border-radius: var(--bordaRaioMedia);
  font-size: var(--tamanhoFonteMedia);
  transition: all var(--transicaoMedia);
  
  &:focus {
    outline: none;
    border-color: var(--corPrimaria);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
  
  &::placeholder {
    color: var(--corTextoTerciaria);
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--corTextoTerciaria);
  z-index: 1;
`;

const PasswordToggle = styled.button`
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: var(--corTextoTerciaria);
  cursor: pointer;
  z-index: 1;
  
  &:hover {
    color: var(--corPrimaria);
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 15px;
  background: var(--corPrimaria);
  color: white;
  border: none;
  border-radius: var(--bordaRaioMedia);
  font-size: var(--tamanhoFonteGrande);
  font-weight: bold;
  cursor: pointer;
  transition: all var(--transicaoMedia);
  
  &:hover {
    background: var(--corSecundaria);
    transform: translateY(-2px);
    box-shadow: var(--sombraHover);
  }
  
  &:disabled {
    background: var(--corTextoTerciaria);
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const ErrorMessage = styled.div`
  background: var(--corErro);
  color: white;
  padding: 10px;
  border-radius: var(--bordaRaioMedia);
  font-size: var(--tamanhoFonteMedia);
  text-align: center;
`;

const SuccessMessage = styled.div`
  background: var(--corSucesso);
  color: white;
  padding: 10px;
  border-radius: var(--bordaRaioMedia);
  font-size: var(--tamanhoFonteMedia);
  text-align: center;
`;

const LoadingSpinner = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: white;
  animation: spin 1s ease-in-out infinite;
  margin-right: 10px;
`;

const AuthScreen = ({ onLogin }) => {
  const [activeTab, setActiveTab] = useState('login');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  
  // Dados do login - SIMPLES
  const [loginData, setLoginData] = useState({
    email: '',
    senha: ''
  });
  
  // Dados do cadastro - SIMPLES
  const [cadastroData, setCadastroData] = useState({
    nome: '',
    email: '',
    senha: '',
    confirmarSenha: ''
  });

  // LOGIN SIMPLES
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    // Validação dos campos
    if (!loginData.email || !loginData.email.trim()) {
      setError('Email é obrigatório');
      setLoading(false);
      return;
    }
    
    if (!loginData.senha || !loginData.senha.trim()) {
      setError('Senha é obrigatória');
      setLoading(false);
      return;
    }
    
    try {
      console.log('Enviando login:', loginData);
      
      const response = await fetch(getApiUrl('/auth/login'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: loginData.email.trim(),
          senha: loginData.senha.trim()
        }),
      });

      const data = await response.json();
      console.log('Resposta do login:', data);

      if (response.ok) {
        setSuccess('Login realizado com sucesso!');
        
        // Verificar se a resposta tem 'usuario' ou 'user'
        const userData = data.usuario || data.user;
        
        if (userData) {
          localStorage.setItem('user', JSON.stringify(userData));
          console.log('🔍 Dados do usuário para onLogin:', userData);
          onLogin(userData);
        } else {
          setError('Dados do usuário inválidos na resposta');
        }
      } else {
        setError(data.error || 'Erro ao fazer login');
      }
    } catch (error) {
      console.error('Erro no login:', error);
      setError('Erro de conexão. Verifique se o servidor está rodando.');
    } finally {
      setLoading(false);
    }
  };

  // CADASTRO SIMPLES
  const handleCadastro = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    // Validação dos campos
    if (!cadastroData.nome || !cadastroData.nome.trim()) {
      setError('Nome é obrigatório');
      setLoading(false);
      return;
    }
    
    if (!cadastroData.email || !cadastroData.email.trim()) {
      setError('Email é obrigatório');
      setLoading(false);
      return;
    }
    
    if (!cadastroData.senha || !cadastroData.senha.trim()) {
      setError('Senha é obrigatória');
      setLoading(false);
      return;
    }
    
    if (cadastroData.senha !== cadastroData.confirmarSenha) {
      setError('As senhas não coincidem');
      setLoading(false);
      return;
    }

    try {
      console.log('Enviando cadastro:', cadastroData);
      
      const response = await fetch(getApiUrl('/auth/register'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome: cadastroData.nome.trim(),
          email: cadastroData.email.trim(),
          senha: cadastroData.senha.trim()
        }),
      });

      const data = await response.json();
      console.log('Resposta do cadastro:', data);

      if (response.ok) {
        setSuccess('Cadastro realizado com sucesso! Faça login para continuar.');
        setCadastroData({
          nome: '',
          email: '',
          senha: '',
          confirmarSenha: ''
        });
        setTimeout(() => {
          setActiveTab('login');
          setSuccess('');
        }, 2000);
      } else {
        setError(data.error || 'Erro ao fazer cadastro');
      }
    } catch (error) {
      console.error('Erro no cadastro:', error);
      setError('Erro de conexão. Verifique se o servidor está rodando.');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (form, field, value) => {
    if (form === 'login') {
      setLoginData(prev => ({ ...prev, [field]: value }));
    } else {
      setCadastroData(prev => ({ ...prev, [field]: value }));
    }
    setError('');
    setSuccess('');
  };

  return (
    <AuthContainer>
      <AuthCard>
        <Logo>
          <h1>WRTmind</h1>
          <p>Organize suas ideias e links</p>
        </Logo>

        <TabContainer>
          <Tab 
            data-active={activeTab === 'login'} 
            onClick={() => setActiveTab('login')}
          >
            Login
          </Tab>
          <Tab 
            data-active={activeTab === 'cadastro'} 
            onClick={() => setActiveTab('cadastro')}
          >
            Cadastro
          </Tab>
        </TabContainer>

        {error && <ErrorMessage>{error}</ErrorMessage>}
        {success && <SuccessMessage>{success}</SuccessMessage>}

        {activeTab === 'login' ? (
          <Form onSubmit={handleLogin}>
            <FormGroup>
              <IconWrapper>
                <FontAwesomeIcon icon={faEnvelope} />
              </IconWrapper>
              <Input
                type="email"
                placeholder="Email"
                value={loginData.email}
                onChange={(e) => handleInputChange('login', 'email', e.target.value)}
                required
              />
            </FormGroup>

            <FormGroup>
              <IconWrapper>
                <FontAwesomeIcon icon={faLock} />
              </IconWrapper>
              <Input
                type={showPassword ? 'text' : 'password'}
                placeholder="Senha"
                value={loginData.senha}
                onChange={(e) => handleInputChange('login', 'senha', e.target.value)}
                required
              />
              <PasswordToggle
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </PasswordToggle>
            </FormGroup>

            <SubmitButton type="submit" disabled={loading}>
              {loading && <LoadingSpinner />}
              {loading ? 'Entrando...' : 'Entrar'}
            </SubmitButton>
          </Form>
        ) : (
          <Form onSubmit={handleCadastro}>
            <FormGroup>
              <IconWrapper>
                <FontAwesomeIcon icon={faUser} />
              </IconWrapper>
              <Input
                type="text"
                placeholder="Nome completo"
                value={cadastroData.nome}
                onChange={(e) => handleInputChange('cadastro', 'nome', e.target.value)}
                required
              />
            </FormGroup>

            <FormGroup>
              <IconWrapper>
                <FontAwesomeIcon icon={faEnvelope} />
              </IconWrapper>
              <Input
                type="email"
                placeholder="Email"
                value={cadastroData.email}
                onChange={(e) => handleInputChange('cadastro', 'email', e.target.value)}
                required
              />
            </FormGroup>

            <FormGroup>
              <IconWrapper>
                <FontAwesomeIcon icon={faLock} />
              </IconWrapper>
              <Input
                type={showPassword ? 'text' : 'password'}
                placeholder="Senha"
                value={cadastroData.senha}
                onChange={(e) => handleInputChange('cadastro', 'senha', e.target.value)}
                required
              />
              <PasswordToggle
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </PasswordToggle>
            </FormGroup>

            <FormGroup>
              <IconWrapper>
                <FontAwesomeIcon icon={faLock} />
              </IconWrapper>
              <Input
                type={showPassword ? 'text' : 'password'}
                placeholder="Confirmar senha"
                value={cadastroData.confirmarSenha}
                onChange={(e) => handleInputChange('cadastro', 'confirmarSenha', e.target.value)}
                required
              />
            </FormGroup>

            <SubmitButton type="submit" disabled={loading}>
              {loading && <LoadingSpinner />}
              {loading ? 'Cadastrando...' : 'Cadastrar'}
            </SubmitButton>
          </Form>
        )}
      </AuthCard>
    </AuthContainer>
  );
};

export default AuthScreen; 