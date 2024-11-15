import React from "react";
import {Task} from "./Task";
import {Button} from "./Button";

type TodolistProps = {
    title: string
    // task:Array<TaskProps>
    tasks: TaskProps[]
}

type TaskProps = {
    id: number
    title: string
    isDone: boolean
}


export const Todolist = ({title, tasks}: TodolistProps) => {


    const mappedTasks = tasks.map((el) => {
        // debugger
        return (
            <Task key={el.id}
                  title={el.title}
                  isDone={el.isDone}
            />
        )
    })

    return (
        <div>

            <h3>{title}</h3>
            <div>
                <input/>
                <Button title={'+'}/>
            </div>
            {tasks.length === 0 ? (
                <p>Тасок нет</p>) : (
                <ul>
                    {mappedTasks}

                </ul>

            )}

            <div>
                <Button title={'All'}/>
                <Button title={'Active'}/>
                <Button title={'Completed'}/>
            </div>
        </div>
    )
}

