// 似乎和前端有关，是前端接口
module.exports = app => {
    //require上级文件，再用controller
    const Skin = require("../controllers/Skin.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", Skin.create); // “/”是任意
  
    // Retrieve all Tutorials
    router.get("/", Skin.findAll);
  


    //id条件似乎可改,为何这里用 :id, 而不是直接/id
    // Retrieve a single Tutorial with id
    router.get("/:id", Skin.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", Skin.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", Skin.delete);
  
    // Delete all Tutorials
    router.delete("/", Skin.deleteAll);
  
    // 距离这个是postman里的设置说明更改哪个model（数据表）
    // 比如 localhost8081/api/Skin
    // 然后再发送get，put，delete命令说明更改哪个model（数据表）
    app.use('/api/Skin', router);
  };