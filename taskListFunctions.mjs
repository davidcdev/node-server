let taskList = [];
let indicator = 0;

export const addTask = (description) => {
    const task = {
        indicator: indicator++,
        description: description,
        completed: false
    }

    taskList = [...taskList, task];
}

export const deleteTask = (indicator) => {
    let updatedTaskList = taskList.filter(task => task.indicator !== Number(indicator));
    taskList = [...updatedTaskList];
};
  
export const completeTask = (indicator) => {
    taskList.forEach((task) => {
        if (task.indicator === Number(indicator)) {
            task.completed = true;
        }
    });
};
