import axios from "axios";

export const FETCH_USERS = "FETCH_USERS";

export const fetchUsers = () => async (dispatch) => {
  const res = await axios.get("https://reqres.in/api/users?page=2");

  // 當接收到資料後，將action {
  //   type: FETCH_USERS,
  //   payload: res.data.data,
  // }
  // 傳至Users.reducers.js
  dispatch({
    type: FETCH_USERS,
    payload: res.data.data,
  });
};
