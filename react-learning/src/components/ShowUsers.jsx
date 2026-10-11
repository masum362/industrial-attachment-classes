import React, { use, useEffect, useState } from "react";

const getUsers = async() => {
  const response =await fetch("https://jsonplaceholder.typicode.com/users");
  
   return response.json();
};

const userPromise = getUsers()

const ShowUsers = ({h1Ref}) => {
    console.log(h1Ref)

  const users = use(userPromise)
  
  return (
    <ul className="p-4">
      {users.map((user) => (
        <li key={user.id}>
          {user.name} ({user.email})
        </li>
      ))}
    </ul>
  );
};

export default ShowUsers;
