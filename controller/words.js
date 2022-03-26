
const req = require("express/lib/request");
const WordsModel = require("../models/words.model");

exports.postWord = (req, res) =>{
    new WordsModel({Word:req.body.word})
    .save()
    .then((result) => res.json({ success: true, message: result }))
    .catch((err) => res.status(400).send(err));
}
 

exports.getWords = (req, res) =>{
    WordsModel.find()
    .then((result) => res.json({ success: true, Words: result }))
    .catch((err) => res.status(400).send(err));
}

exports.updateWords= (req,res) =>{
    WordsModel.findOneAndUpdate({_id: req.body._id},{Word:req.body.word})
    .then((result) => res.json({ success: true, message: result }))
    .catch((err) => res.status(400).send(err));
}

exports.deleteWords =(req,res) =>{
    WordsModel.findOneAndDelete({_id:req.body._id})
    .then((result) => res.json({ success: true, message: result }))
    .catch((err) => res.status(400).send(err));
}