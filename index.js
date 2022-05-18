const express = require('express');
const path = require('path')
const LogsController = require("./controllers/logsController");
require('dotenv').config();

const port = process.env.PORT || 3000;
const app = express();

const rootPath = path.resolve(__dirname);
const logsPath = path.join(rootPath, 'data', 'logs.txt')

app.set('view engine', 'hbs');
app.set('views', 'views');
app.use(express.static('views'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {LogsController.getLogs({req, res, logsPath}).then()});
app.post('/', (req, res) => {LogsController.addLog({req, res, logsPath}).then()});

app.listen (port, ()=>{
  console.log(`Server start on port ${port}`)
});