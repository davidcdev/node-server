# Project 2: Asynchronous task list in Node

This is a description of what happens when using "async/await" or the "then()" method to handle promises.

I used a setTimeout() of 2s to make the process easier to notice.

When running the command `node app.mjs`, it shows the menu to choose what to do:

```
[1] Add a New Task
[2] Complete a Task
[3] Delete a task
[4] Exit
[0] CANCEL

What do you want to do? [1...4 / 0]: 

```

## What happened when using async/await?

When you choose an option from the menu, for example `[1] Add a New Task`, it will ask for the parameter that the function receives which in this case is being handled by the readline question:

```
What do you want to do? [1...4 / 0]: 1
Enter a description for the task: 
```
Once you enter the description for the task and press the "Return" key, it will execute the body of the function that in this case includes a `console.log('Adding the task...')` to show that the process is running:

```
export const addTask = (description) => {
    return new Promise(resolve => {
        const task = {
            indicator: indicator++,
            description: description,
            completed: false
        };
        
        taskList = [...taskList, task];
        console.log(chalk.yellowBright('Adding the task...'));

        setTimeout(() => {
            resolve(task);
        }, 2000);
    });
}
```
```
Enter a description for the task: This is what happens when using async/await.                       
Adding the task...
``` 
Because the function has a timeout of 2s, exactly after 2 seconds it will show the ```
console.log(chalk.green('The task was added successfully!'))
``` which is the next line after the `await AddTask()` that was just executed on the async function and will show again the menu, which is the next line after the `console.log`:

```
async function selectOptions() {
    const actions = ['Add a New Task', 'Complete a Task', 'Delete a task', 'Exit'];
    const index = readlineSync.keyInSelect(actions, 'What do you want to do?');

    switch (index) {
        case 0:
            await addTask(readlineSync.question('Enter a description for the task: '))
            console.log(chalk.green('The task was added successfully!'))
            selectOptions();
            break;
```

```
The task was added successfully!

[1] Add a New Task
[2] Complete a Task
[3] Delete a task
[4] Exit
[0] CANCEL

What do you want to do? [1...4 / 0]: 
```
