const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { id } = req.query;

  // UPDATE DATA TODO
  if (req.method === "PATCH") {
    try {
      const todo = await prisma.todo.update({
        where: {
          id: Number(id),
        },
        data: {
          isCompleted: Boolean(req.body.isCompleted),
        },
      });
      res.status(200).json(todo);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  } else {
    res.status(400).json({ status: "Method not allowed" });
  }
}
