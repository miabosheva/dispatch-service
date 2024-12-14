import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import FacebookIcon from '@mui/icons-material/Facebook';  // Facebook icon
import InstagramIcon from '@mui/icons-material/Instagram';  // Instagram icon
import LinkedInIcon from '@mui/icons-material/LinkedIn';  // LinkedIn icon
import SitemarkIcon from './SitemarkIcon';

function Copyright() {
  return (
    <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
      {'Copyright © '}
      <Link color="text.secondary" href="https://mui.com/">
        Name Of Your Company
      </Link>
      &nbsp;
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 4, sm: 8 },
        py: { xs: 8, sm: 10 },
        textAlign: 'left',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <div>
          <Link color="text.secondary" variant="body2" href="#">
            Privacy Policy
          </Link>
          <Typography sx={{ display: 'inline', mx: 0.5, opacity: 0.5 }}>
            &nbsp;•&nbsp;
          </Typography>
          <Link color="text.secondary" variant="body2" href="#">
            Terms of Service
          </Link>
          <Copyright />
        </div>
        <Stack
          direction="row"
          spacing={1}
          useFlexGap
          sx={{ justifyContent: 'left', color: 'text.secondary' }}
        >
          {/* Facebook Button */}
          <IconButton
            color="inherit"
            size="small"
            href="https://www.facebook.com"  // Updated Facebook link
            aria-label="Facebook"
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.6)',
              '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.8)' },
              padding: '8px',
            }}
          >
            <FacebookIcon />
          </IconButton>

          {/* Instagram Button */}
          <IconButton
            color="inherit"
            size="small"
            href="https://www.instagram.com"  // Updated Instagram link
            aria-label="Instagram"
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.6)',
              '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.8)' },
              padding: '8px',
            }}
          >
            <InstagramIcon />
          </IconButton>

          {/* LinkedIn Button */}
          <IconButton
            color="inherit"
            size="small"
            href="https://www.linkedin.com"  // Updated LinkedIn link
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
    </Container>
  );
}
