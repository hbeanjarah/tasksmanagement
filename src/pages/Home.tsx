import React from "react";
import User from "../components/User";

const Home = () => {
  return (
    <div>
      {" "}
      Page d'accueil
      <br />
      <User firstName="toto" lastName="kata" age={25} />
    </div>
  );
};

export default Home;
