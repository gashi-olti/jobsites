import { Alert, AlertColor, AlertTitle, Snackbar } from '@mui/material';

type SnackbarNotificationProps = {
  duration?: number;
  id: string | undefined;
  message: string;
  open: boolean;
  type?: AlertColor;
  title?: string;
  onClose: () => void;
};

export default function SnackbarNotification({
  duration = 6000,
  message,
  id,
  open = false,
  type = 'success',
  onClose,
  title = '',
}: SnackbarNotificationProps) {
  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      autoHideDuration={duration}
      ContentProps={{
        'aria-describedby': 'message-id',
      }}
      key={id}
      open={open}
      onClose={onClose}
    >
      <Alert variant="filled" severity={type} onClose={onClose} tw="">
        {title && <AlertTitle>{title}</AlertTitle>}
        {message}
      </Alert>
    </Snackbar>
  );
}
