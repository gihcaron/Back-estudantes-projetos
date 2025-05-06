const express = require("express");
const router = express.Router();
const projetosController = require("../controllers/projetosControllers");
const apiKeyMiddleware = require("../config/apiKey"); 

router.use(apiKeyMiddleware);

router.get("/", projetosController.getProjetos);
router.get("/:id", projetosController.getProjeto);
router.post("/", projetosController.createProjeto);
router.put("/:id", projetosController.updateProjeto);
router.delete("/:id", projetosController.deleteProjeto);

module.exports = router;
