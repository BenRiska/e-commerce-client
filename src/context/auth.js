
import React, { useReducer, createContext } from 'react';
import jwtDecode from 'jwt-decode';

const initialState = {
  user: null,
  cart: [{
    name: "6752-CUOIO",
    description: "# Amphibian # Split leather upper # Leather interior # Extra light rubber sole # Round toe # Oversized tongue # A cornerstone of underground fashion that manages to give an extra touch of character to all metropolitan outfits #Always present in women's wardrobes, even the most glamorous # Fit: buy your usual size # Made in Italy # Composition: 100% Calf",
    size: 35,
    sizes: ["35", "26", "37", "38"],
    images: ["https://www.fru.it/site/wp-content/uploads/2021/01/6752_5.jpg"],
    price: "299.00",
    id: 1
  }]
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
    addToCart: (newItem) => {},
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
        case "ADD_TO_CART":
          let updatedCart = [...state.cart, action.payload]
          localStorage.setItem('bens-shop-cart', JSON.stringify(updatedCart));
      return {
        ...state,
        cart: updatedCart
      };
      case "REMOVE_FROM_CART":
        let newCart = state.cart.filter(item => item.id !== action.payload.id)
        localStorage.setItem('bens-shop-cart', JSON.stringify(newCart));
      return {
        ...state,
        cart: newCart
      };
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

    function addToCart(newItem){
      dispatch({type: "ADD_TO_CART", payload: newItem})
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
          addToCart,
          removeFromCart
           }}
        {...props}
      />
    );
  }
  
  export { AuthContext, AuthProvider };