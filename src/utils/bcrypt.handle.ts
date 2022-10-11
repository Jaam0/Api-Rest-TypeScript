import bs from "bcryptjs";

const encrypt = async (password: string) => await bs.hash(password, 10);

const verfied = async (password: string, passwordHash: string) =>
  bs.compare(password, passwordHash);

export { encrypt, verfied };
