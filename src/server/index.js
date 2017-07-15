const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const api = require('./routes');

const root = './';
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(root, 'dist')));
app.use('/api', api);
app.get('*', (req, res) => {
  res.sendFile('dist/index.html', {root: root});
});

const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`API running on localhost:${port}`));
