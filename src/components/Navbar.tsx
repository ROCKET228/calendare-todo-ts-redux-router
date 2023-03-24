import React, {FC} from 'react';
import {Layout, Menu, Row} from "antd";
import { useNavigate } from 'react-router-dom';
import {RouteNames} from "../router";
import {useTypedSlector} from "../hooks/useTypedSlector";



const Navbar:FC = () => {
    const navigate = useNavigate();
    const {isAuth} = useTypedSlector(state => state.auth)

    return (
        <Layout.Header>
            <Row justify="end">
                {isAuth
                    ?
                    <Menu theme="dark" mode="horizontal" selectable={false}>
                        <div style={{color: 'white'}}>Rocket</div>
                        <Menu.Item onClick={() => console.log('logout')} key={1}>Logout</Menu.Item>
                    </Menu>
                    :
                    <Menu theme="dark" mode="horizontal" selectable={false} onClick={() => navigate(RouteNames.LOGIN)} key={1}>Login</Menu>
                }
            </Row>
        </Layout.Header>
    );
};

export default Navbar;