import { Box, Typography } from '@mui/material';

import CommonContainer from '@/components/Common/CommonContainer';
import Searchbar from '@/components/Common/Searchbar';
import Image from 'next/image';
import { Images } from '@/components/Common/Images';

export default function EmptyTable() {
  return (
    <CommonContainer>
      <div tw="w-full flex flex-col">
        <Box tw="flex flex-row justify-between items-center bg-gray-100 px-2 py-1 rounded-tl-md rounded-tr-md">
          <Typography variant="h5">Data Grid</Typography>

          <Searchbar value="" setValue={() => {}} />
        </Box>

        <Box tw="w-full flex flex-col justify-center items-center space-y-4 py-20 bg-white rounded-bl-md rounded-br-md">
          <Image width={191} height={151} src={Images.NoServiceSelected} alt="" />
          <Typography variant="h5">No Service Selected</Typography>
          <Typography variant="body1">Please select a service on your left to proceed.</Typography>
        </Box>
      </div>
    </CommonContainer>
  );
}
