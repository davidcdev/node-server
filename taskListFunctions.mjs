import chalk from 'chalk';
import fs from 'fs';

const taskListFilePath = 'taskList.json';
let taskList = [];

let indicator = 0;

export const saveTasks = () => {
    const taskListJSON = JSON.stringify(taskList);
    fs.writeFileSync(taskListFilePath, taskListJSON);
}

export const loadTasks = () => {
    try {
        const taskListJSON = fs.readFileSync(taskListFilePath);
        taskList = JSON.parse(taskListJSON);
    } catch (error) {
        taskList = [];
    }
}

export const displayTasks = () => {
    if (taskList.length === 0) {
        console.log(chalk.yellow('No tasks on the list'));
    } else {
        console.log(chalk.blue('Tasks on the list'));
        taskList.forEach((task) => {
            console.log(task);
        })
    }
}

export const addTask = (description) => {
    const task = {
        indicator: indicator++,
        description: description,
        completed: false
    }

    taskList = [...taskList, task];
    saveTasks();
}

export const deleteTask = (indicator) => {
    let updatedTaskList = taskList.filter(task => task.indicator !== Number(indicator));
    taskList = [...updatedTaskList];
    saveTasks();
};
  
export const completeTask = (indicator) => {
    taskList.forEach((task) => {
        if (task.indicator === Number(indicator)) {
            task.completed = true;
        }
    });
    saveTasks();
};
