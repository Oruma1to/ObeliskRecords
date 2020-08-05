import api from './apiConfig';

export const getAlbums = async () => {
  try {
    const response = await api.get(`/albums`)

    return response.data;
  } catch (error) {
    throw error
  }
};


export const getOneAlbum = async (id) => {
  try {
    const response = await api.get(`/albums/${id}`)

    return response.data
  } catch (error) {
    throw error
  }
}

export const createAlbum = async (bodyData) => {

  try {
    const response = await api.post(`/albums`, bodyData)

    return response.data;
  } catch (error) {
    throw error
  }
}


export const editAlbum = async (id, bodyData) => {
  try {
    const response = await api.put(`/albums/${id}`, bodyData)

    return response.data
  } catch (error) {
    throw error
  }
}

export const searchBar = async (term) => {
  try {
    const response = await api.get(`/search/${term}`)

    return response.data
  } catch (error) {
    throw error
  }
}

