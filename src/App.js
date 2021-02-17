import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import { AuthProvider } from './context/auth';
import Entry from './pages/Entry';
import Landing from './pages/Landing';
import AuthRoute from './utils/AuthRoute';

function App() {
    return (
        <AuthProvider>
            <NavBar/>
            <Router>
                <Switch>
                    <Route exact path="/login" component={Entry} />
                    <Route exact path="/" component={Landing} />
                </Switch>
            </Router>
        </AuthProvider>
    )
}

export default App
