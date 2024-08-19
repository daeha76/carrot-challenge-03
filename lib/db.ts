import { PrismaClient } from "@prisma/client/extension";

const db = new PrismaClient();

db.user.create({
  data: {
    username: "kokoa",
    password: "kokoa",
  },
});

export default db;
