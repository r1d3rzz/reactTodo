import { create } from "zustand";

const useTodoStore = create((set) => ({
  todos: [
    {
      id: 1,
      title: "Todo Task 1",
      detail: "Complete project proposal",
      isDone: false,
    },
    { id: 2, title: "Todo Task 2", detail: "Review team's code", isDone: true },
    {
      id: 3,
      title: "Todo Task 3",
      detail: "Design homepage layout",
      isDone: false,
    },
    {
      id: 4,
      title: "Todo Task 4",
      detail: "Prepare presentation slides",
      isDone: true,
    },
    {
      id: 5,
      title: "Todo Task 5",
      detail: "Update project documentation",
      isDone: false,
    },
  ],
  doneTodo: (id) => {
    set((state) => ({
      todos: state.todos.map((el) =>
        el.id === id ? { ...el, isDone: !el.isDone } : { ...el }
      ),
    }));
  },
  delTodo: (id) => {
    set((state) => ({
      todos: state.todos.filter((el) => el.id !== id),
    }));
  },
  addTodo: (newTodo) =>
    set((state) => ({
      todos: [...state.todos, newTodo],
    })),
}));

export default useTodoStore;
