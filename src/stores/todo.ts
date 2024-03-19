import { create } from 'zustand';
import { uuid } from '../utils';

type Item = {
  id: string;
  value: string;
};

type TodoState = {
  todo: Item[];
  done: Item[];
  addTodo: (value: string) => void;
  /** Move item todo --> done */
  setDone: (id: string) => void;
  /** Move item todo <-- done */
  setTodo: (id: string) => void;
  /** Delete item from todo and done */
  remove: (id: string) => void;
};

export const useTodoStore = create<TodoState>()((set) => ({
  todo: [], // initial
  done: [], // initial
  addTodo(value) {
    set((state) => {
      // ! use spread operator to actually replace the instance of the array instead of mutating it
      const existing = [...state.todo];

      // add at top of list
      existing.unshift({
        id: uuid(),
        value,
      });

      return {
        todo: existing,
      };
    });
  },
  setDone: (id) => {
    set((state) => {
      const { from, to } = move(id, state.todo, state.done);

      return {
        todo: from,
        done: to,
      };
    });
  },
  setTodo(id) {
    set((state) => {
      const { from, to } = move(id, state.done, state.todo);

      return {
        todo: to,
        done: from,
      };
    });
  },
  remove(id) {
    set((state) => {
      // ! assign a new array instead of mutating it
      state.todo = state.todo.filter((t) => t.id !== id);
      state.done = state.done.filter((d) => d.id !== id);

      return {
        todo: state.todo,
        done: state.done,
      };
    });
  },
}));

const move = (
  id: string,
  from: Item[],
  to: Item[],
): { from: Item[]; to: Item[] } => {
  from = [...from];
  to = [...to];

  const idx = from.findIndex((t) => t.id === id);

  if (idx >= 0) {
    const move = { ...from[idx] };
    to.unshift(move);

    // remove from
    from = from.filter((a) => a.id !== id);
  }

  return {
    from,
    to,
  };
};
