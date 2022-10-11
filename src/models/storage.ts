import { DataTypes } from "sequelize";
import { dbConnect } from "../config/database";

const Storage = dbConnect.define(
  "Storage",
  {
    filename: {
      type: DataTypes.STRING,
    },
    path: {
      type: DataTypes.STRING,
    },
    iduser: {
      type: DataTypes.STRING,
    }
  },
  {
    timestamps: true,
  }
);

export default Storage;
