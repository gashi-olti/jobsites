import { Dialog, DialogContent } from '@mui/material';

import { Item } from '@/interfaces/jobsite.interface';
import CustomDialogTitle from '@/components/Common/CustomDialogTitle';

import ItemForm from './ItemForm';

type Props = {
  open: boolean;
  item?: Item | undefined;
  onClose: () => void;
  onSuccess: (response: any) => void;
};

export default function ItemDialog({ open, item, onClose, onSuccess }: Props) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="create-artist-dialog"
      maxWidth="sm"
      fullWidth
    >
      <div tw="flex flex-col overflow-auto space-y-4">
        <CustomDialogTitle id="jobsite-dialog" onClose={onClose} title="Title" />

        <DialogContent tw="px-4">
          <ItemForm item={item} onSuccess={onSuccess} />
        </DialogContent>
      </div>
    </Dialog>
  );
}
