const express = require('express');
const app = express();
const router = express.Router();
const jsonData = require('./user')




/*
- Create new html file name home.html 
- add <h1> tag with message "Welcome to ExpressJs Tutorial"
- Return home.html page to client
*/
router.get('/home', (req,res) => {
  res.send('<h1>Welcome to ExpressJs Tutorial</h1>');
});

/*
- Return all details from user.json file to client as JSON format
*/
router.get('/profile', (req,res) => {
  let userInfo = userObj.user()
  res.send(userInfo);
});

router.get("/login", (req, res) => {
  if (req.username === jsonData.username && req.password === jsonData.password)
  res.send({
  status: true,
  message: "User Is valid"
  });
  
  else if (req.username === jsonData.username)
  res.send({
  status: false,
  message: "Password is invalid"
  });
  
  else
  res.send({
  status: false,
  message: "User Name is invalid"
  });
  
  });


/*
- Modify /login router to accept username and password as query string parameter
- Read data from user.json file
- If username and  passsword is valid then send resonse as below 
    {
        status: true,
        message: "User Is valid"
    }

    
- If username is invalid then send response as below 
    {
        status: false,
        message: "User Name is invalid"
    }
- If passsword is invalid then send response as below 
    {
        status: false,
        message: "Password is invalid"
    }
*/
router.get('/login', (req,res) => {
  res.send('This is login router');
});

/*
- Modify /logout route to accept username as parameter and display message
    in HTML format like <b>${username} successfully logout.<b>
*/
router.get('/logout', (req,res) => {
  res.send(`<b>${req.params.username} successfully logout</b>`);
});


app.listen(process.env.port || 8081);

console.log('Web Server is listening at port '+ (process.env.port || 8081));