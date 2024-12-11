import {Button, Card, TextInput, Title, Badge} from "@tremor/react";
import { useUserActions } from "../hooks/userActions";
import { useState } from "react";

export const NewUser = () => {
  const {addUser} = useUserActions();
  const [complete, setComplete] = useState<'ok' | 'incomplete' | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setComplete(null);

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const country = formData.get("country") as string;
    const gender = formData.get("gender") as string;
    const picture = formData.get("picture") as string;
    
    if(!name || !email || !country || !gender) {
      return setComplete('incomplete')
    }

    addUser({
      name, email, country, gender, picture,
      id: ""
    });

    setComplete('ok');
    form.reset();
  };

  return (
    <Card>
      <Title>Create New User</Title>

      <form onSubmit={handleSubmit} className="mt-3">
        <TextInput placeholder="Name" name="name" />
        <TextInput placeholder="Email" name="email"/>
        <TextInput placeholder="Country" name="country"/>
        <TextInput placeholder="Gender" name="gender"/>
        <TextInput placeholder="Picture" name="picture"/>

        <div className="mt-3">
          <Button type="submit">New User</Button>
          <span>{complete === 'ok' && <Badge>User saved</Badge>}</span>
          <span>{complete === 'incomplete' && <Badge>incomplete fields</Badge>}</span>
          
        </div>
      </form>
      
    </Card>
  )
};