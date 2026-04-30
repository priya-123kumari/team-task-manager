const router = require("express").Router();

const {
  createTask,
  getTasksByProject,
  updateTask,
  deleteTask
} = require("../controllers/taskController");

const auth = require("../middleware/authMiddleware");
const { getDashboard } = require("../controllers/taskController");

router.get("/dashboard", auth, getDashboard);

router.post("/", auth, createTask);
router.get("/project/:id", auth, getTasksByProject);
router.put("/:id", auth, updateTask);
router.delete("/:id", auth, deleteTask);

module.exports = router;