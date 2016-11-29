var express = require('express');

var app = express();

var bodyParser = require('body-parser');

// CREATE APPLICATION/X-WWW-FORM-URLENCODED PARSER
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static('public'));

app.post('/sign-up', urlencodedParser, (req, res) => {
  // PREPARE OUTPUT IN JSON FORMAT
  console.log(req.body);
})

app.get('/log-in', (req, res) => {
  console.log(req.query);
})

app.listen(process.env.PORT || 3000, () => {
  console.log('This shit is working');
})
