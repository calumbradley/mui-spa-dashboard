import React from 'react'
import { Route, Routes } from "react-router-dom";
// Material UI components
import { ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
// Material UI Icons
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
// Custom components
import { mainListItems, secondaryListItems } from './ListItems';
import Copyright from "./Copyright";
// Page routes
import DashboardHome from "../pages/DashboardHome";
import PerformanceHome from "../pages/PerformanceHome";
import EmployeesHome from "../pages/EmployeesHome";
import SignInPage from '../pages/SignInPage';
// Import profile management
import Profile from "./Profile";
// Import Theme
import theme from "./Theme";
// Import route protection
import ProtectedRoutes from "./ProtectedRoutes";
// Import styled component AppBar
import { AppBar } from "./AppBar/AppBar";
// Import styled component Drawer
import { Drawer } from "./Drawer/Drawer";

export const drawerWidth = 240;

const MainWrapper = () => {

  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Dashboard
            </Typography>
            <Profile />
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open} >
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            {mainListItems}
            <Divider sx={{ my: 1 }} />
            {secondaryListItems}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>

            <div className="content">
              {/* Add SPA routes here */}
              <Routes>
                <Route path="/signin" element={<SignInPage />} />
                <Route element={<ProtectedRoutes />}>
                  <Route path="/" element={<DashboardHome />} />
                  <Route path="/performance" element={<PerformanceHome />} />
                  <Route path="/employee" element={<EmployeesHome />} />
                </Route>
              </Routes>
            </div>


            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>


  )
}

export default MainWrapper