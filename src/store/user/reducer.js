import { GET_USER_ID_AND_TOKEN} from "./actioinTypes";

const initialState = {
  //profile will be like this {id, name, info, phone, img}
  userId: null,
  token: '',
  phoneNumber: '',
  authorization: false,
  user: {
    first_name: '',
    last_name: '',
    email: '',
    //image:	'',
    birthday: '',
    phone: '',
    status: '',
  },
};

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USER_ID_AND_TOKEN: {
      return {
        ...state,
        token: payload,
      };
    }
    
    default:
      return state;
  }
};
