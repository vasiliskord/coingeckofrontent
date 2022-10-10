import { useQuery } from "react-query";
import axios from "axios";


function useGetCoin(id){
    const {status,data} = useQuery(["coin",id], async () => {
        const res = await axios.get(`/api/${id}`);
        return res.data;
    });
    return {status,data};

}

export default useGetCoin;