import { useRouter } from 'next/router';

import { SingleJobsiteComponent } from '@/components/Jobsites/SingleJobsite';
import Layout from '@/components/Layout';
import jobsites from '@/utils/jobsites';

export default function SingleJobsite() {
  const router = useRouter();
  const { id } = router.query;

  const jobsite = jobsites.find((item) => item.id === Number(id as string));

  if (!jobsite) {
    return <h1>Not found</h1>;
  }

  return (
    <Layout>
      <SingleJobsiteComponent jobsite={jobsite} />
    </Layout>
  );
}
