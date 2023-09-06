import JobSiteModel from '@/interfaces/jobsite.interface';

export const statuses = {
  ONROAD: 'On Road',
  COMPLETED: 'Completed',
  ONHOLD: 'On Hold',
};

export const getStatus = (statusKey: string) => statuses[statusKey as keyof typeof statuses];

export const getStatusColor = (statusKey: string) => {
  if (statusKey) {
    if (statusKey === 'ONROAD') return '#ECDE7C';
    if (statusKey === 'COMPLETED') return '#7AC14D';
    if (statusKey === 'ONHOLD') return '#FE4C4A';
  }

  return null;
};

export const statusSum = (data: JobSiteModel[], statusKey: string) => {
  let total = 0;

  data.forEach((jobsite) => {
    if (jobsite.status === statusKey) {
      total++;
    }
  });

  return total;
};
