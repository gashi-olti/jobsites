import * as React from 'react';
import { useRouter } from 'next/router';
import {
  Grid,
  Box,
  Typography,
  Tabs,
  Tab,
  useMediaQuery,
  ButtonGroup,
  Button,
} from '@mui/material';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

import CommonContainer from '@/components/Common/CommonContainer';
import JobSiteModel from '@/interfaces/jobsite.interface';
import theme from '@/config/theme';
import TabPanel from '@/components/Common/TabPanel';
import { TableStructure } from '@/components/Common/TableList';

import SidewalkShed from './SidewalkShed';
import Scaffold from './Scaffold';
import Shoring from './Shoring';
import EmptyTable from './EmptyTable';

interface Props {
  jobsite: JobSiteModel;
}

export default function SingleJobsite({ jobsite }: Props) {
  const { name } = jobsite;

  const router = useRouter();

  const isTablet = useMediaQuery(theme.breakpoints.up('md'));

  const structure: TableStructure[] = [
    { label: 'Nr', key: 'id', sortable: true, type: 'number' },
    { label: 'Item', key: 'item', sortable: true, type: 'string' },
    { label: 'Quantity', key: 'quantity', sortable: true, type: 'number' },
    { label: 'Description', key: 'description', sortable: true, type: 'string' },
    { label: 'Notes', key: 'notes', sortable: true, type: 'string' },
  ];

  const [tab, setTab] = React.useState('');

  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setTab(newValue);
  };

  return (
    <Grid container spacing={2}>
      <Grid item container xs={12} md={4} lg={3}>
        <CommonContainer>
          <Box tw="bg-gray-100 px-2 py-1 text-gray-600 rounded-tl-md rounded-tr-md">
            <Typography variant="h5">{name}</Typography>
          </Box>
          <Box tw="bg-white p-2 flex flex-col justify-between space-y-4 h-full rounded-bl-md rounded-br-md">
            <Tabs
              value={tab}
              onChange={handleTabChange}
              variant={isTablet ? 'fullWidth' : 'scrollable'}
              orientation={isTablet ? 'vertical' : 'horizontal'}
              tw="flex items-center"
            >
              <Tab label="Sidewalk Shed" value="sidewalk-shed" />
              <Tab label="Scaffold" value="scaffold" />
              <Tab label="Shoring" value="shoring" />
            </Tabs>

            <ButtonGroup
              variant="contained"
              color="success"
              tw="shadow-none flex flex-row justify-center"
            >
              <Button
                size="small"
                type="submit"
                onClick={() => router.push('/')}
                sx={{ '&.MuiButtonBase-root': { bgcolor: '#1264A3' }, px: 4, py: 0.5 }}
              >
                Go Back
              </Button>
              <Button
                size="small"
                type="submit"
                onClick={() => router.push('/')}
                sx={{ '&.MuiButtonBase-root': { bgcolor: '#1264A3' }, px: 0, py: 0.5 }}
              >
                <KeyboardBackspaceIcon fontSize="small" />
              </Button>
            </ButtonGroup>
          </Box>
        </CommonContainer>
      </Grid>
      <Grid item xs={12} md={8} lg={9}>
        {tab ? (
          <>
            <TabPanel value={tab} tab="sidewalk-shed" tw="w-full">
              <SidewalkShed jobsite={jobsite} structure={structure} />
            </TabPanel>
            <TabPanel value={tab} tab="scaffold" tw="w-full">
              <Scaffold jobsite={jobsite} structure={structure} />
            </TabPanel>
            <TabPanel value={tab} tab="shoring" tw="w-full">
              <Shoring jobsite={jobsite} structure={structure} />
            </TabPanel>
          </>
        ) : (
          <EmptyTable />
        )}
      </Grid>
    </Grid>
  );
}
