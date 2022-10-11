import { Car } from "../interfaces/car.interface";
import Item from "../models/item";

const insertCar = async (item: Car) => {
  const newItem = {
    name: item.name,
    color: item.color,
    gas: item.gas,
    year: item.year,
    description: item.description,
    price: item.price,
  };

  const responseInsert = await Item.create(newItem);
  await responseInsert.save();
  return responseInsert;
};

const getCars = async () => {
  const responseItem = await Item.findAll({});
  return responseItem;
};

const getCar = async (id: number) => {
  const responseItem = await Item.findByPk(id);
  return responseItem === null ? { Message: "Not found" } : responseItem;
};

const updateCar = async (id: number, data: Car) => {
  const responseItem = await Item.update(data, {
    where: {
      id: id,
    },
  });
  return responseItem;
};

const deleteCar = async (id: number) => {
  const responseItem = await Item.destroy({
    where: {
      id: id,
    },
  });
  return responseItem;
};

export { insertCar, getCars, getCar, updateCar, deleteCar };
