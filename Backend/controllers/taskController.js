const Task = require("../models/Task");

exports.createTask = async (req, res) => {
  const task = await Task.create(req.body);
  res.json(task);
};

exports.getTasksByProject = async (req, res) => {
  const tasks = await Task.find({ project: req.params.id });
  res.json(tasks);
};

exports.updateTask = async (req, res) => {
  const task = await Task.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(task);
};

exports.deleteTask = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ msg: "Task deleted" });
};
exports.getDashboard = async (req, res) => {
  try {
    const total = await Task.countDocuments();

    const completed = await Task.countDocuments({ status: "done" });

    const pending = await Task.countDocuments({
      status: { $ne: "done" }
    });

    const overdue = await Task.countDocuments({
      dueDate: { $lt: new Date() },
      status: { $ne: "done" }
    });

    res.json({
      total,
      completed,
      pending,
      overdue
    });
  } catch (err) {
    res.status(500).json(err);
  }
};
exports.createTask = async (req, res) => {
  try {
    const { title, project } = req.body;

    // ✅ Validation
    if (!title || !project) {
      return res.status(400).json({ msg: "Title and Project required" });
    }

    const task = await Task.create(req.body);
    res.json(task);
  } catch (err) {
    res.status(500).json(err);
  }
};
exports.createTask = async (req, res) => {
  try {
    const { title, project, assignedTo } = req.body;

    // ✅ Validation
    if (!title || !project) {
      return res.status(400).json({ msg: "Title and Project required" });
    }

    // ✅ Role-based restriction
    if (req.user.role !== "admin" && assignedTo) {
      return res.status(403).json({ msg: "Only admin can assign tasks" });
    }

    const task = await Task.create(req.body);
    res.json(task);
  } catch (err) {
    res.status(500).json(err);
  }
};