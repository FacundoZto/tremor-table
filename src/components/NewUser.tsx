import {Button, Card, TextInput, Title} from "@tremor/react";
import { useUserActions } from "../hooks/userActions";

export const NewUser = () => {

  const {addUser} = useUserActions();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      name: { value: string }
      email: { value: string }
      country: { value: string }
      gender: { value: string }
      picture: { value: string }
    }
    const userData = {
      name: target.name.value,
      email: target.email.value,
      country: target.country.value,
      gender: target.gender.value,
      picture: target.picture.value,
    }
    addUser(userData);
  };

  return (
    <Card>
      <Title>Create New User</Title>

      <form onSubmit={handleSubmit} className="mt-3">
        <TextInput placeholder="Name" />
        <TextInput placeholder="Email" />
        <TextInput placeholder="Country" />
        <TextInput placeholder="Gender" />
        <TextInput placeholder="Picture" />

        <div className="mt-3">
          <Button type="submit">New User</Button>
        </div>
      </form>
      
    </Card>
  )
};