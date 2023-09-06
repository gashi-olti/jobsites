import * as React from 'react';
import {
  Typography,
  Grid,
  FormControl,
  InputLabel,
  ButtonGroup,
  Button,
  Autocomplete,
  TextField,
} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import DoneIcon from '@mui/icons-material/Done';
import { Controller, useForm } from 'react-hook-form';

import InputController from '@/components/Form/InputController';
import { Item } from '@/interfaces/jobsite.interface';
import useJobsiteApi from '@/hooks/useJobsiteApi';
import { items } from '@/utils/items';

interface Props {
  item?: Item | undefined;
  onSuccess?: (response: any) => void;
}

export default function ItemForm({ item, onSuccess }: Props) {
  const { updateJobsiteItem } = useJobsiteApi();

  const [selectedItem, setSelectedItem] = React.useState<string | null>(null);

  const defaultValues = React.useMemo(
    () => ({
      ...item,
      item: item?.item ?? items[0],
      quantity: item?.quantity ?? 0,
      description: item?.description ?? '',
      notes: item?.notes ?? '',
    }),
    [item]
  );

  const { handleSubmit, control, setValue, formState } = useForm<Item>({
    mode: 'onBlur',
    defaultValues,
  });

  const { errors } = formState;

  React.useEffect(() => {
    setSelectedItem(items.find((i) => i === item?.item) || null);
  }, [item?.item]);

  const submitForm = async (data: Item) => {
    const response = await updateJobsiteItem(data);

    if (onSuccess) {
      onSuccess(response);
    }
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <div tw="flex flex-row space-x-1">
            <InfoIcon color="info" tw="text-base" />
            <Typography variant="body2" tw="text-gray-600">
              Informative piece of text that can be used regarding this modal.
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <InputLabel tw="text-gray-700 ml-3">Category Included</InputLabel>
          <FormControl fullWidth>
            <Controller
              control={control}
              name="item"
              render={({ field }) => (
                <Autocomplete
                  {...field}
                  size="small"
                  disableClearable
                  isOptionEqualToValue={(option, value) => option === value}
                  onChange={(_event, newValue) => {
                    setSelectedItem(newValue);
                    setValue('item', newValue);
                  }}
                  value={selectedItem ?? items[0]}
                  options={items}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      placeholder="Search & Select Item"
                      required
                      sx={{ mt: 0.5 }}
                    />
                  )}
                />
              )}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <InputLabel tw="text-gray-700 ml-3">Quantity</InputLabel>
          <FormControl fullWidth>
            <InputController name="quantity" control={control} errors={errors} />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <InputLabel tw="text-gray-700 ml-3">Description</InputLabel>
          <FormControl fullWidth>
            <InputController
              name="description"
              control={control}
              errors={errors}
              rows={4}
              multiline
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <InputLabel tw="text-gray-700 ml-3">Notes</InputLabel>
          <FormControl fullWidth>
            <InputController name="notes" control={control} errors={errors} rows={4} multiline />
          </FormControl>
        </Grid>
        <Grid item container spacing={1} justifyContent="flex-end" mt={6}>
          <Grid item>
            <ButtonGroup variant="contained" color="success" tw="shadow-none">
              <Button
                size="small"
                type="submit"
                sx={{ '&.MuiButtonBase-root': { bgcolor: '#7AC14D' }, px: 1, py: 0.5 }}
              >
                Save Changes
              </Button>
              <Button
                size="small"
                type="submit"
                sx={{ '&.MuiButtonBase-root': { bgcolor: '#7AC14D' }, px: 0, py: 0.5 }}
              >
                <DoneIcon fontSize="small" />
              </Button>
            </ButtonGroup>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
}
