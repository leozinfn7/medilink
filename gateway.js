const express=require('express'); const cors=require('cors');
const login=require('./services/login'); const agenda=require('./services/agendamento'); const notif=require('./services/notificacoes');
const app=express(); app.use(cors()); app.use(express.json()); app.use(express.static('frontend'));
app.use('/api/auth',login); app.use('/api/agendamentos',agenda); app.use('/api/notificacoes',notif);
app.listen(3000,()=>console.log('MediLink: http://localhost:3000'));
