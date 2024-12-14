import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CallRoundedIcon from '@mui/icons-material/CallRounded';

const tiers = [
  {
    buttonText: 'example@gmail.com',
    buttonVariant: 'outlined',
    buttonColor: 'primary',
    buttonAction: 'mailto:example@gmail.com', 
  },
  {
    buttonText: (
      <>
        <CallRoundedIcon sx={{ mr: 1 }} /> +(123) 123 123
      </>
    ),
    buttonVariant: 'contained',
    buttonColor: 'secondary',
    buttonAction: 'tel:+1123123123', 
  }
];

export default function Pricing() {
  return (
    <Container
      id="pricing"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Box
        sx={{
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        <Typography
          component="h1"
          variant="h2"
          gutterBottom
          sx={{ color: 'text.primary' }}
        >
          Any questions?
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Our experts are ready to help!
        </Typography>
      </Box>

      <Grid
        container
        spacing={3}
        sx={{
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        {tiers.map((tier, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Button
              fullWidth
              variant={tier.buttonVariant}
              color={tier.buttonColor}
              sx={{
                fontSize: '1.2rem', 
                padding: '14px', 
                height: '60px', 
              }}
              href={tier.buttonAction} 
              target="_blank"
            >
              {tier.buttonText}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
