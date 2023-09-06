import JobSiteModel, { Item } from '@/interfaces/jobsite.interface';
import jobsites from '@/utils/jobsites';

export default function useJobsiteApi() {
  const createJobsite = async (data: JobSiteModel) => {
    const lastRecord = jobsites.at(-1);

    const { name, category, status } = data;

    const response = jobsites.unshift({
      id: lastRecord?.id ? lastRecord.id++ : -1,
      name,
      category,
      status,
      items: [],
    });

    return response;
  };

  const updateJobsiteItem = async (data: Item) => {
    const { id, jobsiteId, item, quantity, description, notes } = data;
    const jobsite = jobsites.find((item) => item.id === jobsiteId);
    const jobsiteItem = jobsite?.items.find((item) => item.id === id);

    if (!jobsiteItem) return;

    jobsiteItem.item = item;
    jobsiteItem.quantity = quantity;
    jobsiteItem.description = description;
    jobsiteItem.notes = notes;

    return true;
  };

  return {
    createJobsite,
    updateJobsiteItem,
  };
}
