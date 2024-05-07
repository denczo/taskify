export const parseGermanDate = (dateString: string) => {
    if (dateString) {
        const [day, month, year] = dateString?.split('.')!;
        return `${year}-${month}-${day}`;
    } else {
        return getCurrentDate();
    }
};

export const parseUSDate = (dateString: string) => {
    if (dateString) {
        const [year, month, day] = dateString?.split('-')!;
        return `${day}.${month}.${year}`;
    } else {
        return getCurrentDate();
    }
};

export const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}
