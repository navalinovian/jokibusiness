const express = require('express')
const { invoiceIndex, paymentCreate, invoiceCreate, invoiceShow } = require('./controller/InvoiceController');
const { productIndex, productAll, productCreate, productUpdate, productSoftDelete, productHardDelete } = require('./controller/ProductController');
const { userIndex, userShow, userCreate, userUpdate, userSoftDelete, login } = require('./controller/UserController');
const router = express.Router()

router.get('/product', productIndex);
router.get('/all-product', productAll);
router.post('/product', productCreate);
router.put('/product/:uuid', productUpdate);
router.delete('/product/:uuid', productSoftDelete);
router.delete('/del-product/:uuid', productHardDelete);

router.get('/user', userIndex)
router.get('/user/:uuid', userShow)
router.post('/user', userCreate)
router.post('/login', login)
router.patch('/user/:uuid', userUpdate)
router.delete('/user/:uuid', userSoftDelete)

router.get('/invoice', invoiceIndex)
router.post('/invoice', invoiceCreate)
router.get('/invoice/:uuid', invoiceShow)

module.exports = router