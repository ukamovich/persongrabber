import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'

// Define a type for the slice state
interface GrabberState {
  page: number
}

// Define the initial state using that type
const initialState: GrabberState = {
  page: 1,
}

export const grabberSlice = createSlice({
  name: 'grabber',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload
    },
  },
})

export const { setPage } = grabberSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.page

export default grabberSlice.reducer