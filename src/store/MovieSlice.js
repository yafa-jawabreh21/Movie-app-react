import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getMovies = createAsyncThunk('movietv/getMovies', async(_, thunkAPI) => {
    const {rejectWithValue} = thunkAPI
    try{
        const res = await fetch ("https://movie-app-vmn1.onrender.com/movie")
        const data = await res.json()
        return data;

    }catch(error) {
        return rejectWithValue(error.message)
    }

})
export const getSeries = createAsyncThunk('movietv/getSeries', async(_, thunkAPI) => {
    const {rejectWithValue} = thunkAPI
    try{
        const res = await fetch ("https://movie-app-vmn1.onrender.com/series")
        const data = await res.json()
        return data;

    }catch(error) {
        return rejectWithValue(error.message)
    }

})

export const getToprated = createAsyncThunk('movietv/getToprated', async(_, thunkAPI) => {
    const {rejectWithValue} = thunkAPI
    try{
        const res = await fetch ("https://movie-app-vmn1.onrender.com/toprated")
        const data = await res.json()
        return data;

    }catch(error) {
        return rejectWithValue(error.message)
    }

})

export const getTrending = createAsyncThunk('movietv/getTrending', async(_, thunkAPI) => {
    const {rejectWithValue} = thunkAPI
    try{
        const res = await fetch ("https://movie-app-vmn1.onrender.com/trending")
        const data = await res.json()
        return data;

    }catch(error) {
        return rejectWithValue(error.message)
    }

})

const MovieSlice = createSlice({
  name: "movietv",
  initialState: {
    movies: [],
    series:[],
    toprated:[] ,
    trending:[] 
  },
  reducers: {
   
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMovies.pending, (state) => {
        console.log("getMovies pending")
      })
      .addCase(getMovies.fulfilled, (state, action) => {
        state.movies = action.payload;
        console.log("getMovies fullfiled")
      })
      .addCase(getMovies.rejected, (state, action) => {
        console.log("getMovies rejected")
      })

      .addCase(getSeries.pending, (state) => {
        console.log("getSeries pending")
      })
      .addCase(getSeries.fulfilled, (state, action) => {
        state.series = action.payload;
        console.log("getSeries fullfiled")
      })
      .addCase(getSeries.rejected, (state, action) => {
        console.log("getSeries rejected")
      })

       .addCase(getToprated.pending, (state) => {
        console.log("getToprated pending")
      })
      .addCase(getToprated.fulfilled, (state, action) => {
        state.toprated = action.payload;
        console.log("getToprated fullfiled")
      })
      .addCase(getToprated.rejected, (state, action) => {
        console.log("getToprated rejected")
      })

       .addCase(getTrending.pending, (state) => {
        console.log("getTrending pending")
      })
      .addCase(getTrending.fulfilled, (state, action) => {
        state.trending = action.payload;
        console.log("getTrending fullfiled")
      })
      .addCase(getTrending.rejected, (state, action) => {
        console.log("getTrending rejected")
      })
  }
});
export default MovieSlice.reducer;
