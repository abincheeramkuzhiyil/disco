import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';

import SideNavBarContext from '../../stores/side-nav-bar-context';
import styles from './SideNavBar.module.css';

export default function SideNavBar() {
    const sideNavBarContext = useContext(SideNavBarContext);
    const isNavbarOpen = sideNavBarContext.isNavBarOpen;

    const toggleDrawer = (value) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        sideNavBarContext.toggleDrawer(value);
    };

    const navBarLinks = [
        { text: 'Home', url: '/', icon: 'HomeIcon' },
        { text: 'Todos', url: '/todos', icon: 'HomeIcon' },
        { text: 'Expenses', url: '/expenses', icon: 'HomeIcon' },
        { text: 'Locate Items', url: '/locate-items', icon: 'HomeIcon' },
        { text: 'Export Data', url: '/export-data', icon: 'HomeIcon' }
    ];

    return (
        <nav className={styles.test}>
            <SwipeableDrawer
                anchor="left"
                open={isNavbarOpen}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
            >
                <Box
                    sx={{ width: 250 }}
                    role="presentation"
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                >
                    <List>
                        {navBarLinks.map((item, index) => (
                            <NavLink
                                to={item.url}
                                exact="true"
                                className={({ isActive }) => isActive ? styles.active : ""}
                                key={index}>
                                <ListItem button>
                                    <ListItemIcon>
                                        <MailIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={item.text} />
                                </ListItem>
                            </NavLink>
                        ))}
                    </List>
                </Box>
            </SwipeableDrawer>
        </nav>
    );
}
