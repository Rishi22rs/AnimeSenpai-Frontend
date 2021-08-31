import axios from 'axios';

const API = `http://192.168.0.104:6699/api`;
// const API = `https://bestanimeapp.herokuapp.com/api`;

export const getAnimeDataGet = async (endpoint) => {
    return axios
      .get(`${API}/${endpoint}`)
      .then(response => response.data)
      .catch(err => {
        throw err;
      });
  };

export const getAnimeDataPost = async (data,endpoint) => {
  return axios
    .post(`${API}/${endpoint}`, data)
    .then(response => response.data)
    .catch(err => {
      throw err;
    });
};