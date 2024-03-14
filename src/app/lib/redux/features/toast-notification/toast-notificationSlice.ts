import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'


interface ToastNotificationItem {
    msgId: string;
    isShow: boolean;
    isReNotificating: boolean;
    mgsContent: string;
    isSuccessful: boolean;
}

interface ToastNotificationState {
    messageQueue: ToastNotificationItem[];
}


// Define the initial state using that type
const initialState: ToastNotificationState = {
    messageQueue: [],
}

export const ToastNotificationSlice = createSlice({
    name: 'ToastNotification',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        pushNotification: (state, action: PayloadAction<ToastNotificationItem>) => {
            if (action.payload.msgId === state.messageQueue[state.messageQueue.length - 1]?.msgId && action.payload.isReNotificating === false) {
                return
            }
            const newMessageQueue = [...state.messageQueue, action.payload]
            return state = {...state, messageQueue: newMessageQueue }
        },
        removeNotifiedItem: (state) => {
            state.messageQueue.splice(0,1)
            return state 
        }
    }
})

export const { pushNotification, removeNotifiedItem } = ToastNotificationSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectNotification = (state: RootState) => state.Notification

export default ToastNotificationSlice.reducer