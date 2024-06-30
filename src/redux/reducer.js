import { ADD_TASK, DELETE_TASK, EDIT_TASK, TOGGLE_TASK } from './actions';

const initialState = {
  tasks: JSON.parse(localStorage.getItem('tasks')) || [],
};

const saveTasksToLocalStorage = (tasks) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK: {
      const updatedTasks = [...state.tasks, { id: Date.now(), text: action.payload, completed: false }];
      saveTasksToLocalStorage(updatedTasks);
      return {
        ...state,
        tasks: updatedTasks,
      };
    }
    case DELETE_TASK: {
      const updatedTasks = state.tasks.filter((task) => task.id !== action.payload);
      saveTasksToLocalStorage(updatedTasks);
      return {
        ...state,
        tasks: updatedTasks,
      };
    }
    case EDIT_TASK: {
      const updatedTasks = state.tasks.map((task) =>
        task.id === action.payload.id ? { ...task, text: action.payload.updatedTask } : task
      );
      saveTasksToLocalStorage(updatedTasks);
      return {
        ...state,
        tasks: updatedTasks,
      };
    }
    case TOGGLE_TASK: {
      const updatedTasks = state.tasks.map((task) =>
        task.id === action.payload ? { ...task, completed: !task.completed } : task
      );
      saveTasksToLocalStorage(updatedTasks);
      return {
        ...state,
        tasks: updatedTasks,
      };
    }
    default:
      return state;
  }
};

export default tasksReducer;
