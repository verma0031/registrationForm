const path = require('path');

const User = require('./models/user');

const cors = require('cors');

const express = require('express');
const bodyParser = require('body-parser');


const sequelize = require('./util/database');
const app = express();

app.use(cors());

const adminRoutes = require('./routes/admin');



app.use(bodyParser.json({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', adminRoutes);


app.post('/user/add-user' , async(req, res, next) => {
    try{
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;

    console.log(name , email , phone);

    console.log("post request");

    const data = await User.create( {
        name: name,
        email: email,
        phone: phone
    })
    res.status(201).json({newUserDetail : data});
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            error: err
        })
    };
});

app. get ('/user/get-users' , async (reg, res, next) => {
    const users = await User .findAll();
    res.status (200) . json ({allUsers: users} )
});

app.delete('/user/delete-user/:id', async (req, res, next) => { 
    const uId = req.params. id;
    await User. destroy({where: {id: uId}});
    res.sendStatus (200);
})

sequelize.sync()
.then( () =>{
    app.listen(8000);
})
.catch(err => console.log(err));
