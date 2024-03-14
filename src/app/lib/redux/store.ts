import { configureStore } from '@reduxjs/toolkit'
import UIReducer from './features/UI/uiSlice'
import ToastNotificationReducer from './features/toast-notification/toast-notificationSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
        UI: UIReducer,
        Notification: ToastNotificationReducer
    }
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']