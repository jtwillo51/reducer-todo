export const initialState = [
  {
    item: "Learn about reducers",
    completed: false,
    id: 3892987589
  }
];

const addTodo = value => {
  return {
    item: value,
    completed: false,
    id: Date.now()
  };
};

function selectCompleted(task) {
  return task.completed === false;
}




export const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_TODO":
      console.log("TOGGLE_TODO");

      return state.map(todo => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: !todo.completed
          };
        } else {
          return todo;
        }
      });
    case "ADD_TODO":
      console.log("ADD_TODO");
      return [...state, addTodo(action.payload)];

    case "CLEAR_COMPLETED":
      console.log("CLEAR_COMPLETED");
      return action.payload.filter(selectCompleted)

    default:
      return state;
  }
};
