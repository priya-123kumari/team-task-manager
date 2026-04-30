const router = require("express").Router();
const { createProject, getProjects } = require("../controllers/projectController");
const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");

router.post("/", auth, role("admin"), createProject);
router.get("/", auth, getProjects);

module.exports = router;