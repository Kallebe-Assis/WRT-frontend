import React, { useState, useEffect } from 'react';
import { testConnection } from '../config/api-config.js';

const ApiTest = () => {
  const [status, setStatus] = useState('testing');
  const [results, setResults] = useState([]);
  const [selectedConfig, setSelectedConfig] = useState(null);

  useEffect(() => {
    testApiConnections();
  }, []);

  const testApiConnections = async () => {
    setStatus('testing');
    setResults([]);

    const configs = [
      { name: 'Development', url: 'http://localhost:5000/api' },
      { name: 'Production (Vercel)', url: 'https://wrt-back.vercel.app/api' },
      { name: 'Alternative', url: 'https://wrt-back-git-main-kallebeassiss.vercel.app/api' }
    ];

    const testResults = [];

    for (const config of configs) {
      try {
        console.log(`🧪 Testando ${config.name}: ${config.url}/health`);
        
        const startTime = Date.now();
        const response = await fetch(`${config.url}/health`, {
          method: 'GET',
          timeout: 5000
        });
        const endTime = Date.now();
        
        const result = {
          name: config.name,
          url: config.url,
          status: response.status,
          ok: response.ok,
          time: endTime - startTime,
          error: null
        };

        if (response.ok) {
          try {
            const data = await response.json();
            result.data = data;
          } catch (e) {
            result.data = 'Resposta não é JSON válido';
          }
        }

        testResults.push(result);
        setResults([...testResults]);

      } catch (error) {
        const result = {
          name: config.name,
          url: config.url,
          status: 'ERROR',
          ok: false,
          time: 0,
          error: error.message,
          data: null
        };
        
        testResults.push(result);
        setResults([...testResults]);
      }
    }

    setStatus('completed');
    
    // Selecionar a primeira configuração que funcionou
    const workingConfig = testResults.find(r => r.ok);
    if (workingConfig) {
      setSelectedConfig(workingConfig);
    }
  };

  const getStatusColor = (ok) => {
    return ok ? 'text-green-600' : 'text-red-600';
  };

  const getStatusIcon = (ok) => {
    return ok ? '✅' : '❌';
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">🧪 Teste de Conectividade da API</h2>
      
      <div className="mb-4">
        <button 
          onClick={testApiConnections}
          disabled={status === 'testing'}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
        >
          {status === 'testing' ? '🔄 Testando...' : '🔄 Testar Novamente'}
        </button>
      </div>

      <div className="space-y-3">
        {results.map((result, index) => (
          <div key={index} className="border rounded p-3">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold">{result.name}</h3>
                <p className="text-sm text-gray-600">{result.url}</p>
              </div>
              <div className={`font-bold ${getStatusColor(result.ok)}`}>
                {getStatusIcon(result.ok)} {result.status}
              </div>
            </div>
            
            {result.time > 0 && (
              <p className="text-sm text-gray-500 mt-1">
                Tempo de resposta: {result.time}ms
              </p>
            )}
            
            {result.error && (
              <p className="text-sm text-red-600 mt-1">
                Erro: {result.error}
              </p>
            )}
            
            {result.data && (
              <details className="mt-2">
                <summary className="cursor-pointer text-sm text-blue-600">
                  Ver resposta
                </summary>
                <pre className="text-xs bg-gray-100 p-2 rounded mt-1 overflow-auto">
                  {JSON.stringify(result.data, null, 2)}
                </pre>
              </details>
            )}
          </div>
        ))}
      </div>

      {selectedConfig && (
        <div className="mt-4 p-3 bg-green-100 border border-green-300 rounded">
          <p className="text-green-800">
            <strong>✅ Configuração selecionada:</strong> {selectedConfig.name}
          </p>
          <p className="text-sm text-green-600">{selectedConfig.url}</p>
        </div>
      )}

      {status === 'completed' && !selectedConfig && (
        <div className="mt-4 p-3 bg-red-100 border border-red-300 rounded">
          <p className="text-red-800">
            <strong>❌ Nenhuma API está acessível!</strong>
          </p>
          <p className="text-sm text-red-600">
            Verifique se o backend está rodando ou se há problemas de conectividade.
          </p>
        </div>
      )}
    </div>
  );
};

export default ApiTest; 