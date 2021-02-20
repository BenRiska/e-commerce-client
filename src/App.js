import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Footer from './components/Footer';
import Newsletter from './components/Landing/Newsletter';
import NavBar from './components/NavBar';
import { AuthProvider } from './context/auth';
import Cart from './pages/Cart';
import Entry from './pages/Entry';
import Error from './pages/Error';
import Landing from './pages/Landing';
import Product from './pages/Product';
import Shop from './pages/Shop';
import AuthRoute from './utils/AuthRoute';

function App() {
    return (
        <AuthProvider>
            <Router>
                <NavBar/>
                <Switch>
                    <Route exact path="/cart" component={Cart} />
                    <Route exact path="/item/:id" component={Product} />
                    <Route exact path="/shop" component={Shop} />
                    <Route exact path="/error" component={Error} />
                    <Route exact path="/login" component={Entry} />
                    <Route exact path="/" component={Landing} />
                </Switch>
                <Newsletter/>
                <Footer/>
            </Router>
        </AuthProvider>
    )
}

export default App
