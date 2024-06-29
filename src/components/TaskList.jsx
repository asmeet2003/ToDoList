import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, editTask, toggleTask } from '../redux/actions';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  const handleEditTask = (id) => {
    const newTask = prompt('Edit Task');
    if (newTask) {
      dispatch(editTask(id, newTask));
    }
  };

  const handleToggleTask = (id) => {
    dispatch(toggleTask(id));
  };

  return (
    <Box className="task-list">
      <List style={{ width: '100%', maxWidth: '500px', backgroundColor: '#fff' }}>
        {tasks.map((task) => (
          <ListItem key={task.id} className="task-list-item" divider>
            <Checkbox
              edge="start"
              checked={task.completed}
              onClick={() => handleToggleTask(task.id)}
            />
            <ListItemText 
              primary={task.text} 
              className="task-text"
              style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
            />
            <Box className="task-actions">
              <IconButton edge="end" onClick={() => handleEditTask(task.id)}>
                <EditIcon />
              </IconButton>
              <IconButton edge="end" onClick={() => handleDeleteTask(task.id)}>
                <DeleteIcon />
              </IconButton>
            </Box>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default TaskList;
