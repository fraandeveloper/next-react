import Link from 'next/link';
import styles from '../styles/navigation.module.css';

export default function Navigation({ path, title }) {
  return (
    <Link href={path}>
      <p className={styles.paragrah}>{ title }</p>
    </Link>
  )
}