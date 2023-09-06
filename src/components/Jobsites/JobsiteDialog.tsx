import { Dialog, DialogContent, useMediaQuery, useTheme } from '@mui/material';

import JobSiteModel from '@/interfaces/jobsite.interface';
import CustomDialogTitle from '@/components/Common/CustomDialogTitle';
import JobsiteForm from './JobsiteForm';

type Props = {
  open: boolean;
  jobsite?: JobSiteModel | undefined;
  onClose: () => void;
  onSuccess: (response: any) => void;
};

export default function JobsiteDialog({ open, jobsite, onClose, onSuccess }: Props) {
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
          <JobsiteForm jobsite={jobsite} onSuccess={onSuccess} onCancel={onClose} />
        </DialogContent>
      </div>
    </Dialog>
  );
}
