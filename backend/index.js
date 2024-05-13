require('dotenv').config({ path: './.env' });

const cors = require('cors');
const express = require('express')
const connectToMongo = require('./db.js');

const corsConfig = {
  origin: '*',
  credentials: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204
}

app.use(cors(corsConfig));

connectToMongo();
const app = express()
const PORT = 8000;


app.use(express.json())

// AvailAble Routes
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.listen(PORT, () => {
  console.log(`iNoteBook Backend listening at http://localhost:${PORT}`)
})