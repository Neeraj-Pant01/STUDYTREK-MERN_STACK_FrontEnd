import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentUser: null
}

export const userSlice = createSlice({
  name: 'studyTrekUsers',
  initialState,
  reducers: {
    loginUser: (state,action) => {
        state.currentUser = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { loginUser } = userSlice.actions

export default userSlice.reducer