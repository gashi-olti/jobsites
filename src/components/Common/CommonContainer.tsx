import { Box } from '@mui/material';

interface Props {
  children: React.ReactNode;
}

export default function CommonContainer({ children, ...otherProps }: Props) {
  return (
    <Box
      sx={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px' }}
      tw="w-full rounded-md"
      {...otherProps}
    >
      {children}
    </Box>
  );
}
