const express = require('express');

const router = express.Router();

const { createContact,getContact,editContact,deleteContact,getSingleContactById} = require('../controller/allmethods');


router.post('/post', createContact);
router.get('/get', getContact);
router.put('/put/:id',editContact);
router.get('/get/:id',getSingleContactById);
router.delete('/delete/:id',deleteContact);


module.exports = router;