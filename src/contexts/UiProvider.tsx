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

    return (
        <UiContext.Provider value={{ taskId, handleCheckboxChange, popupActive, togglePopup }}>
            {children}
        </UiContext.Provider>
    );
};

export function useUiContext() {
    return useContext(UiContext);
}