import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEnvelope, faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { authAPI } from '../config/api-simple';

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
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  text-align: center;
`;

const Logo = styled.h1`
  color: var(--corPrimaria);
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  color: var(--corTextoSecundaria);
  font-size: 1.1rem;
  margin-bottom: 30px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const InputGroup = styled.div`
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  padding: 15px 20px 15px 50px;
  border: 2px solid var(--corBordaPrimaria);
  border-radius: 10px;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: var(--corPrimaria);
    box-shadow: 0 0 0 3px rgba(118, 75, 162, 0.1);
  }
`;

const InputIcon = styled.div`
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--corTextoSecundaria);
  font-size: 1.1rem;
`;

const Button = styled.button`
  background: var(--corPrimaria);
  color: white;
  border: none;
  border-radius: 10px;
  padding: 15px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  
  &:hover {
    background: var(--corSecundaria);
    transform: translateY(-2px);
  }
  
  &:disabled {
    background: var(--corTextoSecundaria);
    cursor: not-allowed;
    transform: none;
  }
`;

const ToggleButton = styled.button`
  background: none;
  border: none;
  color: var(--corPrimaria);
  font-size: 1rem;
  cursor: pointer;
  margin-top: 20px;
  text-decoration: underline;
  
  &:hover {
    color: var(--corSecundaria);
  }
`;

const ErrorMessage = styled.div`
  background: #ffebee;
  color: #c62828;
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 20px;
  font-size: 0.9rem;
`;

const SuccessMessage = styled.div`
  background: #e8f5e8;
  color: #2e7d32;
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 20px;
  font-size: 0.9rem;
`;

const AuthScreenSimple = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    senha: '',
    nome: ''
  });
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState('');
  const [sucesso, setSucesso] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCarregando(true);
    setErro('');
    setSucesso('');

    try {
      if (isLogin) {
        // Login
        const response = await authAPI.login({
          email: formData.email,
          senha: formData.senha
        });

        console.log('🔐 Resposta do login:', response);
        
        // Verificar se a resposta tem 'usuario' ou 'user'
        const userData = response.usuario || response.user;
        
        if (response.success && userData) {
          console.log('💾 Salvando dados do usuário:', userData);
          console.log('💾 ID do usuário:', userData.id);
          localStorage.setItem('user', JSON.stringify(userData));
          
          // Verificar se foi salvo corretamente
          const savedUser = localStorage.getItem('user');
          console.log('💾 Dados salvos no localStorage:', savedUser);
          
          // Disparar evento de login
          window.dispatchEvent(new CustomEvent('userLogin', {
            detail: userData
          }));

          setSucesso('Login realizado com sucesso!');
          
          // Chamar callback de login
          if (onLogin) {
            onLogin(userData);
          }
        } else {
          console.error('❌ Erro no login:', response);
          setErro(response.error || 'Erro no login - dados do usuário inválidos');
        }
      } else {
        // Registro
        const response = await authAPI.register({
          nome: formData.nome,
          email: formData.email,
          senha: formData.senha
        });

        if (response.success) {
          setSucesso('Conta criada com sucesso! Faça login para continuar.');
          setIsLogin(true);
          setFormData({ email: '', senha: '', nome: '' });
        } else {
          setErro(response.error || 'Erro no registro');
        }
      }
    } catch (error) {
      console.error('❌ Erro na autenticação:', error);
      setErro(error.message || 'Erro de conexão');
    } finally {
      setCarregando(false);
    }
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setFormData({ email: '', senha: '', nome: '' });
    setErro('');
    setSucesso('');
  };

  return (
    <AuthContainer>
      <AuthCard>
        <Logo>WRTmind</Logo>
        <Subtitle>
          {isLogin ? 'Faça login para continuar' : 'Crie sua conta'}
        </Subtitle>

        {erro && <ErrorMessage>{erro}</ErrorMessage>}
        {sucesso && <SuccessMessage>{sucesso}</SuccessMessage>}

        <Form onSubmit={handleSubmit}>
          {!isLogin && (
            <InputGroup>
              <InputIcon>
                <FontAwesomeIcon icon={faUser} />
              </InputIcon>
              <Input
                type="text"
                name="nome"
                placeholder="Nome completo"
                value={formData.nome}
                onChange={handleInputChange}
                required={!isLogin}
              />
            </InputGroup>
          )}

          <InputGroup>
            <InputIcon>
              <FontAwesomeIcon icon={faEnvelope} />
            </InputIcon>
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </InputGroup>

          <InputGroup>
            <InputIcon>
              <FontAwesomeIcon icon={faLock} />
            </InputIcon>
            <Input
              type="password"
              name="senha"
              placeholder="Senha"
              value={formData.senha}
              onChange={handleInputChange}
              required
            />
          </InputGroup>

          <Button type="submit" disabled={carregando}>
            <FontAwesomeIcon icon={isLogin ? faSignInAlt : faUserPlus} />
            {carregando ? 'Carregando...' : (isLogin ? 'Entrar' : 'Criar Conta')}
          </Button>
        </Form>

        <ToggleButton type="button" onClick={toggleMode}>
          {isLogin ? 'Não tem uma conta? Criar conta' : 'Já tem uma conta? Fazer login'}
        </ToggleButton>
      </AuthCard>
    </AuthContainer>
  );
};

export default AuthScreenSimple; 