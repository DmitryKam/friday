import React from 'react';
import {Switch, Redirect, Route} from 'react-router-dom';
import { Error404 } from '../../../n2-features/f1-auth/a4-error404/Error404';
import {Login} from '../../../n2-features/f1-auth/a1-login/Login';
import { NewPassword } from '../../../n2-features/f1-auth/a5-NewPassword/NewPassword';
import { Profile } from '../../../n2-features/f1-auth/a3-profile/Profile';
import { RecoveryPassword } from '../../../n2-features/f1-auth/a6-RecoveryPassword/RecoveryPassword';
import { Register } from '../../../n2-features/f1-auth/a2-register/Register';
import { Test } from '../../../n2-features/f1-auth/a7-Test/Test';

export const PATH = {
    Login: '/login',
    Registration: '/registration',
    Profile: '/profile',
    Test: '/test',
    NewPassword: '/newpass',
    RecoveryPassword: '/repass',
}

function Routes() {
    return (

        <div>
            <Switch>
                <Route exact path={'/'}  render={() => <Redirect to={PATH.Test}/>}/>
                <Route exact path={'/friday'}  render={() => <Redirect to={PATH.Test}/>}/>
                <Route path={PATH.Login} exact render={() => <Login/>}/>
                <Route path={PATH.Registration} render={() => <Register />}/>
                <Route path={PATH.Profile} render={() => <Profile/>}/>
                <Route path={PATH.NewPassword} render={() => <NewPassword/>}/>
                <Route path={PATH.RecoveryPassword} render={() => <RecoveryPassword/>}/>
                <Route path={PATH.Test} render={() => <Test/>}/>
                <Route render={() => <Error404/>}/>
            </Switch>
        </div>

    );
}

export default Routes;
