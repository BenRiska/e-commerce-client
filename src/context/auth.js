
import React, { useReducer, createContext } from 'react';
import jwtDecode from 'jwt-decode';

const initialState = {
  user: null,
  cart: null
};

if (localStorage.getItem('jwtToken')) {
    const decodedToken = jwtDecode(localStorage.getItem('jwtToken'));
  
    if (decodedToken.exp * 1000 < Date.now()) {
      localStorage.removeItem('jwtToken');
    } else {
      initialState.user = decodedToken;
    }
  }
  
  if(localStorage.getItem("bens-shop-cart")){
    initialState.cart = JSON.parse(localStorage.getItem('bens-shop-cart'));
  }

  const AuthContext = createContext({
    user: null,
    login: (userData) => {},
    logout: () => {},
    setCart: (cart) => {},
    removeFromCart: (item) => {}
  });

  function authReducer(state, action) {
    switch (action.type) {
      case 'LOGIN':
        return {
          ...state,
          user: action.payload
        };
      case 'LOGOUT':
        return {
          ...state,
          user: null
        };
      case "REMOVE_FROM_CART":
        let newCart = state.cart.filter(item => item.id !== action.payload.id)
        if(newCart.length < 1){
          localStorage.removeItem("bens-shop-cart");
        } else{
          localStorage.setItem('bens-shop-cart', JSON.stringify(newCart));
        }
      return {
        ...state,
        cart: newCart
      };
      case "SET_CART":
        localStorage.setItem('bens-shop-cart', JSON.stringify(action.payload));
        return {
          ...state,
          cart: action.payload
        }
      default:
        return state;
    }
  }

  function AuthProvider(props) {
    const [state, dispatch] = useReducer(authReducer, initialState);
  
    function login(userData) {
      localStorage.setItem('jwtToken', userData.token);
      dispatch({
        type: 'LOGIN',
        payload: userData
      });
    }
  
    function logout() {
      localStorage.removeItem('jwtToken');
      dispatch({ type: 'LOGOUT' });
    }

    function setCart(cart){
      dispatch({type: "SET_CART", payload: cart})
    }

    function removeFromCart(item){
      dispatch({type: "REMOVE_FROM_CART", payload: item})
    }
  
    return (
      <AuthContext.Provider
        value={{ 
          user: state.user, 
          cart: state.cart,
          login, 
          logout, 
          setCart,
          removeFromCart
           }}
        {...props}
      />
    );
  }
  
  export { AuthContext, AuthProvider };