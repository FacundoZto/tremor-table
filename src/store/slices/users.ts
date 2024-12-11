import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../interfaces/User";

const defaultState = [
  {
    id: "405-88-3636",
    name: "Jane",
    gender: "female",
    email: "jennie.nichols@example.com",
    country: "United States",
    picture: "https://randomuser.me/api/portraits/thumb/men/75.jpg",
  },
  {
    id: "405-04-3636",
    name: "Mark",
    gender: "male",
    email: "judith.nichols@example.com",
    country: "España",
    picture: "https://randomuser.me/api/portraits/thumb/men/75.jpg",
  },
];

let initialState: User[] = defaultState;
const persistedState = localStorage.getItem('stateUsers');
if (persistedState) {
  initialState = JSON.parse(persistedState).users;
}

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addNewUser: (state, action: PayloadAction<User>) => {
      const id = crypto.randomUUID();
      return [...state, { ...action.payload, id}];
    },
    deleteUser: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      return state.filter((user) => user.id !== id);
    },
  },
});

export default userSlice.reducer;

export const { addNewUser, deleteUser } = userSlice.actions