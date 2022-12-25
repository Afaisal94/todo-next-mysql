const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

export default async function handler(req, res) {
  // GET ALL DATA TODOS
  if (req.method === "GET") {
    try {
      const response = await prisma.todo.findMany({
        orderBy: [
          {
            id: "desc",
          },
        ],
      });
      res.status(200).json({
        todos: response,
      });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  } else {
    res.status(400).json({ status: "Method not allowed" });
  }
}
