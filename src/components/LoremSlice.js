import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchLorem = createAsyncThunk(
  "lorem/fetchLorem",
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!res.ok) throw new Error("Not found");
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const LoremSlice = createSlice({
  name: "lorem",
  initialState: {
    data: [],   // array
    loading: true,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLorem.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLorem.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchLorem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default LoremSlice.reducer;
