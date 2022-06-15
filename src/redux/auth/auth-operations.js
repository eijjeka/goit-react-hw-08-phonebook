import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

///Register User

const register = createAsyncThunk("auth/register", async (credentials) => {
  try {
    const { data } = await axios.post("/users/signup", credentials);
    token.set(data.token);
    return data;
  } catch {
    toast.error("You are already registered, please try to login", {
      position: toast.POSITION.TOP_RIGHT,
      theme: "dark",
    });
  }
});

//LogIn User

const logIn = createAsyncThunk("auth/login", async (credentials) => {
  try {
    const { data } = await axios.post("/users/login", credentials);
    token.set(data.token);
    return data;
  } catch {
    toast.error("Invalid address and/or password specified.", {
      position: toast.POSITION.TOP_RIGHT,
      theme: "dark",
    });
  }
});

//LogOut User

const logOut = createAsyncThunk("auth/logout", async (credentials) => {
  try {
    await axios.post("/users/logout", credentials);
    token.unset();
  } catch (error) {
    //   type error
  }
});

//After refresh page

const fetchCurrentUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (!persistedToken) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get("users/current");
      return data;
    } catch {}
  }
);

const operations = {
  register,
  logIn,
  logOut,
  fetchCurrentUser,
};

export default operations;
