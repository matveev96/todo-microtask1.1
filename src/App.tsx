import React from 'react';
import './App.css';
import {Todolist} from "./components/Todolist";

function App() {
    const truck1 = 'What to learn-1'
    const truck2 = 'What to learn-2'

    const tasks1 = [
        {id: 1, title: 'HTML&CSS', isDone: true},  //0
        {id: 2, title: 'JS', isDone: true},       //1
        {id: 3, title: 'ReactJS', isDone: false},  //2
        {id: 4, title: 'ReactJS-2', isDone: false},  //3
        {id: 5, title: 'Typescript', isDone: false},
        {id: 6, title: 'RTK query', isDone: false},

    ]

    const tasks2: { id: number; title: string; isDone: boolean; }[] = []


    return (
        <div className="App">
            <Todolist title={truck1} tasks={tasks1}/>
            <Todolist title={truck2} tasks={tasks2}/>
        </div>

    );
}

export default App;
