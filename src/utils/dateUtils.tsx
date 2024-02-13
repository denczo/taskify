export const parseGermanDate = (dateString: string) => {
    try {
        const [day, month, year] = dateString?.split('.')!;
        return `${year}-${month}-${day}`;
    }
    catch (error) {
        console.error("Empty date string " + error);
    }
    return ""
};

export const parseUSDate = (dateString: string) => {
    try {
        const [year, month, day] = dateString?.split('-')!;
        return `${day}.${month}.${year}`;
    }
    catch (error) {
        console.error("Empty date string " + error);
    }
    return ""
};
