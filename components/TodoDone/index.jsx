import React from "react";
import { TodoItem } from "../TodoItem";
import { useQuery } from "@tanstack/react-query";
import { getDone } from "../../hooks/useTodo";

export const TodoDone = () => {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["todos"],
    queryFn: getDone,
  });

  if (isLoading) {
    return (
      <div className="text-center">
        <div className="spinner-border" role="status">
          <span className="sr-only"></span>
        </div>
      </div>
    );
  }
  if (isError) {
    return (
      <div className="text-center">
        <span>Error: {error.message}</span>
      </div>
    );
  }
  return (
    <div>
      {data.todos.length ? (
        <>
          {data.todos.map((item) => (
            <TodoItem
              id={item.id}
              task={item.task}
              isCompleted={item.isCompleted}
            />
          ))}
        </>
      ) : (
        <center>
          {" "}
          <p>Create new task !</p>{" "}
        </center>
      )}
    </div>
  );
};
