import { CategoryModel } from '@/utils/categories';

export default interface JobSiteModel {
  id: number;
  name: string;
  status: string | '';
  category?: CategoryModel[] | '';
  items: Item[];
}

export interface Item {
  id: number;
  jobsiteId: number;
  categoryId: number;
  item: string;
  quantity: number;
  description: string;
  notes: string;
}
