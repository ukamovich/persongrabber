import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'

// Define a type for the slice state
interface GrabberState {
  visited: string[]
}

// Define the initial state using that type
const initialState: GrabberState = {
  visited: [],
}

export const grabberSlice = createSlice({
  name: 'grabber',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    addPerson: (state, action: PayloadAction<string>) => {
      if (!state.visited.includes(action.payload)) {
        if (state.visited.length < 12) {
          state.visited.push(action.payload)
        } else {
          state.visited.shift()
          state.visited.push(action.payload)
        }
      }
    },
  },
})

export const { addPerson } = grabberSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectVisited = (state: RootState) => state.visited

export default grabberSlice.reducer