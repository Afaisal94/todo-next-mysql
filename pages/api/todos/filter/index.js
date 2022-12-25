const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

export default async function handler(req, res) {
  const isCompleted = parseInt(req.query.isCompleted);
  // GET ALL DATA FILTER BY ISCOMPLETED
  if (req.method === "GET") {
    try {
      const response = await prisma.todo.findMany({
        where: {
          isCompleted: Boolean(isCompleted),
        },
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
