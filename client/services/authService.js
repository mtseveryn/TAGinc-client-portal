/*
  * Authentication
  * uses Axios for HTTP requests and Local Storage for user information & JWT
  * signIn(): POST {email, password} & save JWT to Local Storage
  * signOut(): remove JWT from Local Storage
  * signUp(): POST {firstName, lastName, email, password, type}
  * getCurrentUser(): get stored user information (including JWT)
*/
import axios from "axios";

// ! filled out backend route
// ! also double check axios post link route with backend
const API_URL = 'http://localhost:3000/user/';

export default signIn = (user)=>{
  try {
    return axios.post(API_URL + 'signin', user)
    .then(response=>{
      if(response.data.token){
        console.log('response in signIn authService is: ', response);
        localStorage.setItem('user',JSON.stringify(response.data));
      }
      return response.data;
    })
  } catch (error) {
    console.log('err in authService signIn: ', error)
  }
}

export default signOut = ()=>{
  localStorage.removeItem("user");
  console.log('signOut');
}

export default signUp = (user)=>{
  try {
    console.log('in signUp in authService')
    return axios.post(API_URL + 'signup', user);
  } catch (error) {
    console.log('err in authService signUp')
  }
}

export default getCurrentUser = ()=>{
  return JSON.parse(localStorage.getItem('user'));;
}