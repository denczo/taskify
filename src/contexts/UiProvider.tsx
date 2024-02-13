import { createContext, useContext, useState } from 'react';
import { PopupAction, UiContextType } from '../interfaces/Interfaces';

const UiContext = createContext<UiContextType | undefined>(undefined);

export const UiProvider = ({ children }: { children: any }) => {

    const [taskId, setTaskId] = useState<number>(0);
    const [popupActive, setPopActive] = useState<boolean>(false);
    const [popupAction, setPopupAction] = useState<PopupAction>({name: "", action: () => {}});

    const handleCheckboxChange = (taskId: number) => {
        setTaskId(taskId);
    };

    const togglePopup = (action?: PopupAction) => {
        if(action){
            setPopupAction(action);
        }
        setPopActive(!popupActive);
    }

    return (
        <UiContext.Provider value={{ taskId, handleCheckboxChange, popupActive, popupAction, togglePopup }}>
            {children}
        </UiContext.Provider>
    );
};

export function useUiContext() {
    return useContext(UiContext);
}