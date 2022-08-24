import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';
import WindowIcon from '@mui/icons-material/Window';
import HomeIcon from '@mui/icons-material/Home';
import BarChartIcon from '@mui/icons-material/BarChart';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {BrowserRouter as Router,NavLink,Route,Routes, useNavigate,Outlet} from 'react-router-dom'


const drawerWidth = 240;

function ResponsiveDrawer(props) {
 // const navigate = useNavigate()
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const data=[{id:1,name:'Home',icon:<HomeIcon/>},{id:2,name:'Dashboard',icon:<WindowIcon/>},{id:3,name:'Customers',icon:<PeopleAltIcon/>},{id:4,name:'Add_Purchase',icon:<CurrencyRupeeIcon/>},{id:5,name:'Edit_Products',icon:<ProductionQuantityLimitsIcon/>},{id:6,name:'Analytics',icon:<BarChartIcon/>},{id:7,name:'Logout',icon:<ExitToAppIcon/>}]

  const drawer = (
    <div>
     
      <Toolbar />
      <Divider />
      <List>
        {/* (ele.name!=='Logout')?`/merchant/${ele.name}`:'/login' */}
        {data.map((ele) => (
          <ListItem key={ele.id} disablePadding>
            <NavLink 
            to={(ele.name==='Logout')?'/login':(ele.name==='Home')?'/':`/merchant/${ele.name}`}
            
            style={{
              width:'100%',
              textDecoration:'none'
            }} >
              <ListItemButton  >
              <ListItemIcon>
               { ele.icon}
              </ListItemIcon>
              <ListItemText primary={ele.name} />
            </ListItemButton></NavLink>
          </ListItem>
        ))}
      </List>
      <Divider />
      
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { md: `calc(100% - ${drawerWidth}px)` },
          // ml: { md: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Nothing to Remember
          </Typography>
          <ShoppingCartIcon/>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none'},
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', md: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` },bgcolor:'#FAFAFB' }}
      >
        <Toolbar />
        <Container  >
           <Outlet/>
        </Container>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
