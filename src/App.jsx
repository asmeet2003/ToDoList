import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import './styles.css';

const App = () => {
  return (
    <Provider store={store}>
      <Container className="container">
        <Typography 
          variant="h2" 
          component="h1" 
          align="center" 
          gutterBottom 
          style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '20px',
            color: '#3f51b5'
          }}
        >
          To-Do App
        </Typography>
        <TaskInput />
        <TaskList />
      </Container>
    </Provider>
  );
};

export default App;
