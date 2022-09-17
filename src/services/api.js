import axios from 'axios';

const REACT_APP_BACKEND='https://young-voice.herokuapp.com';

const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

export const signUp = (data) => {
    return axios.post(`${REACT_APP_BACKEND}/api/user`, data, config);
}

export const signIn = (data) => {
    return axios.post(`${REACT_APP_BACKEND}/api/user/login`, data, config);
}