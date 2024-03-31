import React, {useState} from 'react'
import {AppBar, Box, Button, IconButton, Toolbar, Typography, Menu, MenuList, MenuItem} from '@mui/material'
import LocationCityIcon from '@mui/icons-material/LocationCity';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

const pages = ['Home', 'Create Ads', 'Manage Ads', 'Blog']

function Header () {

    const [anchorNav, setAnchorNav] = useState(null);

    const navigate = useNavigate();

    const handlePageClick = (page) => {
        switch (page) {
            case 'Home' :
                navigate('/');
                break;
            case 'Create Ads' :
                navigate('/create-ads');
                break;
            case 'Manage Ads' :
                navigate('/manage-ads');
                break;
            case 'Blog' :
                navigate('/blog');
                break;
        }
        
    }

    const openMenu = (event) => {
        setAnchorNav(event.currentTarget)   
    }

    const closeMenu = () => {
        setAnchorNav(null)
    }

  return (
    <div>
        <AppBar position='static'>
            <Toolbar>
                <IconButton size='large' edge='start' color='inherit' aria-label='logo' sx={{display:{xs:'none', md:'flex'}}}>
                    <LocationCityIcon />
                </IconButton>
                <Typography variant='h6' component='div' sx={{flexGrow:1, display:{xs:'none', md:'flex'}}}>Real Estate</Typography>
                <Box sx={{display:{xs:'none', md:'flex'}}}>
                    {pages.map((page) => (
                        <Button key={page} onClick={() => handlePageClick(page)} color='inherit'>{page}</Button>
                    ))}
                </Box>
                <Box sx={{display:{xs:'flex', md:'none'}}}>
                    <IconButton size='large' color='inherit' edge='start' onClick={openMenu}>
                        <MenuIcon />
                    </IconButton>
                    <Menu open={Boolean(anchorNav)} onClose={closeMenu} sx={{display:{xs:'flex', md:'none'}}}>
                        <MenuList>
                            {pages.map((page) => (
                                <MenuItem color='inherit'>{page}</MenuItem>
                            ))}
                        </MenuList>
                    </Menu>
                    <IconButton size='large' edge='start' color='inherit' aria-label='logo' sx={{display:{xs:'flex', md:'none'}}}>
                        <LocationCityIcon />
                    </IconButton>
                    
                    
                </Box>
            </Toolbar>

        </AppBar>
    </div>
  )
}

export default Header