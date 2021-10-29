import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'

interface GrabberState {
  visited: string[]
}

const initialState: GrabberState = {
  visited: [],
}

export const grabberSlice = createSlice({
  name: 'grabber',
  initialState,
  reducers: {
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

export const selectVisited = (state: RootState) => state.visited

export default grabberSlice.reducer