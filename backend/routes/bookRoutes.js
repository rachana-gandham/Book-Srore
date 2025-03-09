const express = require("express");
const router = express.Router();
const Book = require("../models/Product"); // Import your Book model

// Fetch books (all or by category)
router.get("/", async (req, res) => {
    try {
        const { category } = req.query; // Get category from query params
        let books;

        if (category) {
            // If category is provided, filter books by category
            books = await Book.find({ category: category });
        } else {
            // If no category is provided, return all books
            books = await Book.find();
        }

        res.json(books);
    } catch (err) {
        console.error("Error fetching books:", err);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

module.exports = router;
