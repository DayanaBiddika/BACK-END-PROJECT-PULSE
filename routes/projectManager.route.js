// create projectManagerApp express mini application
const express = require("express");
const projectManagerApp = express.Router();

// import controllers
const {
  projectUpdate,
  raiseProjectConcern,
  getProjectsForProjectManager,
  getSpecificProjectDetails,
  raiseProjectConcerns,
  updateProject,
  updateConcern,
  deleteConcern,
  updateProjectDetails,
  deleteProjectDetails,
} = require("../controllers/projectManager.controller");

// import projectManagerVerifyToken
const verifyProjectManagerToken = require("../middlewares/verifyProjectManagerToken");

// Routes for projectManager

// projectUpdates by projectManager
projectManagerApp.post(
  "/projectManager/projectUpdates",
  verifyProjectManagerToken,
  projectUpdate
);

// Raise project concerns by project Manager
projectManagerApp.post(
  "/projectManager/projectConcern",
  verifyProjectManagerToken,
  raiseProjectConcern
);

// get all the projects maintained by projectManager
projectManagerApp.get(
  "/:projectManagerId/portfolioDashboard",
  getProjectsForProjectManager
);

// get the indetail details for specific project
projectManagerApp.get("/projectManager/portfolioDashboard/:projectId", getSpecificProjectDetails);
projectManagerApp.post("/projectId/:projectId/raise-project-concern",raiseProjectConcerns)
projectManagerApp.put("/projectId/:projectId/update-project",updateProject)
projectManagerApp.put("/projectManager/:projectId/update-concerns",updateConcern)
projectManagerApp.delete("/projectManager/:projectId/delete-concern",deleteConcern)
projectManagerApp.put("/projectManager/:projectId/update",updateProjectDetails)
projectManagerApp.delete("/projectManager/:projectId/delete",deleteProjectDetails)

// exports
module.exports = projectManagerApp;
