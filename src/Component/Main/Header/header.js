import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import "./header.css"
import logo from "../../Images/logo1.jpeg"
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;
const navItems = [
    { displayName: 'Home', path: '/home' },
    { displayName: 'About Us', path: '/aboutMain' },
    { displayName: 'Top Achievers', path: '/topAchievers' },
    { displayName: 'Top Management', path: '/ourManagement' },
    { displayName: 'Contact Us', path: '/contactUs' },
];

function DrawerAppBar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const navigate = useNavigate();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2, fontWeight: 'bold', WebkitTextStroke: "2px #b22222", color: "transparent" }}>
                SIR UZAIR'S ACADEMY
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.displayName} disablePadding>
                        <ListItemButton
                            sx={{
                                textAlign: 'center',
                                '& .MuiTypography-root': {
                                    color: '#b22222',
                                    fontWeight: '500',
                                    fontSize: '16px',
                                },
                            }}
                            onClick={() => handleClick(item.path)}
                        >
                            <ListItemText primary={item.displayName} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const handleClick = (path) => {
        navigate(path);
    };

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar component="nav" style={{ backgroundColor: '#B22222' }}>
                <Toolbar>
                    <IconButton
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}
                    >
                        <Grid container spacing={2} alignItems="center">
                            <Grid item xs={12} md={3} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                <img src={logo} alt="image1" id="headerimg1" />
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xs={6} className="textNav">
                                <h1>SIR UZAIR'S ACADEMY</h1>
                            </Grid>
                            

                        </Grid>
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block', marginRight: '100px' } }}>
                        {navItems.map((item) => (
                            <Button key={item.displayName} onClick={() => handleClick(item.path)}
                                sx={{ color: 'white', marginRight: '15px', fontWeight: "500px" }} id="hover1">
                                {item.displayName}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box component="main" sx={{ p: 3 }}>
                <Toolbar />
                <Typography>
                </Typography>
                <Grid container>
                    <Grid item lg={12} id="bimg1">
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}

DrawerAppBar.propTypes = {
    window: PropTypes.func,
};

export default DrawerAppBar;
