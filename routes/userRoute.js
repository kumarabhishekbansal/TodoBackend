const router=require("express").Router();
const{getData,getAllData,addItem,updateItem,deleteItem,getAllCompleteTasks,getAllInCompleteTasks}=require("../controllers/usercontrollers");

router.get("/getall",getAllData);
router.get("/getone",getData);
router.post("/create",addItem);
router.patch("/update",updateItem);
router.delete("/delete",deleteItem);
router.get("/complete",getAllCompleteTasks);
router.get("/incomplete",getAllInCompleteTasks);

module.exports=router;