import { DataTypes } from "sequelize";
import { dbConnect } from "../config/database";

enum Gas {
  "gasoline",
  "electric",
}

const Item = dbConnect.define(
  "Item",
  {
    name: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    color: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    gas: {
      type: DataTypes.STRING,
      // allowNull: false
    },
    year: {
      type: DataTypes.INTEGER,
      // allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      // allowNull: false
    },
    price: {
      type: DataTypes.FLOAT,
      // allowNull: false
    },
  },
  {
    timestamps: true,
  }
);

export default Item;
