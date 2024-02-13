import { createContext, useContext, useState } from 'react';
import { UiContextType } from '../interfaces/Interfaces';

const UiContext = createContext<UiContextType | undefined>(undefined);

export const UiProvider = ({ children }: { children: any }) => {

    const [taskId, setTaskId] = useState<number>(0);
    const [popupActive, setPopActive] = useState<boolean>(false);

    const handleCheckboxChange = (taskId: number) => {
        setTaskId(taskId);
    };

    const togglePopup = () => {
        setPopActive(!popupActive);
    }

    const parseGermanDate = (dateString: string) => {
        const [day, month, year] = dateString.split('.');
        return new Date(`${year}-${month}-${day}`);
    };

    return (
        <UiContext.Provider value={{ taskId, handleCheckboxChange, popupActive, togglePopup, parseGermanDate }}>
            {children}
        </UiContext.Provider>
    );
};

export function useUiContext() {
    return useContext(UiContext);
}