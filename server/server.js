const express = require("express");
const cors = require('cors')
const chats = require("./data/data");
const connectDB = require("./config/connectDB");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3500;

////////////Middlewares//////////


app.use(express.json())
app.use(cors())
connectDB();

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use('/api/auth',require('./routes/authRoutes'));
app.use('/api/user',require('./routes/userRoutes'));
app.use('/api/chat',require('./routes/chatRoutes'));
app.listen(PORT, () => {
  console.log(`Server is Listning on Port:${PORT}`);
});
