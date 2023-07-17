import chalk from 'chalk';

let taskList = [];
let indicator = 0;

export const addTask = (description) => {
    return new Promise(resolve => {
        const task = {
            indicator: indicator++,
            description: description,
            completed: false
        };
        
        taskList = [...taskList, task];
        console.log(chalk.yellowBright('Adding task...'));

        setTimeout(() => {
            resolve(task);
        }, 2000);
    });
}

export const deleteTask = (indicator) => {
    return new Promise(resolve => {
        let updatedTaskList = taskList.filter(task => task.indicator !== Number(indicator));
        taskList = [...updatedTaskList];
        console.log(chalk.yellowBright('Deleting task...'));

        setTimeout(() => {
            resolve();
        }, 2000);
    });
};
  
export const completeTask = (indicator) => {
    return new Promise(resolve => {
        taskList.forEach((task) => {
            if (task.indicator === Number(indicator)) {
                task.completed = true;
            }
        });
        console.log(chalk.yellowBright('Marking task as completed...'));
        
        setTimeout(() => {
            resolve();
        }, 2000);
    });
};
