import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

export interface DialogTitleProps {
  id: string;
  title: string;
  onClose: () => void;
}

const CustomDialogTitle = ({ id, title, onClose }: DialogTitleProps) => {
  return (
    <DialogTitle id={id} tw="bg-gray-100 py-1 px-4">
      <Grid container spacing={2} alignItems="center" justifyContent="space-between">
        <Grid item>
          <Typography variant="h5">{title}</Typography>
        </Grid>

        {onClose && (
          <Grid item>
            <IconButton aria-label="close" onClick={onClose} size="small">
              <CloseIcon fontSize="small" />
            </IconButton>
          </Grid>
        )}
      </Grid>
    </DialogTitle>
  );
};

export default CustomDialogTitle;
