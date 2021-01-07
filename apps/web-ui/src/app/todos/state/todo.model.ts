export interface Todo {
  id: number | string;
  description: string

  userId: string
}

export function createTodo(params: Partial<Todo>) {
  return {

  } as Todo;
}
