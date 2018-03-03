const express = require('express')
const app = express()

const bodyParser = require('body-parser')
const nunjucks = require('nunjucks')
const volleyball = require('volleyball')

module.exports = app

app.engine('html', nunjucks.render);
app.set('view engine', 'html');
nunjucks.configure('views', { noCache: true });

app.use(volleyball);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.listen(1337, () => {
  console.log('listening on port 1337')
})

app.get('/', (req, res) => {
  res.render('index')
})
