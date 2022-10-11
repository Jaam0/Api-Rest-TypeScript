import "dotenv/config";
import { Sequelize } from "sequelize";

const dbConnect = new Sequelize(
  `${process.env.DATABASE}`,
  `${process.env.DBUSER}`,
  `${process.env.DBPASSWORD}`,
  {
    host: process.env.HOSTDATABASE,
    dialect: "mysql",
  }
);

const dbAuth = async () => {
  try {
    await dbConnect.authenticate();
    console.log("-- Database online --".bgGreen);
  } catch (error: any) {
    throw new Error(error);
  }
};

export  {
    dbConnect,
    dbAuth
};
