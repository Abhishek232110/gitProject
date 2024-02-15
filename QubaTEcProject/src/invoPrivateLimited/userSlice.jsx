import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useSelector } from "react-redux";

// export const createUser = createAsyncThunk(
//   "createUser",
//   async ({ loginInfo }, { rejectWithValue }) => {
//     const response = await fetch("", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ loginInfo }),
//     });
//     try {
//       const result = await response.json();
//       return result;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsInVzZXJuYW1lIjoia21pbmNoZWxsZSIsImVtYWlsIjoia21pbmNoZWxsZUBxcS5jb20iLCJmaXJzdE5hbWUiOiJKZWFubmUiLCJsYXN0TmFtZSI6IkhhbHZvcnNvbiIsImdlbmRlciI6ImZlbWFsZSIsImltYWdlIjoiaHR0cHM6Ly9yb2JvaGFzaC5vcmcvYXV0cXVpYXV0LnBuZz9zaXplPTUweDUwJnNldD1zZXQxIiwiaWF0IjoxNjM1NzczOTYyLCJleHAiOjE2MzU3Nzc1NjJ9.n9PQX8w8ocKo0dMCw3g8bKhjB8Wo7f7IONFBDqfxKhs";

// export const loginUser = createAsyncThunk(
//   "loginUser",
//   async ({ loginInfo }, { rejectWithValue }) => {
//     try {
//       const response = await fetch("", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ loginInfo }),
//       });
//       const data = await response.json();
//       console.log(data);
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );

export const getUsers = createAsyncThunk("getUsers", async () => {
  const token = localStorage.getItem("token");
  console.log(token);
  try {
    const response = await fetch("https://dummyjson.com/auth/me", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    // console.log(err);
  }
});

const UserSlice = createSlice({
  name: getUsers,
  initialState: {
    user: [],
    data: [],
    isLoggedIn: false,
    loading: false,
    error: null,
  },
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
    // .addCase(createUser.pending, (state) => {
    //   state.loading = true;
    // })
    // .addCase(createUser.fulfilled, (state, action) => {
    //   state.loading = false;
    //   state.user = action.payload;
    //   state.error = null;
    // })
    // .addCase(createUser.rejected, (state, action) => {
    //   state.loading = false;
    //   state.error = action.payload;
    // });
  },
});

export const { setUserData, login, logout } = UserSlice.actions;

export default UserSlice.reducer;
