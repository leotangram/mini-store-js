import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  searchValue: ''
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    onChangeValueSearch: (state, action) => {
      state.searchValue = action.payload
    }
  }
})

export const { onChangeValueSearch } = searchSlice.actions

export default searchSlice.reducer
