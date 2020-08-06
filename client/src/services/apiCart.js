import api from './apiConfig';


export const getCart = async () => {
  try {
    const response = await api.get(`/cart`)

    return response.data
  } catch (error) {
    throw error
  }
}


export const updateCart = async (bodyData) => {
  try {
    const response = await api.put(`/cart`, bodyData)

    return response.data
  } catch (error) {
    throw error
  }
}


