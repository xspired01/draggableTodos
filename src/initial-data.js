const intialData = {
    tasks: {
        'task-1': {id: 'task-1', content: 'Learn Drag and Drop' },
        'task-2': {id: 'task-2', content: "Make Mac \n'n\n' Cheese " },
        'task-3': {id: 'task-3', content: 'Review Jest and Testing' },
        'task-4': {id: 'task-4', content: 'Practice Context and Redux' }
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'To do',
            taskIds: ['task-1','task-2', 'task-3', 'task-4']
        }
    },
    columnOrder: ['column-1']
}

export default intialData;