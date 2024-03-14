import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'

// Define a type for the slice state
interface CounterState {
    isNavOpen: boolean | null;
}

// Define the initial state using that type
const initialState: CounterState = {
    isNavOpen: false
}

export const UISlice = createSlice({
    name: 'UI',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        toggleNav: (state, action: PayloadAction<boolean | null>) => {
            if (action.payload !== null) {
                state.isNavOpen = action.payload
            }
            else {
                state.isNavOpen = !state.isNavOpen
            }
        },
    }
})

export const { toggleNav } = UISlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectNavStatus = (state: RootState) => state.UI.isNavOpen

export default UISlice.reducer