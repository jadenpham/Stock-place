var mongoose = require('mongoose');

var Users = mongoose.model("Users");
var Items = mongoose.model("Items");
var Cart = mongoose.model("Cart");
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
    login:(req,res)=>{
        console.log(req.body.username,'Username');
        Users.findOne({username:req.body.username},(err,user)=>{
            if(err){
                res.json({message: "Error with login", error: err})
            }
            else if(user){
                Users.findOne({username:req.body.username,password:req.body.password},(err,users)=>{
                    if(err){
                        res.json(err);
                        console.log('Password Does Not Match')
                    }
                    if(users){
                        req.session.userId = users._id;
                        // res.json({message: "Succesfully",user:users, userid: req.session.userId});
                        res.json({userid: req.session.userId});
                    }
                    else{
                        console.log('Password Does Not Match!')
                        res.json({message: "Username or password is not valid"})
                    }

                })
            }
            else{
                console.log('Username Does Not Exist');
                res.json({message: "Username or password is not valid"})
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
    },
    // addToCart:(req, res)=>{
    //     console.log("in controller w item", req.body)
    //     Cart.create(req.body)
    //         .then(
    //             res.json({message:"succesfull added item to db"})
    //         )
    //         .catch(err => res.json(err));
    // },
    addToCart:(req, res)=>{
      Cart.create(req.body, (err, item) =>{
          if(err){
              res.json(err)
          }
          res.json(item);
      })  
    },
    logOut:(req, res)=>{
        req.session.destroy();
        res.json({message: "logout successful"})
    }
}