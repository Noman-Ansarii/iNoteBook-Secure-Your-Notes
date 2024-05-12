require('dotenv').config({ path: './.env' });

const express = require('express')
var cors = require('cors');
const connectToMongo = require('./db.js');

connectToMongo();
const app = express()
const PORT = 8000;

app.use(cors());

app.use(express.json())

// AvailAble Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.listen(PORT, () => {
  console.log(`iNoteBook Backend listening at http://localhost:${PORT}`)
})