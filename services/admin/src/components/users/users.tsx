import { UserItem } from "@packages/shared";

const Users = ({ userId }: { userId: number }) => {
  return (
    <div style={{ background: "red" }}>
      <UserItem userId={userId} />
    </div>
  );
};

export default Users;
