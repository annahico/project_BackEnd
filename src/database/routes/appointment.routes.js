const express = require('express');
const router = express.Router();
const ctrl = require("../../controllers/appointmentController");

// APPOINTMENT END POINT
router.post("/", ctrl.create);
router.get("/", ctrl.getAll);
router.get("/:id", ctrl.getById);
router.put("/:id", ctrl.update);
router.delete("/:id", ctrl.delete);


module.exports = router;