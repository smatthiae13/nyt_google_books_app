const express = require("express");
const router = express.Router();

//Books Model
const Book = require("../../controllers/booksControllers");

//@route       GET api/books
//@description Get all items
//@access      Public
router
    .route("/")
    .get(booksControllers.findAll)
    .post(booksControllers.create);

router
    .route("./:id")    
    .get("booksControllers.findById")
    .put(booksControllers.update)
    .delete(booksController.remove);

module.exports = router;