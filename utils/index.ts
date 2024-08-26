export const groupBy = <T>(array: T[], keyGetter: (item: T) => string): Record<string, T[]> => {
    return array.reduce((result, currentItem) => {
        const key = keyGetter(currentItem);
        if (!result[key]) {
            result[key] = [];
        }
        result[key].push(currentItem);
        return result;
    }, {} as Record<string, T[]>);
}