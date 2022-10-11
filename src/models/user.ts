import { DataTypes } from "sequelize";
import { dbConnect } from "../config/database";

const User = dbConnect.define(
  "User",
  {
    name: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
      defaultValue: 'Usuario registrado'
    },
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
  }
);

export default User;
