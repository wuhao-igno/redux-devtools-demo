import React from 'react';
import { TodoProvider as ReduxProvider } from './components/ReduxTodo/state/provider';
import ReduxTodoList from './components/ReduxTodo';
import ComplexComponent from './components/ComplexComponent';
import ReinspectComponent from './components/ReinspectComponent';

function App() {
  return (
    <div className="grid grid-rows-2 grid-cols-2 h-screen w-screen">
      <ReduxProvider>
        <div className="flex justify-center items-center">
          <ReduxTodoList />
        </div>
        <div className="flex justify-center items-center">
          <ComplexComponent showMore={false} />
        </div>
        <div className="flex justify-center items-center">
          <ReinspectComponent />
        </div>
      </ReduxProvider>
    </div>
  );
}

export default App;
