import { useRouter } from 'next/router';

export default function Codigo() {
  const router = useRouter();
  
  return (
    <span>Codigo {router.query.codigo}</span>
  )
}