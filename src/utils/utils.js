function getFullContainers(column, containers) {
    return column.containers.map(container => {
        debugger;
        const fullContainer = containers[container.identifier];
        return {
            ...fullContainer.container,
            contentlets: fullContainer.contentlets[`uuid-${container.uuid}`]
        };
    });
};
export function getUpdatedColumns(columns, containers) {
    return columns.map(column => {
        debugger
        return {
            ...column,
            containers: getFullContainers(column, containers)
        };
    });
};
