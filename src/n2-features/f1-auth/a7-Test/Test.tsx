import React from 'react'
import SuperInputText from '../../../n1-main/m1-ui/common/c1-SuperInputText/SuperInputText';
import SuperButton from '../../../n1-main/m1-ui/common/c2-SuperButton/SuperButton';
import SuperCheckbox from '../../../n1-main/m1-ui/common/c3-SuperCheckbox/SuperCheckbox';
import {NavLink} from 'react-router-dom';
import {PATH} from '../../../n1-main/m1-ui/routes/Routes';

export const Test = () => {

    return (
        <div>
            Test Component
            <hr/>
            <SuperInputText placeholder={'enter the text'}/>
            <hr/>
            <SuperButton> Test</SuperButton>
            <hr/>
            <NavLink to={PATH.Error404}> Error 404 </NavLink>
            <hr/>
            <SuperCheckbox/>
        </div>
    )
}