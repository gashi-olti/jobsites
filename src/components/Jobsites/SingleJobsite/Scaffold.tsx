import * as React from 'react';

import CommonContainer from '@/components/Common/CommonContainer';
import CustomTable from '@/components/Common/CustomTable';
import { TableStructure } from '@/components/Common/TableList';
import useFilter from '@/hooks/useFilter';
import JobSiteModel, { Item } from '@/interfaces/jobsite.interface';
import ItemDialog from './ItemDialog';
import SnackbarNotification from '@/components/SnackbarNotification';

interface Props {
  jobsite: JobSiteModel;
  structure: TableStructure[];
}

export default function Scaffold({ jobsite, structure }: Props) {
  const { items } = jobsite;
  const categoryItems = items.filter((item) => item.categoryId === 2);

  const [filteredData, setFilteredData] = React.useState<Item[]>();
  const [selectedItem, setSelectedItem] = React.useState<Item>();
  const [openDialog, setOpenDialog] = React.useState(false);
  const [openSnackbar, setOpenSnackbar] = React.useState(false);

  const filterApi = useFilter();

  const updateItem = (item: Item) => {
    setSelectedItem(item);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setSelectedItem(undefined);
    setOpenDialog(false);
  };

  const handleDialogSuccess = (item: Item) => {
    setSelectedItem(undefined);
    if (item) {
      setOpenSnackbar(true);
    }
    setOpenDialog(false);
  };

  const hasFilteredData = filteredData && filteredData.length > 0;

  React.useEffect(() => {
    if (filterApi.searchTerm) {
      setFilteredData(
        items.filter(
          (item) =>
            item.item.includes(filterApi.searchTerm) ||
            String(item.quantity) === filterApi.searchTerm ||
            item.description.includes(filterApi.searchTerm) ||
            item.notes.includes(filterApi.searchTerm)
        )
      );
    } else {
      setFilteredData([]);
    }
  }, [filterApi.searchTerm]);

  return (
    <CommonContainer>
      <CustomTable
        title="Scaffold"
        data={hasFilteredData ? filteredData : categoryItems}
        filterApi={filterApi}
        tableStructure={structure}
        alignText="left"
        informativeText={false}
        onRowClick={(item) => updateItem(item)}
      />

      <ItemDialog
        open={openDialog}
        item={selectedItem}
        onClose={handleCloseDialog}
        onSuccess={(item) => handleDialogSuccess(item)}
      />

      <SnackbarNotification
        open={openSnackbar}
        message="Jobsite successfully created"
        id="jobsite"
        onClose={() => setOpenSnackbar(false)}
      />
    </CommonContainer>
  );
}
