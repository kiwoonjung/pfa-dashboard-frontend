import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { varAlpha } from 'src/theme/styles';
import { DashboardContent } from 'src/layouts/dashboard';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { kitList } from 'src/utils/axios';
import Card from '@mui/material/Card';
import { CardContent } from '@mui/material';

// ----------------------------------------------------------------------

const metadata = { title: `Create Kit | Dashboard - ${CONFIG.appName}` };

export default function KitList() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>

      <DashboardContent maxWidth="xl">
        <Typography variant="h4"> Create Kit </Typography>
        <Card>
          <CardContent>
            <Autocomplete
              disablePortal
              options={kitList}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Movie" />}
            />
          </CardContent>
        </Card>
      </DashboardContent>
    </>
  );
}
