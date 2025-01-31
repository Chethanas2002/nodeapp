const express = require("express")
const router = express.Router()
const controller = require("../controller/apihandler")


// router.route("/")
//     .get(controller.test)
//     .post(controller.test1)
//     .delete(controller.test2)

router.route("/getemployees")
    .get(controller.getAllEmployee)

router.route("/addemployees")
    .post(controller.addEmployee)

router.route("/remove/:id")
    .delete(controller.getAllEmployee)

module.exports = router
