import axios from 'axios';

export const api = axios.create({
	baseURL: 'https://backend-erp01.herokuapp.com/api/'
});
