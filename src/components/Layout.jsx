import React from 'react'
import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";
import logo from '../assets/logo512.png'


const Layout = ({ children }) => {

    return (
        <div className="min-h-screen flex flex-col bg-gray-200 text-gray-900 layout">
            <AppBar position="static" color="default" elevation={1} >
                <Toolbar className="max-w-6xl mx-auto w-full">
                    <Typography variant="h6" className="flex-grow font-bold">
                        Code With Me
                    </Typography>
                    <Button href="#services" color="inherit">Services</Button>
                    <Button href="#about" color="inherit">About</Button>
                    <Button href="#contact" color="inherit">Contact</Button>
                </Toolbar>
            </AppBar>

            <Container className="flex-1 py-8">{children}</Container>

            <footer className="py-4 bg-gray-100 text-center text-sm">
                &copy; {new Date().getFullYear()} Code With Me. All rights reserved.
            </footer>
        </div>
    )
}

export default Layout