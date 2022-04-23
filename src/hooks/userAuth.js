import { useContext } from "react";
import AuthContext from "../Auth/AuthContext";

export default function useAuth() {
    return useContext(AuthContext);
}