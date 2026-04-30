const Project = require("../models/Project");

exports.createProject = async (req, res) => {
  try {
    const project = await Project.create({
      ...req.body,
      createdBy: req.user.id
    });

    res.json(project);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getProjects = async (req, res) => {
  const projects = await Project.find({
    $or: [
      { createdBy: req.user.id },
      { members: req.user.id }
    ]
  });

  res.json(projects);
};