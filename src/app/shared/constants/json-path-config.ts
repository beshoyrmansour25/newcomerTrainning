export const JSONPaths = {
    'newcomers': {
        'newcomerFirstName': '$..first_name',
        'newcomerLastName': '$..last_name',
        'newcomerFullName': '$..["first_name"]',
        'task': '$.capability.tasks[0].name',
        'newcomerName': (id: number) => ``
    },
    'capabilities': {
        '': ''
    }
};
