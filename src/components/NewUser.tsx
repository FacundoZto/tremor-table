import {Button, Card, TextInput, Title} from "@tremor/react";

export const NewUser = () => {
  return (
    <Card>
      <Title>Create New User</Title>

      <form action="" className="mt-3">
        <TextInput placeholder="Name" />
        <TextInput placeholder="Email" />
        <TextInput placeholder="Country" />

        <div className="mt-3">
          <Button type="submit">New User</Button>
        </div>
      </form>
      
    </Card>
  )
};