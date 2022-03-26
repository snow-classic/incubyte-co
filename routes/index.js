const express = require("express");
const router = express.Router();

const WordsController = require("../controller/words")

router.post("/word", WordsController.postWord)
router.get("/word", WordsController.getWords)
router.put("/word", WordsController.updateWords)
router.delete("/word", WordsController.deleteWords)

module.exports = router;
