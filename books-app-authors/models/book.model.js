const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: String,
    description: String,
    author: [{ type: Schema.Types.ObjectId, ref: 'Author' }],     // ref: 'nombreModelo'
    rating: Number
}, {
    timestamps: true
})

const Book = mongoose.model("Book", bookSchema)

module.exports = Book