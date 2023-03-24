import React, {FC} from 'react';
import {Layout, Menu, Row} from "antd";
import { useNavigate } from 'react-router-dom';
import {RouteNames} from "../router";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useAction} from "../hooks/useAction";



const Navbar:FC = () => {
    const navigate = useNavigate();
    const {isAuth, user} = useTypedSelector(state => state.auth)
    const {logout} = useAction()


    return (
        <Layout.Header>
            <Row justify="end">
                {isAuth
                    ?
                    <Menu theme="dark" mode="horizontal" selectable={false}>
                        <div style={{color: 'white'}}>{user.username}</div>
                        <Menu.Item onClick={logout} key={1}>Logout</Menu.Item>
                    </Menu>
                    :
                    <Menu theme="dark" mode="horizontal" selectable={false} onClick={() => navigate(RouteNames.LOGIN)} key={1}>Login</Menu>
                }
            </Row>
        </Layout.Header>
    );
};

export default Navbar;