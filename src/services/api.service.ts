import axios from "axios";

const Base_URL = 'https://rickandmortyapi.com/api/';
 
export async function get(url) {
    return axios.get(Base_URL + url);
}

export async function post(url) {
    return axios.post(Base_URL + url);
}