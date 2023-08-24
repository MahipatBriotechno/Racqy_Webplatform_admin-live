import { Router } from '@reach/router'
import { Match } from '@reach/router'
import React from 'react'
import Dashboard from './Dashboard'
import DrawerSide from './DrawerSide'

function index() {
    return (

        <DrawerSide>
            <Router>
                <Dashboard path="/Admin/Component/Drawer/Dashboard/" />
            </Router>
        </DrawerSide>

    )
}

export default index