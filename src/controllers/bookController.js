const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let book = req.body
    let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})
}

const getBooksData= async function (req, res) {
    let books = await bookModel.find()
    res.send({data: books})
}

const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author_id')
    res.send({data: specificBook})

}

const getBooksWithAuthor_Publisher_Details = async function (req, res) {
    let specificBook = await bookModel.find().populate(['author_id','publisher_id'])
    res.send({data: specificBook})
}

const updateIsHardCover =async function (req,res){
    let data= await publisherModel.find({name:{$in:["Penguin","HarperCollins"]}}).select({_id:1})
    idArry=data.map((obj)=>{return obj._id.toString()})
    let up =await bookModel.updateMany({publisher_id:{$in:idArry}},{$set:{isHardCover:true}})
    let upBook=await bookModel.find()
    res.send({data:up,upBook})
}

module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
module.exports.updateIsHardCover=updateIsHardCover
module.exports.getBooksWithAuthor_Publisher_Details=getBooksWithAuthor_Publisher_Details
