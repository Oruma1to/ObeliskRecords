import api from './apiConfig'

export const getAlbums = async () => {
  try {
    const response = await api.get(`/albums`)
    
    return response.data
  } catch (error) {
      throw error
  }
}

