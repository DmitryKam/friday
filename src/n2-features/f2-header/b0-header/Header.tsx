import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Header.module.css'
import {PATH} from '../../../n1-main/m1-ui/routes/Routes';


function Header() {
    return (
        <div className={s.navMenu}>
            <div>
                <NavLink className={s.navItem} to={PATH.Login}> Login </NavLink>
            </div>
            <div>
                <NavLink className={s.navItem} to={PATH.Registration}> Registration </NavLink>
            </div>
            <div>
                <NavLink className={s.navItem} to={PATH.Profile}> Profile </NavLink>
            </div>
            <div>
                <NavLink className={s.navItem} to={PATH.NewPassword}> NewPassword </NavLink>
            </div>
            <div>
                <NavLink className={s.navItem} to={PATH.RecoveryPassword}> RecoveryPassword </NavLink>
            </div>
            <div>
                <NavLink className={s.navItem} to={PATH.Test}> Test </NavLink>
            </div>
        </div>
    );
}

export default Header;