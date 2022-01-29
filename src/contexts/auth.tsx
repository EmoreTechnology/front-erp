import Axios, { AxiosRequestConfig } from "axios"

export interface Credentials {
  email: string;
  password: string;
}

export const onLogin = async (data: Credentials) => {
  const requestConfig: AxiosRequestConfig = {
    method: 'post',
    url: 'http://localhost:3333' + '/login',
    data
  }
  try {
    const {data: response} = await Axios.request(requestConfig);
  } catch (e) {
    console.error(e);
    return {error: e.response.data.message}
  }
}

export const onRegister = async (data: Credentials) => {
  const requestConfig: AxiosRequestConfig = {
    method: 'post',
    url: 'http://localhost:3333' + '/register',
    data
  } 
  const {data: response} = await Axios.request(requestConfig);
  console.log(response);
}