import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';
import HandshakeRoundedIcon from '@mui/icons-material/HandshakeRounded';

const items = [
  {
    icon: <SettingsSuggestRoundedIcon />,
    title: 'Freight Brokerage',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
  },
  {
    icon: <ConstructionRoundedIcon />,
    title: 'Route Optimization and Load Planning',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <ThumbUpAltRoundedIcon />,
    title: 'Carrier Management and Compliance',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <HandshakeRoundedIcon />,
    title: 'Risk Management and Insurance Coordination',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <SupportAgentRoundedIcon />,
    title: 'Freight Tracking and Real-Time Monitoring',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <QueryStatsRoundedIcon />,
    title: 'Operational Cost Management',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

export default function Highlights() {
  return (
    <Box
      id="highlights"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: 'white',
        bgcolor: 'grey.900',
      }}
    >
      <Container
        sx={{
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
          <Typography component="h2" variant="h4" gutterBottom>
            Services
          </Typography>
          <Typography variant="body1" sx={{ color: 'grey.400' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus condimentum id sapien quis malesuada. Maecenas condimentum magna quis tortor sodales vehicula. Integer vitae efficitur erat.
          </Typography>
        </Box>
        <Grid container spacing={5}>
          {items.map((item, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Stack
                direction="column"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  color: 'inherit',
                  p: 3,
                  height: '80%',
                  borderColor: 'hsla(220, 25%, 25%, 0.3)',
                  backgroundColor: 'grey.800',
                }}
              >
                <Box sx={{ opacity: '50%' }}>{item.icon}</Box>
                <div>
                  <Typography gutterBottom sx={{ fontWeight: 'medium' }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'grey.400' }}>
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
