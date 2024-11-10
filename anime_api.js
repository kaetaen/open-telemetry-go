const http = require('http');

const port = 3000;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const server = http.createServer(async (_, res) => {

  const animes = [
    {
        name: 'Naruto',
        status: 'completed'
    },
    {
        name: 'One Piece',
        status: 'completed'
    },
    {
        name: 'Bleach',
        status: 'completed'
    },
    {
        name: 'Dragon Ball',
        status: 'completed'
    },
    {
        name: 'Death Note',
        status: 'completed'
    },
    {
        name: 'Fairy Tail',
        status: 'completed'
    }
  ]

  const response = JSON.stringify(animes)

  await sleep(10000);

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(response);

});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});