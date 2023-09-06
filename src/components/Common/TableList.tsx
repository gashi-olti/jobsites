import * as React from 'react';
import { Table, TableHead, TableRow, TableCell, Typography, TableBody, Box } from '@mui/material';

import theme from '@/config/theme';
import { getStatus, getStatusColor } from '@/utils/statuses';

export type TableStructure = {
  label: string;
  key: string;
  sortable: boolean;
  type: 'number' | 'string' | 'status';
};

interface Props {
  tableStructure: TableStructure[];
  data?: any;
  onRowClick?: (row: any) => void;
  onNameClick?: (row: any) => void;
  alignText?: 'left' | 'center';
}

export default function TableList({
  tableStructure,
  data,
  onRowClick,
  onNameClick,
  alignText = 'center',
}: Props) {
  const handleRowClick = (event: React.MouseEvent<HTMLTableRowElement, MouseEvent>, row: any) => {
    event.preventDefault();
    event.stopPropagation();
    if (onRowClick) {
      onRowClick(row);
    }
  };

  const handleNameClick = (row: any) => {
    if (onNameClick) {
      onNameClick(row);
    }
  };

  const format = ({ type, value }: { type: string; value: string | number }) => {
    let formattedValue: string | number = '';
    switch (type) {
      case 'status':
        formattedValue = getStatus(value as string);
        break;
      default:
        formattedValue = value;
        break;
    }

    return formattedValue;
  };

  const colspan = tableStructure.length;

  const noResults = data?.length === 0;

  return (
    <Table size="small">
      <TableHead>
        <TableRow
          sx={{
            backgroundColor: theme.palette.common.white,
          }}
        >
          {tableStructure.map((entry, index) => (
            <TableCell key={index} align={alignText}>
              <Typography variant="h5">{entry.label}</Typography>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {data?.map((row: any, index: number) => (
          <TableRow
            key={index}
            onClick={(e) => handleRowClick(e, row)}
            sx={{
              bgcolor: index % 2 === 0 ? theme.palette.grey[100] : 'inherit',
              '&:hover': {
                cursor: onRowClick ? 'pointer' : 'normal',
              },
            }}
          >
            {tableStructure.map((x, i) => (
              <TableCell key={i} align={alignText}>
                {x.type === 'status' ? (
                  <Box
                    sx={{ bgcolor: getStatusColor(row[x.key]), width: 140 }}
                    tw="py-0.5 rounded-md mx-auto text-white"
                  >
                    <Typography variant="body1">
                      {format({ type: x.type, value: row[x.key] as any })}
                    </Typography>
                  </Box>
                ) : (
                  <Typography
                    variant="body1"
                    onClick={() => (x.key === 'name' ? handleNameClick(row) : {})}
                    sx={[
                      x.key === 'name' && {
                        '&:hover': {
                          cursor: 'pointer',
                        },
                      },
                    ]}
                  >
                    {format({ type: x.type, value: row[x.key] as any })}
                  </Typography>
                )}
              </TableCell>
            ))}
          </TableRow>
        ))}
        {noResults && (
          <TableRow>
            <TableCell colSpan={colspan}>
              <Typography>No records found.</Typography>
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
