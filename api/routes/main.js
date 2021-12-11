const express = require('express');
var bodyParser = require('body-parser')
const router = express.Router();


var urlencodedParser = bodyParser.urlencoded({ extended: true });

var productos=[
  {
      "id":1,
      "image":"img1.png",
      "precio":2299,
      "title":"W BLAZER LOW PLATFORM"
  },
  {
      "id":2,
      "image":"img2.png",
      "precio":1999,
      "title":"W AF1 SHADOW"
  },
  {
      "id":3,
      "image":"img3.png",
      "precio":1999,
      "title":"OZWEEGO CELOX W"
  },
  {
      "id":4,
      "image":"img4.png",
      "precio":2299,
      "title":"W AIR FORCE 1 FONTANKA"
  },
  {
      "id":5,
      "image":"img5.png",
      "precio":2499,
      "title":"NIKE DUNK LOW PRM (TD)"
  },
  {
      "id":6,
      "image":"img6.png",
      "precio":1999,
      "title":"SUPERSTAR W"
  },
  {
      "id":7,
      "image":"img7.png",
      "precio":2299,
      "title":"WMNS AIR FORCE 1 07 LV8"
  },
  {
      "id":8,
      "image":"img8.png",
      "precio":1999,
      "title":"RS-X BUBBLE WNS"
  },
  {
      "id":9,
      "image":"img9.png",
      "precio":2499,
      "title":"W AF1 SHADOW"
  },
  {
      "id":10,
      "image":"img10.png",
      "precio":1999,
      "title":"CRUISE RIDER GL WNS PUMA"
  },
  {
      "id":11,
      "image":"img11.png",
      "precio":1999,
      "title":"W NIKE AIR MAX 90 SE NIKE"
  },
  {
      "id":12,
      "image":"img12.png",
      "precio":2299,
      "title":"ZX 1K BOOST - SEASO ADIDAS"
  }

];
var pedidos =[];

router.get('/productos/', (req, res) => {
    res.json(productos);
});
router.get('/pedido/', (req, res) => {
  res.status(200).json(pedidos);
});


router.post('/pedido/guardaPedido', urlencodedParser, (req, res) => {

  pedidos.push(req.body);
  res.status(201).send("REgistro creado")
  });



module.exports = router;
