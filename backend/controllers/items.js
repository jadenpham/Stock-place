var mongoose = require('mongoose');

var Users = mongoose.model("Users");
var Items = mongoose.model("Items");
module.exports = {
    register: (req, res) =>{
        // console.log(req.body, "this is the req.body");
        Users.create(req.body, (err, user)=>{
            if(err){
                res.json(err);
            } else{
                console.log("added succesfully");
                res.json({message: "Succesful", user:user});
            }
        })
    },
    create: (req, res) =>{
        console.log(req.body, "this is the form")
        Items.create(req.body, (err, item)=>{
            if(err){
                res.json(err);
            } else{
                res.json({message: "Success", item:item})
            }
        })
    },
    all: (req, res) =>{
        Items.find({}, (err, items)=>{
            if(err){
                res.json(err);
            } else{
                res.json(items);
            }
        })
    },
    one: (req, res) =>{
        Items.findOne({_id:req.params.id}, (err, item)=>{
            if(err){
                res.json(err);
            } else{
                res.json({message:"Success", item:item})
            }
        })
    }
}