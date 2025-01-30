import React from "react";

export const UserItem = ({ userId }: { userId: number }) => {
  return (
    <div style={{ padding: "20px", border: "1px solid black" }}>{userId}</div>
  );
};
