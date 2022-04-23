import { useContext } from "react";
import ReloadContext from "../Auth/ReloadContext";


export default function useReload() {
    return useContext(ReloadContext)
}