type ProfileProps = {
  name: string;
  email: string;
  isActive: boolean;
  singleLine: boolean;
};

export default function Profile({ email, isActive, name, singleLine }: ProfileProps) {
  if (singleLine)
    return (
      <p>
        Name: {name} Email: {email} {isActive ? "Aktiv" : "Inaktiv"}
      </p>
    );
  return (
    <>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>{isActive ? "Aktiv" : "Inaktiv"}</p>
    </>
  );
}
