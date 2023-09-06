import { Card, InputBase, InputAdornment } from '@mui/material';
import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { theme as twinTheme } from 'twin.macro';
import { grey } from '@mui/material/colors';

interface SearchbarProps {
  placeholder?: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export default function Searchbar({
  placeholder = 'Search a driver',
  value,
  setValue,
}: SearchbarProps) {
  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
  };

  return (
    <Card
      sx={{
        backgroundColor: grey[50],
        border: `1px solid ${grey[200]}`,
        boxShadow: 'none',
      }}
    >
      <InputBase
        id="searchbar"
        size="small"
        value={value}
        fullWidth
        onChange={handleQueryChange}
        placeholder={placeholder}
        sx={{
          '& .MuiInputBase-input': {
            '&::placeholder': { color: grey[400] },
          },
        }}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon color="disabled" fontSize="small" sx={{ color: grey[300] as string }} />
          </InputAdornment>
        }
        tw="pl-2 py-1 pr-3"
      />
    </Card>
  );
}
