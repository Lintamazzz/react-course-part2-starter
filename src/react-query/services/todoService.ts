import APIClient from "./apiClient";

export interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

const todoService = new APIClient<Todo>("/todos");

export default todoService;
