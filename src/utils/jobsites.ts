import JobSiteModel from '@/interfaces/jobsite.interface';

const jobsites: JobSiteModel[] = [
  {
    id: 1,
    name: '1658 E 23rd St, Brooklyn, NY 11229, USA',
    status: 'COMPLETED',
    items: [
      {
        id: 101,
        jobsiteId: 1,
        categoryId: 1,
        item: 'Item 2',
        quantity: 5,
        description: 'A useful widget',
        notes: 'No special notes',
      },
      {
        id: 102,
        jobsiteId: 1,
        categoryId: 2,
        item: 'Item 5',
        quantity: 10,
        description: 'A handy gadget',
        notes: 'Handle with care',
      },
    ],
  },
  {
    id: 2,
    name: '1705 E 22nd St, Brooklyn, NY 11229, USA',
    status: 'ONROAD',
    items: [
      {
        id: 201,
        jobsiteId: 2,
        categoryId: 3,
        item: 'Item 4',
        quantity: 8,
        description: 'A versatile tool',
        notes: 'Requires regular maintenance',
      },
      {
        id: 202,
        jobsiteId: 2,
        categoryId: 2,
        item: 'Item 2',
        quantity: 12,
        description: 'A sophisticated device',
        notes: 'Firmware update needed',
      },
    ],
  },
  {
    id: 3,
    name: '47 Lake St, Brooklyn, NY 11223, USA',
    status: 'ONHOLD',
    items: [
      {
        id: 301,
        jobsiteId: 3,
        categoryId: 1,
        item: 'Item 6',
        quantity: 15,
        description: 'Heavy-duty equipment',
        notes: 'Maintenance schedule available',
      },
      {
        id: 302,
        jobsiteId: 3,
        categoryId: 1,
        item: 'Item 1',
        quantity: 7,
        description: 'A reliable tool',
        notes: 'Handle with care',
      },
    ],
  },
  {
    id: 4,
    name: '256 Bay 19th St, Brooklyn, NY 11214, USA',
    status: 'COMPLETED',
    items: [
      {
        id: 401,
        jobsiteId: 4,
        categoryId: 2,
        item: 'Item 9',
        quantity: 10,
        description: 'Sturdy equipment',
        notes: 'Comes with a warranty',
      },
      {
        id: 402,
        jobsiteId: 4,
        categoryId: 2,
        item: 'Item 12',
        quantity: 6,
        description: 'Another handy gadget',
        notes: 'Water-resistant',
      },
    ],
  },
];

export default jobsites;
