import axios from "axios";

const Base_URL = import.meta.env.REACT_APP_BASE_URL;

export async function get(url: string) {
  return axios.get(Base_URL + url);
}

export async function post(url: string ) {
  return axios.post(Base_URL + url);
}