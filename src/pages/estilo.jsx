import Link from 'next/link';

import styles from '../styles/estilo.module.css';

import Header from '../components/Header';

export default function Estilo() {
  return (
    <div className={styles.container}>
      <Link href="/">Voltar</Link>
      <h1>Meu componente</h1>
      <Header title="Header" subTitle="paragrafo"/>
    </div>
  )
}