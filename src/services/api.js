import axios from 'axios';

const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

export const signUp = (data) => {
    return axios.post(`${process.env.REACT_APP_BACKEND}/api/user`, data, config);
}

export const signIn = (data) => {
    return axios.post(`${process.env.REACT_APP_BACKEND}/api/user/login`, data, config);
}