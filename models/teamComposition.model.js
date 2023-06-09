// import sequelize from dbcoonfig
const sequelize = require("../DB/db.config");

// import DataTypes
const { DataTypes } = require("sequelize");

// import Employee model
const { Employee } = require("./employee.model");
// project model
const { Project } = require("./project.model");

// create schema/model for team
exports.TeamComposition = sequelize.define("employeeProjectDetails",{
    empId: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      references: {
        model: Employee,
        key: "empId",
      },
    },
    projectId: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      references: {
        model: Project,
        key: "projectId",
      },
    },
    username: {
      type: DataTypes.STRING,
    },
    role: {
      type: DataTypes.STRING,
    },
    startDate: {
      type: DataTypes.STRING,
    },
    endDate: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.STRING,
    },
    billingStatus: {
      type: DataTypes.STRING,
    },
    exposedToCustomer: {
      type: DataTypes.STRING,
    },
    allocationType: {
      type: DataTypes.STRING,
    },
  },
  {
    createdAt:false,
    updatedAt:false,
    timestamps: false,
    freezeTableName: true
  }
);
