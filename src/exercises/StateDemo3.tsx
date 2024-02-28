import { BaseProps } from "../types";
import { users as usersFromDB, User } from "../data/data";
import { useState } from "react";
import UserTable from "../components/UserTable";
import UserForm from "../components/UserForm";
type Props = BaseProps;

export default function StateDemo3({ title }: Props) {
  const [users, setUsers] = useState<User[]>(usersFromDB || []);
  //Derived value. No need for a useState here
  const nextId = users.length > 0 ? Math.max(...users.map((user) => user.id || 0)) + 1 : 1;

  const onSubmitUser = (newUser: User) => {
    // Create a new user object with the updated id
    const updatedUser = { ...newUser, id: nextId };
    // Update the users state with the new user
    setUsers([...users, updatedUser]);
    console.log([...users, updatedUser]);
  };

  return (
    <>
      <h2>{title}</h2>
      <UserTable users={users} />
      <UserForm title="Add User" onSubmitUser={onSubmitUser} />
    </>
  );
}
