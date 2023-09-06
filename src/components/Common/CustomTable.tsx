import { Typography, Grid, Box, ButtonGroup, Button } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import AddIcon from '@mui/icons-material/Add';

import CommonContainer from './CommonContainer';
import Searchbar from './Searchbar';
import TableList, { TableStructure } from './TableList';
import { FilterApi } from '@/hooks/useFilter';

interface CustomTableProps {
  tableStructure: TableStructure[];
  filterApi: FilterApi;
  data?: any;
  title?: string;
  actionButton?: {
    method?: () => void;
    text: string;
  };
  onRowClick?: (row: any) => void;
  onNameClick?: (row: any) => void;
  alignText?: 'left' | 'center';
  informativeText?: boolean;
}

export default function CustomTable({
  tableStructure,
  filterApi,
  data,
  title = 'Title',
  actionButton,
  onRowClick,
  onNameClick,
  alignText,
  informativeText = true,
}: CustomTableProps) {
  return (
    <CommonContainer>
      <div tw="bg-gray-100 px-4 py-1 rounded-md mb-2">
        <Typography variant="h6" tw="text-gray-600">
          {title}
        </Typography>
      </div>
      <div tw="bg-white">
        <Grid container spacing={1} tw="py-2" justifyContent="space-between" alignItems="center">
          <Grid item>
            {informativeText && (
              <div tw="flex flex-row space-x-1 ml-2">
                <InfoIcon color="info" tw="text-base" />
                <Typography variant="body2" tw="text-gray-600">
                  Informative piece of text that can be used regarding this modal.
                </Typography>
              </div>
            )}
          </Grid>
          <Grid item>
            <div tw="flex flex-col space-y-2 md:(flex-row space-x-2 space-y-0 mr-2)">
              <Box sx={{ minWidth: { xs: 250, sm: 300, md: 450 }, width: 1 }}>
                <Searchbar value={filterApi.searchTerm} setValue={filterApi.setSearchTerm} />
              </Box>
              {actionButton && actionButton.method && (
                <ButtonGroup variant="contained" color="success" tw="shadow-none">
                  <Button
                    onClick={actionButton.method}
                    size="small"
                    sx={{ '&.MuiButtonBase-root': { bgcolor: '#7AC14D' }, px: 4, py: 0.5 }}
                  >
                    Create
                  </Button>
                  <Button
                    onClick={actionButton.method}
                    size="small"
                    sx={{ '&.MuiButtonBase-root': { bgcolor: '#7AC14D' }, px: 1, py: 0.5 }}
                  >
                    <AddIcon fontSize="small" />
                  </Button>
                </ButtonGroup>
              )}
            </div>
          </Grid>
        </Grid>
      </div>
      <div tw="w-full bg-white rounded-bl-md rounded-br-md">
        <TableList
          tableStructure={tableStructure}
          data={data}
          onRowClick={onRowClick}
          onNameClick={onNameClick}
          alignText={alignText}
        />
      </div>
    </CommonContainer>
  );
}
