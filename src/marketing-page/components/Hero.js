import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import truckImage from '/Users/Mia/Desktop/DispatchService/dispatch-service-app/src/img/truck-1.jpeg'; // Import your image

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
      sx={(theme) => ({
        width: '100%',
        position: 'relative', 
      })}
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
              {/* Experience seamless coordination and rapid response with our dedicated team. Trust us to optimize your operations with unmatched efficiency and precision. */}
            </Typography>
          </Stack>
        </Container>
      </StyledBox>
    </Box>
  );
}
