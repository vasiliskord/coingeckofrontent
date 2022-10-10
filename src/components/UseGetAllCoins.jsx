import { useQuery } from "react-query";
import axios from "axios";


function useGetAllCoins(url){
    const {status,data}=useQuery(["getAllCoins",url],()=>{
        return axios.get(url).then((res)=>res.data);
    });
    return {status,data};
}

export default useGetAllCoins;
