const express = require("express");

const router = express.Router();

const candyController = require("../controllers/candy");

router.post("/add-candy", candyController.addCandy);

router.get("/get-candy", candyController.getCandy);

// router.delete("/delete-user/:id", userController.deleteUser);

router.put("/update-candy-by-one/:id", candyController.deleteOneCandy);

router.put("/update-candy-by-two/:id", candyController.deleteTwoCandy);

router.put("/update-candy-by-three/:id", candyController.deleteThreeCandy);

module.exports = router;
