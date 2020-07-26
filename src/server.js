const express = require('express');

const server = express();

// ligar o servidor
server.listen(3000);

// configurar pasta pública
server.use(express.static('public'));

// template engine do nunjucks
const nunjucks = require('nunjucks');

nunjucks.configure('src/views', {
	express: server,
	noCache: true,
});

// configurar rotas
// pagina inicial
server.get('/', (req, res) => {
	return res.render('index.html', {
		title: 'Seu Marketplace de coleta de resíduos',
	});
});

server.get('/create-point', (req, res) => {
	return res.render('create-point.html');
});

server.get('/search', (req, res) => {
	return res.render('search-results.html');
});
