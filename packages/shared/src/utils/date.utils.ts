export const formatDate = (date: Date): string => {
    return date.toISOString();
};

export const parseDate = (dateString: string): Date => {
    return new Date(dateString);
};

export const isValidDate = (date: Date): boolean => {
    return date instanceof Date && !isNaN(date.getTime());
}; 