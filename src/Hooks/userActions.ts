import { deleteUser, addNewUser } from "../store/slices/users";
import { useAppDispatch } from "./store";
import {User} from '../interfaces/User';

export const useUserActions = () => {
  const dispatch =  useAppDispatch();

  const addUser = (user: User) => {
    dispatch(addNewUser(user));
  }

  const handleDelete = (id: string) => {
    dispatch(deleteUser(id));
  };

  return { addUser, handleDelete };
};