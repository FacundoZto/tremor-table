import { deleteUser } from "../store/slices/users";
import { useAppDispatch } from "./store";

export const useUserActions = () => {
  const dispatch =  useAppDispatch();

  const handleDelete = (id: string) => {
    dispatch(deleteUser(id));
  };

  return { handleDelete };
};