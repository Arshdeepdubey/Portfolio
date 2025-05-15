require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const Message = require('./models/Message');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

app.get('/api/command/:cmd', (req, res) => {
  const known = {
    greet: "Hello from the backend!",
    serverinfo: "API v2 with MongoDB & Docker!",
  };
  const cmd = req.params.cmd.toLowerCase();
  res.json({ response: known[cmd] || `'${cmd}' not recognized.` });
});

app.post('/api/message', async (req, res) => {
  const { name, message } = req.body;
  try {
    const entry = new Message({ name, message });
    await entry.save();
    res.json({ status: 'Message logged to DB.' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to store message.' });
  }
});

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
