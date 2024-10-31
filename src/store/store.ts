import { configureStore } from '@reduxjs/toolkit'
import userSlice from './slices/user.slice'
import planSlice from './slices/plan.slice'

export const store = configureStore({
  reducer: {
    user: userSlice,
    plan: planSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch