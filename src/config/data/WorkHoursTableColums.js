export const WorkHoursTableColums = [
    {
        title: 'Closed',
        field: 'closed'
    },
    {
        title: 'Type',
        field: 'type'
    },
    {
        title: 'Summary',
        field: 'summary',
        cellStyle: {
            width: '50%',
            maxWidth: '100%'
        },
        render:
            rowData =>
                <a
                    href={rowData.taskUrl}
                >
                    {rowData.summary}
                </a>
    },
    {
        title: 'Reporter',
        field: 'reporter',
    },
    {
        title: 'Assignee',
        field: 'assignee'
    },
    {
        title: 'Original estimate',
        field: 'estimate',
        type: 'numeric'
    },
    {
        title: 'Log Hours',
        field: 'logHours',
        type: 'numeric'
    }
]

export const TechEngineers = [
    {
        title: 'Total',
        field: 'total'
    },
    {
        title: 'Andrii Moruzhko',
        field: 'Andrii Moruzhko'
    },
    {
        title: 'Vasyl Matviishyn',
        field: 'Vasyl Matviishyn'
    },
    {
        title: 'Maksym Fedoruk',
        field: 'Maksym Fedoruk',
    },
    {
        title: 'Yaroslav Rosil',
        field: 'Yaroslav Rosil',
    },
    {
        title: 'Vladyslav Dudka',
        field: 'Vladyslav Dudka'
    }
]

