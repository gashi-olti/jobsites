import { Grid, Box, Typography } from '@mui/material';
import { green, red, yellow } from '@mui/material/colors';

import CommonContainer from '@/components/Common/CommonContainer';
import JobSiteModel from '@/interfaces/jobsite.interface';
import { statusSum } from '@/utils/statuses';

interface Props {
  data?: JobSiteModel[];
}

export default function JobsitesStats({ data }: Props) {
  return (
    <CommonContainer>
      <div tw="bg-white p-2 rounded-md">
        <Grid container spacing={1}>
          <Grid item xs={12} md={4}>
            <Box sx={{ bgcolor: '#ECDE7C', padding: 3 }} tw="rounded-md text-white">
              <Typography variant="h2" align="center">
                {data && statusSum(data, 'ONROAD')} On Road
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ bgcolor: '#7AC14D', padding: 3 }} tw="rounded-md text-white">
              <Typography variant="h2" align="center">
                {data && statusSum(data, 'COMPLETED')} Completed
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ bgcolor: '#FE4C4A', padding: 3 }} tw="rounded-md text-white">
              <Typography variant="h2" align="center">
                {data && statusSum(data, 'ONHOLD')} On Hold
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </div>
    </CommonContainer>
  );
}
