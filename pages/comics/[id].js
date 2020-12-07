import { useRouter } from 'next/router';

const Comic = () => {
  const router = useRouter();
  const { id } = router.query;
  return <p> Comic ID: { id } </p>
}

export default Comic;