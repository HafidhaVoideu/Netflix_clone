import { useContext } from "react";
import { authContext } from "../context/authContext";

const useAuthContext = () => {
  return useContext(authContext);
};

export default useAuthContext;
