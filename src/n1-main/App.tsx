import React from 'react'
import './App.css';
import {Route} from 'react-router-dom';
import { Login } from '../components/login/Login';




function App() {
    return (
            <div>
                <Route path={'/login'} render={()=><Login/>}/>
                <Route path={'/login'} render={()=><Login/>}/>
                <Route path={'/login'} render={()=><Login/>}/>
                <Route path={'/login'} render={()=><Login/>}/>
                <Route path={'/login'} render={()=><Login/>}/>
                <Route path={'/login'} render={()=><Login/>}/>
            </div>
    );
}

export default App;
