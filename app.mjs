import readlineSync from 'readline-sync';
import chalk from 'chalk';
import { addTask, deleteTask, completeTask } from './taskListFunctions.mjs';

async function selectOptions() {
    const actions = ['Add a New Task', 'Complete a Task', 'Delete a task', 'Exit'];
    const index = readlineSync.keyInSelect(actions, 'What do you want to do?');

    switch (index) {
        case 0:
            await addTask(readlineSync.question('Enter a description for the task: '))
            console.log(chalk.green('Task added successfully!'))
            selectOptions();
            break;
        case 1:
            await completeTask(readlineSync.question('Enter the indicator of the task to complete: '));
            console.log(chalk.green('Task completed successfully!'));
            selectOptions();
            break;
        case 2:
            await deleteTask(readlineSync.question('Enter the indicator of the task to delete: '));
            console.log(chalk.green('Task deleted successfully!'));
            selectOptions();
            break;
        case 3:
            console.log(chalk.yellowBright('Exiting...'));
            break;
        default:
            console.log(chalk.red('Invalid option!'));
            selectOptions();
            break;
    }
}

selectOptions();
