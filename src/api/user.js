import axiosClient from './axiosClient'

// ✅ Signup
export const registerUser = async (userData) => {
  const response = await axiosClient.post('/user/signup', userData)
  return response.data
}

// ⚠️ Only works if you created this API in backend
export const updateUserProfile = async (userData) => {
  const response = await axiosClient.put('/user/updateuserprofile', userData)
  return response.data
}

// ✅ FIXED HERE
export const getUserByUsername = async (username) => {
  const response = await axiosClient.get(`/user/${username}`)
  return response.data
}
