import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Plan } from '../../model/plan.model';

const initialState: Plan = {
    list: []
};

export const planSlice = createSlice({
  name: 'plan',
  initialState,
  reducers: {
    setPlan: (state: Plan, action: PayloadAction<Plan>) => {      
      state.list = action.payload.list;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setPlan } = planSlice.actions

export default planSlice.reducer