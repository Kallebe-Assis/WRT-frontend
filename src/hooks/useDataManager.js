import { useState, useEffect, useCallback } from 'react';
import { linksAPI, notasAPI, categoriasAPI } from '../config/api';

const useDataManager = () => {
  const [links, setLinks] = useState([]);
  const [notas, setNotas] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState(null);

  // Verificar se o usuário está logado
  const verificarUsuario = useCallback(() => {
    const user = localStorage.getItem('user');
    if (!user) {
      return null;
    }

    try {
      const userData = JSON.parse(user);
      const isValid = userData && userData.id && userData.email;
      return isValid ? userData : null;
    } catch (error) {
      return null;
    }
  }, []);

  // Carregar links
  const carregarLinks = useCallback(async () => {
    const userData = verificarUsuario();
    if (!userData) {
      return;
    }

    try {
      const linksData = await linksAPI.buscarTodos();
      setLinks(linksData.links || linksData.data || []);
    } catch (error) {
      console.error('Erro ao carregar links:', error);
      setErro('Erro ao carregar links');
    }
  }, [verificarUsuario]);

  // Carregar notas
  const carregarNotas = useCallback(async () => {
    const userData = verificarUsuario();
    if (!userData) {
      return;
    }

    try {
      const notasData = await notasAPI.listar();
      setNotas(notasData.notas || notasData.data || []);
    } catch (error) {
      console.error('Erro ao carregar notas:', error);
      setErro('Erro ao carregar notas');
    }
  }, [verificarUsuario]);

  // Carregar categorias
  const carregarCategorias = useCallback(async () => {
    const userData = verificarUsuario();
    if (!userData) {
      return;
    }

    try {
      const categoriasData = await categoriasAPI.listar();
      setCategorias(categoriasData);
    } catch (error) {
      console.error('Erro ao carregar categorias:', error);
      setErro('Erro ao carregar categorias');
    }
  }, [verificarUsuario]);

  // Carregar todos os dados
  const carregarTodosDados = useCallback(async () => {
    const userData = verificarUsuario();
    if (!userData) {
      return;
    }

    setCarregando(true);
    setErro(null);

    try {
      await Promise.all([
        carregarLinks(),
        carregarNotas(),
        carregarCategorias()
      ]);
    } catch (error) {
      console.error('Erro ao carregar dados:', error);
      setErro('Erro ao carregar dados');
    } finally {
      setCarregando(false);
    }
  }, [verificarUsuario, carregarLinks, carregarNotas, carregarCategorias]);

  // Carregar dados quando usuário logar
  useEffect(() => {
    const userData = verificarUsuario();
    if (userData) {
      carregarTodosDados();
    }
  }, [verificarUsuario, carregarTodosDados]);

  // Listener para mudanças no localStorage
  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === 'user') {
        const userData = verificarUsuario();
        if (userData) {
          carregarTodosDados();
        } else {
          // Limpar dados quando usuário deslogar
          setLinks([]);
          setNotas([]);
          setCategorias([]);
          setCarregando(false);
          setErro(null);
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [verificarUsuario, carregarTodosDados]);

  // Carregar dados iniciais se usuário já estiver logado
  useEffect(() => {
    const userData = verificarUsuario();
    if (userData) {
      carregarTodosDados();
    }
  }, []);

  return {
    links,
    notas,
    categorias,
    carregando,
    erro,
    carregarLinks,
    carregarNotas,
    carregarCategorias,
    carregarTodosDados,
    setLinks,
    setNotas,
    setCategorias
  };
};

export default useDataManager; 