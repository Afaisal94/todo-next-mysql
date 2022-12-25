import axios from "axios";

let baseApiUrl = 'https://todolist-next-sqlite.vercel.app';

const getTodos = async () => {
  const response = await axios.get(
    `${baseApiUrl}/api/todos/filter?inCompleted=0`
  );
  return response.data;
};

const getDone = async () => {
  const response = await axios.get(
    `${baseApiUrl}/api/todos/filter?isCompleted=1`
  );
  return response.data;
};

const getAll = async () => {
  const response = await axios.get(`${baseApiUrl}/api/todos/getall`);
  return response.data;
};

const createTodo = async ({ task }) => {
  const response = await axios.post(`${baseApiUrl}/api/todos/create`, {
    task,
  });
  return response.data;
};

const completeTodo = async ({ id }) => {
    const isCompleted = 1;
    await axios.patch(`${baseApiUrl}/api/todos/update/${id}`, {isCompleted});
    return id;
};

const deleteTodo = async ({ id }) => {
    await axios.delete(`${baseApiUrl}/api/todos/delete/${id}`);
    return id;
};

export { getTodos, getDone, getAll, createTodo, completeTodo, deleteTodo };
