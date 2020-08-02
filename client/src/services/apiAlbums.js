import api from './apiConfig'

export const getAlbums = async () => {
  try {
    const response = await api.get(`/albums`)
    
    return response.data
  } catch (error) {
      throw error
  }
}

export const createAlbum = async (bodyData) => {
  try {
    const response = await api.post(`/albums`, bodyData)
    
    return response.data
  } catch (error) {
      throw error
  }
}

