import React from "react";
import { UserInterface } from "../interface/user";
import { setToUppercase } from "../utils/utils";

const User = (props: UserInterface) => {
  const { age, firstName, lastName } = props;
  return (
    <div>
      <div>Nom: {setToUppercase(firstName)} </div>
      <br />
      <div>Prenom: {lastName} </div>
      <br />
      <div>Age:{age} </div>
    </div>
  );
};

export default User;
