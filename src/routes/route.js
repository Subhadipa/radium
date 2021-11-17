const express = require('express');
const router = express.Router();
const AuthorModel= require("../models/authorModel.js")
const BookModel= require("../models/bookModel.js")
const AuthorController= require("../controllers/authorController")
const BookController= require("../controllers/bookController")


router.post('/createAuthor',AuthorController.createAuthor);

router.post('/createBook',BookController.createBook);

router.get('/getAuthorBook',AuthorController.getBook);
router.get('/updateBook',AuthorController.updateBook);
router.get('/getBookCost',AuthorController.getBookCost);



module.exports = router;
