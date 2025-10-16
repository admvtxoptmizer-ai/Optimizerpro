const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('.'));

// Rota principal
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// API de configuração
app.post('/api/config', (req, res) => {
  const config = req.body;
  console.log('📥 Configuração recebida:', config);
  
  res.json({
    success: true,
    message: 'Configuração salva',
    data: config,
    timestamp: new Date().toISOString()
  });
});

// API de injeção Aimbot
app.post('/api/aimbot', async (req, res) => {
  const data = req.body;
  console.log('🎯 Injetando Aimbot:', data);

  // Aqui você integra com a API real de injeção
  const injectionResult = {
    success: true,
    message: 'Configurações injetadas no Free Fire',
    injected: {
      shadowrocket: data.shadowrocket || data,
      registry: data.registry,
      appInfo: data.appInfo,
      userConfig: data.userConfig
    },
    timestamp: new Date().toISOString()
  };

  res.json(injectionResult);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ API rodando em http://localhost:${PORT}`);
  console.log(`🔥 Free Fire Config pronto para injetar!`);
});
