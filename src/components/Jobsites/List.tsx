import { useRouter } from 'next/router';
import * as React from 'react';
import { Grid } from '@mui/material';

import CustomTable from '@/components/Common/CustomTable';
import { TableStructure } from '@/components/Common/TableList';
import SnackbarNotification from '@/components/SnackbarNotification';
import jobsites from '@/utils/jobsites';
import useFilter from '@/hooks/useFilter';
import JobSiteModel from '@/interfaces/jobsite.interface';

import JobsitesStats from './JobsitesStats';
import JobsiteDialog from './JobsiteDialog';

export default function List() {
  const router = useRouter();

  const [filteredData, setFilteredData] = React.useState<JobSiteModel[]>();
  const [openDialog, setOpenDialog] = React.useState(false);
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [selectedJobsite, setSelectedJobsite] = React.useState<JobSiteModel>();

  const structure: TableStructure[] = [
    { label: 'Jobsite Name', key: 'name', sortable: true, type: 'string' },
    { label: 'Status', key: 'status', sortable: true, type: 'status' },
  ];

  const filterApi = useFilter();

  const createJobsite = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setSelectedJobsite(undefined);
    setOpenDialog(false);
  };

  const handleDialogSuccess = (jobsite: JobSiteModel) => {
    setSelectedJobsite(undefined);
    if (jobsite) {
      setOpenSnackbar(true);
    }
    setOpenDialog(false);
  };

  const handleNameClick = (row: JobSiteModel) => {
    if (row) {
      router.push(`jobsites/${row.id}`);
    }
  };

  const hasFilteredData = filteredData && filteredData.length > 0;

  React.useEffect(() => {
    if (filterApi.searchTerm) {
      setFilteredData(
        jobsites.filter(
          (jobsite) =>
            jobsite.name.includes(filterApi.searchTerm) ||
            jobsite.status.includes(filterApi.searchTerm.toUpperCase())
        )
      );
    } else {
      setFilteredData([]);
    }
  }, [filterApi.searchTerm]);

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <JobsitesStats data={jobsites} />
      </Grid>
      <Grid item xs={12}>
        <CustomTable
          tableStructure={structure}
          data={hasFilteredData ? filteredData : jobsites}
          filterApi={filterApi}
          actionButton={{ method: createJobsite, text: 'Create' }}
          onNameClick={(row) => handleNameClick(row)}
        />
      </Grid>

      <JobsiteDialog
        open={openDialog}
        jobsite={selectedJobsite}
        onClose={handleCloseDialog}
        onSuccess={(jobsiteResponse) => handleDialogSuccess(jobsiteResponse)}
      />

      <SnackbarNotification
        open={openSnackbar}
        message="Jobsite successfully created"
        id="jobsite"
        onClose={() => setOpenSnackbar(false)}
      />
    </Grid>
  );
}
