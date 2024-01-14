import React, { useEffect, useState } from "react";
import authService from "../service/AuthService";
import UserDetails from "./UserDetails";
export default function User() {
  const [user, setUser] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const response = await authService.getUsers();
      if (response.length  > 0) {
        setUser(response);
        setError(null);
      } else {
        setError("No record found !!");
      }
    } catch (error) {
      setError(error.response.data);
    }
  };

  return (
    <div>
      <UserDetails data={user} error={error} />
    </div>
  );
}
