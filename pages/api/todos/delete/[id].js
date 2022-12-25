const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { id } = req.query;

  // DELETE DATA TODO
  if (req.method === "DELETE") {
    try {
      await prisma.todo.delete({
        where: {
          id: Number(id),
        },
      });
      res.status(200).json({ message: "Todo successfully deleted" });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  } else {
    res.status(400).json({ status: "Method not allowed" });
  }
}
