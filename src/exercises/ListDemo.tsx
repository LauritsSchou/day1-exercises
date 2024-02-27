import { BaseProps } from "../types";
import { users } from "../data/data";
//import UserTable from "../components/UserTable";
type Props = BaseProps;

export default function ListDemo({ title }: Props) {
  return (
    <>
      <h2>{title}</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Active</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.isActive ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
export { ListDemo };
