import axios from 'axios';

const API_URL="/api";

//get all coins

const getCoins = async() => {
    const response= await axios.get(API_URL);
    return response.data;
};

const listService = {
    getCoins
};

export default listService;