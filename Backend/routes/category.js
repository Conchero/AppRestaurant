const express = require("express");
const router = express.Router();

const {store,getAll, deleteAll} = require("../controllers/categoryController");


router.post("/",store);
router.get("/",getAll);
router.delete("/",deleteAll);


module.exports = router;