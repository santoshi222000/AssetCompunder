import React, { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Protected(props) {
  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const { Comp } = props;

  const naviagte = useNavigate();

  useEffect(() => {
    if (!user){
        naviagte("/login");
    }
  });


  return (
    <div>
      <Comp />
    </div>
  );
}

export default Protected;
