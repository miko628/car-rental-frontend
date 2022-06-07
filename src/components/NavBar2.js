import React from 'react';
import { useNavigate } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

//import logo from '../logo.svg'
//import logoMobile from '../logoMobile.svg'
import { Toolbar, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    bar: { paddingTop: "1.15rem",
        backgroundColor: "#ffe7e7",
    ['@media (max-width:780px)']: {
        flexDirection: "column"
    }
},
    menuItem: {
        cursor: "pointer",
        flexGrow: 1,
        "&:hover": {
            color: "#fff"
        },
        ['@media (max-width:780px)']: {
            paddingBottom: "1rem"
        }
    }
}));

export default function NavBar() {
    const classes = useStyles();
    let navigate = useNavigate();

    return (
        <Toolbar position="sticky" color="rgba(0, 0, 0, 0.87)" className={classes.bar}>
            <Typography variant="h6" className={classes.menuItem}>
                CarSharing
            </Typography>
            <Typography variant="h6" className={classes.menuItem}>
                Map
            </Typography>
            <Typography variant="h6" className={classes.menuItem} onClick={() => navigate("/about")} >
                About
            </Typography>
            <Typography variant="h6" className={classes.menuItem} onClick={() => navigate("/pricing")} >
                Pricing
            </Typography>
            <Typography variant="h6" className={classes.menuItem}>
                Contact
            </Typography>
        </Toolbar>
    )
}