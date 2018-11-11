var express = require('express');
var router = express.Router();

router.post('/login', (req,res,next)=>{
  /**
   * login 요청 : 요청은 메소드는 POST. 바디에 id,password 키로 값을 보낸다. 로그인 성공조건은 id === 본인이름, password===본인이름123
   */

   /**
    * {
    *   id:본인이름,
    *   password:본인이름123
    * }
    */
  const {id,password} = req.body; // 디스트럭쳐링
  
  if(id!=='이현수'){
    const error = new Error("Bad Request");
    error.status = 400;
    return next(error);
    //  return res.status(404).json({message:"User Not Found"});
  }
  else if(password!=='이현수123'){
    const error = new Error("Bad Request");
    error.status = 400;
    return next(error);
    // return res.status(401).json({message:"Invalid Password"});
  }
  next();
});

router.post("/login",(req,res,next)=>{
  res.json({message:"LoggedIn Success"})
});

router.post("/",(req,res,next)=>{
  /**
   * User 생성(Create) 요청
   * body : id, password
   * method : POST
   * content-type : x-www-urlencoded, appliaction/json
   */

   /**
    * @TODO DB Model을 가지고 실제 User 생성
    */
  const {id, password} = req.body;

  if(id!=='이현수'){
    const error = new Error("Bad Request");
    error.status = 400;
    return next(error);
    //  return res.status(404).json({message:"User Not Found"});
  }
  else if(password!=='이현수123'){
    const error = new Error("Bad Request");
    error.status = 400;
    return next(error);
    // return res.status(401).json({message:"Invalid Password"});
  }
  const User = {
    id:id,
    password:password
  }
  req.CreatedUser = User;
  // next("route");
  next();
}, (req,res,next)=>{
  res.json({message:"next Route"});
});

router.post("/", (req,res,next)=>{
  res.json(req.CreatedUser);
});

router.post("/", (req,res,next)=>{
  res.json({msesage:"다음 route"});
});

module.exports = router;
