const personalDetailController = require('../controller/personalDetailController.js');
const router = require('express').Router()

router.post('/register', personalDetailController.saveDetail);

router.post('/getall', personalDetailController.getAll);

router.post('/:id', personalDetailController.getSpecific);

router.post('/:id', personalDetailController.updateSpecific);

router.post('/:id', personalDetailController.deleteSpecific);
module.exports = router;

