const express = require('express');
const router = express.Router();

let players =
   [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
           ]
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": [
               "soccer"
           ],
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
               "soccer"
           ],
       },
   ]
 
   router.post('/players', function (req, res) {
 
       //LOGIC

       if ((players.find((data)=>(data.name==req.body.name)))==undefined)
       {
           players.push(req.body)
           res.send(  { data: players , status: true }  )
       }
       else{
            res.send("Player Name "+ req.body.name +" --- already Exist in DataBase")
       }
       
       console.log(players)
   })


module.exports = router;