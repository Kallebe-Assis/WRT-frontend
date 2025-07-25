import React from 'react';
import './ErrorBoundary.css';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false, 
      error: null, 
      errorInfo: null,
      errorId: null,
      retryCount: 0
    };
  }

  static getDerivedStateFromError(error) {
    // Atualiza o state para mostrar a UI de erro
    return { 
      hasError: true,
      errorId: `ERR_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    };
  }

  componentDidCatch(error, errorInfo) {
    // Log do erro
    console.error('🚨 Erro capturado pelo ErrorBoundary:', error);
    console.error('📋 Informações do erro:', errorInfo);
    
    this.setState({
      error,
      errorInfo
    });

    // Enviar erro para o servidor (opcional)
    this.logErrorToServer(error, errorInfo);
  }

  logErrorToServer = async (error, errorInfo) => {
    try {
      const errorData = {
        errorId: this.state.errorId,
        message: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        url: window.location.href
      };

      // Enviar para o servidor se a API estiver disponível
      await fetch('/api/errors/log', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(errorData)
      });
    } catch (logError) {
      console.error('Erro ao enviar log para servidor:', logError);
    }
  }

  handleRetry = () => {
    this.setState(prevState => ({
      hasError: false,
      error: null,
      errorInfo: null,
      retryCount: prevState.retryCount + 1
    }));
  }

  handleGoBack = () => {
    window.history.back();
  }

  handleGoHome = () => {
    window.location.href = '/';
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <div className="error-container">
            <div className="error-icon">⚠️</div>
            <h1 className="error-title">Ops! Algo deu errado</h1>
            <p className="error-message">
              Ocorreu um erro inesperado na aplicação. Não se preocupe, 
              você pode continuar usando o sistema normalmente.
            </p>
            
            <div className="error-details">
              <div className="error-id">
                ID do Erro: {this.state.errorId}
              </div>
              {process.env.NODE_ENV === 'development' && (
                <details className="error-stack">
                  <summary>Detalhes técnicos (desenvolvimento)</summary>
                  <pre>{this.state.error && this.state.error.toString()}</pre>
                  <pre>{this.state.errorInfo && this.state.errorInfo.componentStack}</pre>
                </details>
              )}
            </div>

            <div className="error-suggestions">
              <h3>O que você pode fazer:</h3>
              <ul>
                <li>Recarregue a página para tentar novamente</li>
                <li>Volte para a página anterior</li>
                <li>Navegue para a página inicial</li>
                <li>Se o problema persistir, entre em contato com o suporte</li>
              </ul>
            </div>

            <div className="error-actions">
              <button 
                className="btn btn-primary" 
                onClick={this.handleRetry}
                disabled={this.state.retryCount >= 3}
              >
                🔄 Tentar Novamente
                {this.state.retryCount > 0 && ` (${this.state.retryCount}/3)`}
              </button>
              
              <button className="btn btn-secondary" onClick={this.handleGoBack}>
                ← Voltar
              </button>
              
              <button className="btn btn-secondary" onClick={this.handleGoHome}>
                🏠 Página Inicial
              </button>
            </div>

            {this.state.retryCount >= 3 && (
              <div className="error-warning">
                <p>⚠️ Muitas tentativas. Tente recarregar a página ou navegar para outra seção.</p>
              </div>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary; 