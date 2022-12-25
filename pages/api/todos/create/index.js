const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

export default async function handler(req, res) {
  // CREATE DATA TODO
  if (req.method === "POST") {
    try {
      const data = await prisma.todo.create({
        data: {
          task: req.body.task,
          isCompleted: false,
        },
      });
      return res.status(201).json(data);
    } catch (error) {
      return res.status(401).json({
        success: false,
        message: error.message,
      });
    }
  } else {
    res.status(400).json({ status: "Method not allowed" });
  }
}
