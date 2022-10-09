import axios from 'axios';

const API_URL = `api?page=`;

//get all coins

const getList = async(page) => {
    const response= await axios.get(API_URL+page);
    return response.data;
};

const listService = {
    getList
};

export default listService;