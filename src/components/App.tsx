import * as React from 'react';
import TimerIcon from '@material-ui/icons/Timer';
import { ToDoList } from './ToDoList';

export class App extends React.Component {
    render() {
        return (
          <div>
            <h1>Domates</h1>
            <TimerIcon />
            <ToDoList />
          </div>
        );
    };
}