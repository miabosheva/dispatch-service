import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Sitemark from './SitemarkIcon';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: 'blur(24px)',
  border: '1px solid',
  borderColor: (theme.vars || theme).palette.divider,
  backgroundColor: theme.vars
    ? `rgba(${theme.vars.palette.background.defaultChannel} / 0.4)`
    : alpha(theme.palette.background.default, 0.4),
  boxShadow: (theme.vars || theme).shadows[1],
  padding: '8px 12px',
}));

export default function Header() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  // Function to handle scroll with offset for fixed header
  const handleScroll = (event, target) => {
    event.preventDefault();
    const offset = 80; // Adjust based on your header height
    const targetElement = document.querySelector(target);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - offset,
        behavior: 'smooth',
      });
    }
  };

  // Close drawer when a menu item is clicked
  const handleMenuItemClick = (e, target) => {
    handleScroll(e, target); // Scroll to the target
    toggleDrawer(false)();  // Close the drawer
  };

  return (
    <AppBar
      position="fixed"
      enableColorOnDark
      sx={{
        boxShadow: 0,
        bgcolor: 'transparent',
        backgroundImage: 'none',
        mt: 'calc(var(--template-frame-height, 0px) + 28px)',
      }}
    >
      <Container maxWidth="lg">
        <StyledToolbar variant="dense" disableGutters>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: 0 }}>
            <Sitemark />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Button variant="text" color="info" size="small" href="#hero" onClick={(e) => handleScroll(e, '#hero')}>
                Home
              </Button>
              <Button variant="text" color="info" size="small" href="#highlights" onClick={(e) => handleScroll(e, '#highlights')}>
                Services
              </Button>
              <Button variant="text" color="info" size="small" href="#pricing" onClick={(e) => handleScroll(e, '#pricing')}>
                Contact
              </Button>
              <Button variant="text" color="info" size="small" href="#testimonials" onClick={(e) => handleScroll(e, '#testimonials')}>
                Testimonials
              </Button>
              <Button variant="text" color="info" size="small" sx={{ minWidth: 0 }} href="#faq" onClick={(e) => handleScroll(e, '#faq')}>
                FAQ
              </Button>
            </Box>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1 }}>
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="top"
              open={open}
              onClose={toggleDrawer(false)}
              PaperProps={{
                sx: {
                  top: 'var(--template-frame-height, 0px)',
                },
              }}
            >
              <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>
                <MenuItem component="a" href="#hero" onClick={(e) => handleMenuItemClick(e, '#hero')}>
                  Home
                </MenuItem>
                <MenuItem component="a" href="#highlights" onClick={(e) => handleMenuItemClick(e, '#highlights')}>
                  Services
                </MenuItem>
                <MenuItem component="a" href="#pricing" onClick={(e) => handleMenuItemClick(e, '#pricing')}>
                  Contact
                </MenuItem>
                <MenuItem component="a" href="#testimonials" onClick={(e) => handleMenuItemClick(e, '#testimonials')}>
                  Testimonials
                </MenuItem>
                <MenuItem component="a" href="#faq" onClick={(e) => handleMenuItemClick(e, '#faq')}>
                  FAQ
                </MenuItem>
                <MenuItem component="a" href="#blog" onClick={(e) => handleMenuItemClick(e, '#blog')}>
                  Blog
                </MenuItem>
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}
