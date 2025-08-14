import { createSlice } from "@reduxjs/toolkit";
import {
  request,
  removeToken as _removeToken,
  setToken as _setToken,
  getToken,
} from "@/utils";
import * as api from "@/apis/user";

const userStore = createSlice({
  name: "user",
  //数据状态
  initialState: {
    token: getToken() || "",
    userInfo: null,
  },
  //修改方法
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
      _setToken(action.payload);
    },
    removeToken(state) {
      state.token = "";
      _removeToken();
    },

    setUserInfo(state, action) {
      state.userInfo = action.payload;
    },
    clearUserInfo(state, action) {
      state.token = "";
      state.userInfo = null;
      _removeToken();
    },
  },
});

function fetchLogin(values) {
  return async (dispatch) => {
    const res = await api.loginAPI(values);
    const token = res.data.token;
    _setToken(token);
    dispatch(setToken(res.data.token));

    return res.data;
  };
}

function fetchUserInfo() {
  return async (dispatch) => {
    const res = await api.getProfileAPI();
    console.log(res.data);
    dispatch(setUserInfo(res.data));
  };
}

//每个 reducers 里的方法都会生成一个同名的 action creator
const { setToken, setUserInfo, clearUserInfo } = userStore.actions; //根据reducers里的方法名 造 指令
export { setToken, fetchLogin, fetchUserInfo, clearUserInfo };

const userReducer = userStore.reducer;
export default userReducer;
