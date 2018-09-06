const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
  res.render('index', {
    title: 'Lean Alvarez Web Design'
  });
});
//rutas-productos
router.get('/products', (req, res, next) => {
  res.render('products', {
    title: 'Tienda en linea - Productos'
  })
});

//rutas-contacto
router.get('/contact', (req, res, next) => {
  res.render('contact', {
    title: 'Tienda en linea - Contacto'
  })
});

module.exports = router;
