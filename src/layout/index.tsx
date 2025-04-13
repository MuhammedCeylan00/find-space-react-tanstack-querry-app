// src/components/Layout.tsx

import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from '../components/sideBar';
import GridContainer from '../components/grid';

const Layout: React.FC = () => {
    return (
        <div>
            <SideBar>
                <GridContainer>
                    <Outlet />
                </GridContainer>
            </SideBar>
        </div>
    );
};

export default Layout;
