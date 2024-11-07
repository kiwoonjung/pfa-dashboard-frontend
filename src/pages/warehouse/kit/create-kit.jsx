import { Helmet } from 'react-helmet-async';
import { useState } from 'react';

import { CONFIG } from 'src/config-global';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { varAlpha } from 'src/theme/styles';
import { DashboardContent } from 'src/layouts/dashboard';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import { kitList } from 'src/utils/axios';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Unstable_Grid2';
import KitItemList from 'src/components/kit-create/kit-item-list';

// ----------------------------------------------------------------------

const metadata = { title: `Create Kit | Dashboard - ${CONFIG.appName}` };

export default function KitList() {
  const [selectedKit, setSelectedKit] = useState(null);
  const handleKitChange = (event, newValue) => {
    setSelectedKit(newValue);
  };
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <DashboardContent maxWidth="xl">
        <Typography variant="h4"> Create Kit </Typography>
        <Container sx={{ mt: 5, mb: 10 }}>
          <Grid container spacing={{ xs: 3, md: 5, lg: 8 }}>
            <Grid xs={12} md={6} lg={6}>
              <Card sx={{ overflow: 'visible' }}>
                <CardContent>
                  <Typography sx={{ mb: 2 }} variant="h6" component="div">
                    Search for a Kit
                  </Typography>
                  <Autocomplete
                    disablePortal
                    options={kitList}
                    // sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Kit" />}
                    onChange={handleKitChange} // Handle change to update state
                  />
                  {selectedKit !== null && <KitItemList selectedKit={selectedKit} />}
                </CardContent>
              </Card>
            </Grid>
            <Grid xs={12} md={6} lg={6}>
              <Card sx={{ overflow: 'visible' }}>
                <CardContent>
                  <Typography sx={{ mb: 2 }} variant="h6" component="div">
                    Kit List
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* <Card sx={{ overflow: 'visible', width: '45%' }}>
            <CardContent>
              <Autocomplete
                disablePortal
                options={kitList}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Kit" />}
                onChange={handleKitChange} // Handle change to update state
              />
              {selectedKit !== null && <KitItemList selectedKit={selectedKit} />}
            </CardContent>
          </Card> */}
        </Container>
      </DashboardContent>
    </>
  );
}
