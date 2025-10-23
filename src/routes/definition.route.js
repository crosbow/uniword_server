import express from "express";
import { getWordDefinition } from "../controllers/get_word_definition.controller.js";

const router = express.Router();

router.get("/:word", getWordDefinition);

export default router;
