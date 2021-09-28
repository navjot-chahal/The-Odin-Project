var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];



/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', { title: 'Mini Messageboard', messages: messages});
});

router.get('/new', function(req, res, next) {
  res.render('form', { title: 'New Route'});
});

/* POST home page. */

router.post("/new", (req,res, next) => {
  
  let data = req.body
  messages.push({text: data.message, user: data.authorName, added: new Date()})

  res.redirect("/")
  // const data = req.body
  // console.log(typeof(req.body))
})


module.exports = router;
