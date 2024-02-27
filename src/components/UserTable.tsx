type User = {
  id?: number;
  name: string;
  email: string;
  isActive: boolean;
};

export default function UserTable({ users }: { users: User[] }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Active</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.isActive ? "Active" : "Inactive"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
