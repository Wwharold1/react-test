import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { User } from '../../model/user.model'

const initialState: User = {
  name: '',
  birthDay: '',
  lastName: ''
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state: User, action: PayloadAction<User>) => {      
      state.birthDay = action.payload.birthDay;
      state.lastName = action.payload.lastName;
      state.name = action.payload.name;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setUser } = userSlice.actions

export default userSlice.reducer