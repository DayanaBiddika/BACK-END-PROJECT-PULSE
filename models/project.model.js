// import sequelize from dbconfig
const sequelize = require("../DB/db.config");
const { DataTypes } = require("sequelize");
// import User model
const { User } = require("./user.model");

// create model schema
exports.Project = sequelize.define("projects",{
    projectId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    gdoId: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: "userId",
      },
    },
    projectName: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    client: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    projectManager: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: "userId",
      },
    },
    hrManager: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: "userId",
      },
    },
    clientAccountManager: {
      type: DataTypes.STRING,
    },
    statusOfProject: {
      type: DataTypes.STRING,
    },
    startDate: {
      type: DataTypes.DATE,
    },
    endDate: {
      type: DataTypes.DATE,
    },
    overAllProjectFitnessIndicator: {
      type: DataTypes.STRING,
    },
    domain: {
      type: DataTypes.STRING,
    },
    typeOfProject: {
      type: DataTypes.STRING,
    },
  },
  {
    createdAt:false,
    updatedAt:false,
    freezeTableName: true,
    timestamps: false
  }
);
