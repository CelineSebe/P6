//importer express
const express = require('express');
const router = express.Router();

//importer middleware
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

//importer controller
const sauceCtrl = require('../controllers/sauce');

router.get('/', auth, sauceCtrl.getAllSauces);
router.post('/', auth, multer, sauceCtrl.createSauce);
router.get('/:id', auth, sauceCtrl.findOneSauce);
router.put('/:id', auth, multer, sauceCtrl.modifySauce);
router.delete('/:id', auth, sauceCtrl.deleteSauce);
router.post('/:id/like', auth, sauceCtrl.likeDislike);

module.exports = router;