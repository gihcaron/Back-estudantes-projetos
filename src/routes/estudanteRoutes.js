const express = require("express");
const router = express.Router();
const estudantesController = require("../controllers/estudantesController");
const upload = require("../config/upload.js"); 
const apiKeyMiddleware = require("../config/apiKey"); 

router.use(apiKeyMiddleware);

router.get("/", estudantesController.getEstudantes);
router.get("/:id", estudantesController.getEstudante);
router.post("/", upload.single("photo"),  estudantesController.createEstudante);
router.put("/:id", estudantesController.updateEstudante);
router.delete("/:id", estudantesController.deleteEstudante);

module.exports = router;
