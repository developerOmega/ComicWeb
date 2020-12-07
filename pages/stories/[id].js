import { useRouter } from 'next/router';

const Story = () => {
  const router = useRouter();
  const { id } = router.query;

  return <p> Story ID: { id } </p>
}

export default Story;