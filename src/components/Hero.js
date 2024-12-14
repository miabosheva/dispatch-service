import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import truckImage from '/Users/Mia/Desktop/DispatchService/dispatch-service-app/src/img/truck-1.jpeg';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';  // Updated for Facebook
import InstagramIcon from '@mui/icons-material/Instagram';  // Added Instagram icon
import LinkedInIcon from '@mui/icons-material/LinkedIn';  // LinkedIn stays the same

const StyledBox = styled('div')(({ theme }) => ({
  position: 'relative',
  width: '100vw',
  height: '100vh',
  backgroundImage: `url(${truckImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  [theme.breakpoints.up('sm')]: {
    height: '100vh',
  },
  ...theme.applyStyles('dark', {
    backgroundImage: `url(${truckImage})`,
  }),
}));

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={{
        width: '100%',
        position: 'relative', // This allows child elements like the Stack to position relative to this Box
      }}
    >
      <StyledBox>
        <Container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            top: '30%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            zIndex: 1,
            color: 'white',
            width: '100%',
          }}
        >
          <Stack
            spacing={2}
            useFlexGap
            sx={{ alignItems: 'center', width: { xs: '100%', sm: '70%' } }}
          >
            <Typography
              variant="h1"
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                alignItems: 'center',
                fontSize: 'clamp(3rem, 10vw, 3.5rem)',
              }}
            >
              Trucking&nbsp;made&nbsp;
              <Typography
                component="span"
                variant="h1"
                sx={(theme) => ({
                  fontSize: 'inherit',
                  color: 'primary.main',
                  ...theme.applyStyles('dark', {
                    color: 'primary.light',
                  }),
                })}
              >
                easy.
              </Typography>
            </Typography>
            <Typography
              sx={{
                textAlign: 'center',
                color: 'text.secondary',
                width: { sm: '100%', md: '80%' },
              }}
            >
              Discover our expert dispatch services, designed to provide fast, reliable solutions tailored to your needs.
            </Typography>
          </Stack>
        </Container>
      </StyledBox>

      {/* Stack of buttons positioned at the bottom-right corner inside the hero section */}
      <Stack
        direction="column"
        spacing={1}
        sx={{
          position: 'absolute', // Makes it stick relative to the hero section container
          bottom: 20,
          right: 20,
          zIndex: 2, // Ensure it is above the content
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <IconButton
          color="inherit"
          size="small"
          href="https://www.facebook.com"  // Facebook link
          aria-label="Facebook"
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.6)',
            '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.8)' },
            padding: '8px',
          }}
        >
          <FacebookIcon />
        </IconButton>
        <IconButton
          color="inherit"
          size="small"
          href="https://www.instagram.com"  // Instagram link
          aria-label="Instagram"
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.6)',
            '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.8)' },
            padding: '8px',
          }}
        >
          <InstagramIcon />
        </IconButton>
        <IconButton
          color="inherit"
          size="small"
          href="https://www.linkedin.com"  // LinkedIn link
          aria-label="LinkedIn"
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.6)',
            '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.8)' },
            padding: '8px',
          }}
        >
          <LinkedInIcon />
        </IconButton>
      </Stack>
    </Box>
  );
}
