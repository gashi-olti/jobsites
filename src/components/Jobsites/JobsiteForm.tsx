import * as React from 'react';
import {
  Typography,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  ButtonGroup,
  Button,
  Autocomplete,
  TextField,
  Chip,
} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';
import CircleIcon from '@mui/icons-material/Circle';
import DisabledByDefaultRoundedIcon from '@mui/icons-material/DisabledByDefaultRounded';
import { Controller, useForm } from 'react-hook-form';

import InputController from '@/components/Form/InputController';
import { CategoryModel, categories } from '@/utils/categories';
import { getStatusColor, statuses } from '@/utils/statuses';
import JobSiteModel from '@/interfaces/jobsite.interface';
import useJobsiteApi from '@/hooks/useJobsiteApi';

interface Props {
  jobsite?: JobSiteModel | undefined;
  onSuccess?: (response: any) => void;
  onCancel?: () => void;
}

export default function JobsiteForm({ jobsite, onSuccess, onCancel }: Props) {
  const { createJobsite } = useJobsiteApi();

  const defaultValues = React.useMemo(
    () => ({
      ...jobsite,
      name: jobsite?.name ?? '',
      category: jobsite?.category ?? [],
      status: jobsite?.status ?? '',
    }),
    [jobsite]
  );

  const { handleSubmit, control, formState } = useForm<JobSiteModel>({
    mode: 'onBlur',
    defaultValues,
  });

  const { errors } = formState;

  const submitForm = async (data: JobSiteModel) => {
    const response = await createJobsite(data);

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
        <Grid item xs={12}>
          <InputLabel tw="text-gray-700 ml-3">Name</InputLabel>
          <FormControl fullWidth>
            <InputController name="name" control={control} errors={errors} />
          </FormControl>
        </Grid>
        <Grid item xs={12} md={8}>
          <InputLabel tw="text-gray-700 ml-3">Category Included</InputLabel>
          <FormControl fullWidth>
            <Controller
              control={control}
              name="category"
              render={({ field }) => (
                <Autocomplete
                  multiple
                  size="small"
                  disableClearable
                  options={categories}
                  getOptionLabel={(option) => option.label}
                  renderInput={(params) => <TextField {...params} placeholder="Favorites" />}
                  renderOption={(props, option) => (
                    <MenuItem
                      {...props}
                      value={option.id}
                      sx={{
                        '&.MuiMenuItem-root': {
                          '&:hover': {
                            backgroundColor:
                              option.id === 1 ? '#67AA3C' : option.id === 2 ? '#EFD652' : '#9640BE',
                          },
                        },
                      }}
                    >
                      {option.label}
                    </MenuItem>
                  )}
                  renderTags={(value: readonly CategoryModel[], getTagProps) =>
                    value.map((option: CategoryModel, index: number) => (
                      <Chip
                        variant="filled"
                        label={option.label}
                        icon={
                          <CircleIcon
                            tw="text-sm"
                            color={
                              option.id === 1 ? 'success' : option.id === 2 ? 'warning' : 'error'
                            }
                          />
                        }
                        deleteIcon={<DisabledByDefaultRoundedIcon color="error" />}
                        {...getTagProps({ index })}
                        sx={{
                          '& .MuiChip-deleteIcon': {
                            color: '#FE4C4A',
                          },
                          '&.MuiChip-root': {
                            backgroundColor: 'transparent',
                          },
                        }}
                      />
                    ))
                  }
                />
              )}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} md={4}>
          <InputLabel tw="text-gray-700 ml-3">Status</InputLabel>
          <FormControl fullWidth>
            <Controller
              control={control}
              name="status"
              render={({ field }) => (
                <Select size="small" {...field}>
                  {Object.entries(statuses).map((key) => (
                    <MenuItem
                      key={key[0]}
                      value={key[0]}
                      sx={{
                        '&.MuiMenuItem-root': {
                          '&:hover': {
                            backgroundColor: getStatusColor(key[0]),
                          },
                        },
                      }}
                    >
                      {key[1]}
                    </MenuItem>
                  ))}
                </Select>
              )}
            />
          </FormControl>
        </Grid>
        <Grid item container spacing={1} justifyContent="flex-end" mt={6}>
          <Grid item>
            <ButtonGroup variant="contained" color="success" tw="shadow-none">
              <Button
                onClick={onCancel}
                size="small"
                sx={{ '&.MuiButtonBase-root': { bgcolor: '#FE4C4A' }, px: 1, py: 0.5 }}
              >
                Cancel Changes
              </Button>
              <Button
                onClick={onCancel}
                size="small"
                sx={{ '&.MuiButtonBase-root': { bgcolor: '#FE4C4A' }, px: 0, py: 0.5 }}
              >
                <CloseIcon fontSize="small" />
              </Button>
            </ButtonGroup>
          </Grid>
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
