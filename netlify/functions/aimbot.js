exports.handler = async (event, context) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json'
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const data = JSON.parse(event.body);
    
    console.log('🎯 INJETANDO CONFIGURAÇÕES NO FREE FIRE');
    console.log('========================================');
    console.log('Shadowrocket Config:', data.general);
    console.log('Registry:', data.registry);
    console.log('App Info:', data.appInfo);
    console.log('User Config:', data.userConfig);
    console.log('========================================');

    // AQUI VOCÊ INTEGRA COM SUA API REAL DE INJEÇÃO
    // Exemplo de como seria a chamada:
    /*
    const apiResponse = await fetch('SUA_API_DE_INJECAO', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer SUA_API_KEY'
      },
      body: JSON.stringify({
        // Shadowrocket configuration
        shadowrocket: {
          general: data.general,
          rule: data.rule,
          urlRewrite: data.urlRewrite,
          script: data.script
        },
        // Registry values
        registry: {
          MouseTrails: data.registry.MouseTrails,
          MouseSensitivity: data.registry.MouseSensitivity,
          DoubleClickSpeed: data.registry.DoubleClickSpeed,
          DPI: data.registry.DPI,
          Aimlock: data.registry.Aimlock,
          aim: data.registry.aim
        },
        // App information
        appInfo: data.appInfo,
        // User configuration
        userConfig: data.userConfig,
        // Target
        target: data.appInfo.bundleID // com.dts.freefireth
      })
    });

    if (!apiResponse.ok) {
      throw new Error('Falha na injeção');
    }

    const result = await apiResponse.json();
    */

    // Simulação de resposta (remova quando integrar API real)
    const injectionResult = {
      success: true,
      message: 'Configurações injetadas com sucesso no Free Fire!',
      injected: {
        shadowrocket: {
          general: data.general,
          rule: data.rule,
          urlRewrite: data.urlRewrite,
          script: data.script
        },
        registry: data.registry,
        appInfo: data.appInfo,
        userConfig: data.userConfig
      },
      timestamp: new Date().toISOString()
    };

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(injectionResult)
    };

  } catch (error) {
    console.error('❌ Erro na injeção:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: 'Erro ao injetar configurações',
        message: error.message
      })
    };
  }
};
