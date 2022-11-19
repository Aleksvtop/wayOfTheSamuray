import React from "react";
import classes from './Navbar.module.css';

export const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div><a href={'/Profile'} className={classes.item}>Profile</a></div>
            <div><a href={'/Dialogs'} className={classes.item}>Messages</a></div>
            <div><a className={classes.item}>News</a></div>
            <div><a className={classes.item}>Music</a></div>
            <div><a className={classes.item}>Settings</a></div>
        </nav>
    );
}