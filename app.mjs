import readlineSync from 'readline-sync';
import chalk from 'chalk';
import { loadTasks, addTask, deleteTask, completeTask, displayTasks } from './taskListFunctions.mjs';

function selectOptions() {
    const actions = ['Add a New Task', 'Complete a Task', 'Delete a task',  'Show tasklist', 'Exit'];
    const index = readlineSync.keyInSelect(actions, 'What do you want to do?');

    switch (index) {
        case 0:
            addTask(readlineSync.question('Enter a description for the task: '));
            console.log(chalk.green('Task added successfully!'));
            selectOptions();
            break;
        case 1:
            completeTask(readlineSync.question('Enter the indicator of the task to complete: '));
            console.log(chalk.green('Task completed successfully!'));
            selectOptions();
            break;
        case 2:
            deleteTask(readlineSync.question('Enter the indicator of the task to delete: '));
            console.log(chalk.green('Task deleted successfully!'));
            selectOptions();
            break;
        case 3:
            displayTasks();
            selectOptions();
            break;
        case 4:
            console.log(chalk.yellow('Exiting...'));
            break;
        default:
            console.log(chalk.red('Invalid option!'));
            selectOptions();
            break;
    }
}

loadTasks();
selectOptions();
