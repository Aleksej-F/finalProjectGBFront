import { USER_REGISTER, GET_USER_ID_AND_TOKEN,  } from "./actioinTypes";
import { USER_GET_TOKEN_API, USER_GET_RECIPIENTS } from '../../utils/API'

export const getUserIdAndTokenAction = (payload) => ({
  type: GET_USER_ID_AND_TOKEN,
  payload: payload,
})

export const getUserRegistr = (user) => (dispatch) => {
  const fetchData = async () => {
    try {
      const response = await fetch(USER_GET_TOKEN_API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "name": "Alexey",
          "email": "eypuyoople@gmail.com",
          "phone": "+71117731167",
          "password": "1q2w3e4r",
          "password_confirmation": "1q2w3e4r"
          
          
        }),
      })
      const result = await response.json()
      console.log(result);
      console.log(result.data.token);
      dispatch(getUserIdAndTokenAction(result.data.token))
      
    } catch (e) {
      console.error(e.message)
    }
  }
  fetchData()
}

export const getRecipients = (sity_id, token) => (dispatch) => {
  const param = sity_id === 0 ? '' : `filters[city_id]=${sity_id}`
  
  const fetchData = async () => {
    try {
      const response = await fetch(`${USER_GET_RECIPIENTS}?${param}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        
      })
      const result = await response.json()
      // dispatch(getUserIdAndTokenAction(result))
      console.log(result.data[0]);
    } catch (e) {
      console.error(e.message)
    }
  }
  fetchData()
}




