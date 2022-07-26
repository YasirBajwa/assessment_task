import axios from 'axios';


const url = 'http://localhost:5000/posts' ;

export const createUser = (newUserData) => axios.post(url,newUserData)

export const fetchUsers =  () =>  axios.get(url)
