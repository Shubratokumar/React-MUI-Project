import { AppBar, styled, Toolbar, Typography, Box, InputBase, Badge, Avatar, MenuItem, Menu } from '@mui/material';
import React, { useState } from 'react';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { Mail, Notifications } from '@mui/icons-material';

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"

});

const Search = styled("div")(({theme}) =>({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%"

}));

const Icons = styled(Box)(({theme}) =>({
    display: "none",
    gap: "20px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]:{
        display: "flex"
    }
}));

const UserBox = styled(Box)(({theme}) =>({
    display: "flex",
    gap: "10px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]:{
        display: "none"
    }
}));

const Navbar = () => {
    const [ open, setOpen ] = useState(false);
    
    return (
        <AppBar position="sticky">
            <StyledToolbar>
                <Typography variant="h6" sx={{ display:{xs:"none", sm: "block"}}}>DEV</Typography>
                <MenuOpenIcon sx={{ display:{xs:"block", sm: "none"}}}/>
                <Search><InputBase placeholder="Search here"/></Search>
                <Icons>
                    <Badge badgeContent={4} color="error">
                        <Mail />
                    </Badge>
                    <Badge badgeContent={2} color="error">
                        <Notifications />
                    </Badge>
                    <Avatar alt="Photo" sx={{width: 40, height: 40}} src="https://i.ibb.co/7YJ2Jch/profile.png" 
                        onClick={e => setOpen(true)}
                    />
                </Icons>
                <UserBox onClick={e => setOpen(true)}>
                    <Avatar alt="Photo" sx={{width: 40, height: 40}} src="https://i.ibb.co/7YJ2Jch/profile.png" />
                    <Typography variant="span">Shubrato</Typography>
                </UserBox>
            </StyledToolbar>
            <Menu
                id="positioned-menu"
                aria-labelledby="positioned-button"
                open={open}
                onClick={e => setOpen(false)}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuItem >Profile</MenuItem>
                <MenuItem >My account</MenuItem>
                <MenuItem >Logout</MenuItem>
            </Menu>
        </AppBar>
    );
};

export default Navbar;