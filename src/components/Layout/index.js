import React from 'react';
import { Outlet } from "react-router-dom";
import { Container } from 'reactstrap';

import Header from '../Header/';

import './index.scss'

const Layout = (props) => {
    return (
        <>
            <Header />
            <Container>
                <Outlet />
            </Container>
        </>

    );
};
export default Layout;