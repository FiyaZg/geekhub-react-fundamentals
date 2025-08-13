import { createSlice } from "@reduxjs/toolkit";
import { request } from "@/utils";

const userStore = createSlice({
  name: "user",
  //数据状态
  initialState: {
    token: "",
  },
  //修改方法
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
    },
  },
});

//每个 reducers 里的方法都会生成一个同名的 action creator
const { setToken } = userStore.actions; //根据reducers里的方法名 造 指令
const userReducer = userStore.reducer;

function fetchLogin(values) {
  return async (dispatch) => {
    const res = await request.post("./authorizations", values);
    dispatch(setToken(res.data.token));
    return res.data;
  };
}

export { setToken, fetchLogin };
export default userReducer;
