import { Header } from '../../components/Header';
import styles from './styles.module.scss';


export default function Home() {
  return (
    <>
      <Header />
      <section className={styles.homeContainer}>
        <div className={styles.homeContainerVertical}>
          <div className={styles.homeContainerHorizontal}>
            <div className={styles.contentContainer}>
              <span>👏 Olá, Bem-Vindo</span>
              <h1>Novas noticías sobre a <span>Marvel</span></h1>
              <p>
                Marvel revela datas e nomes dos filmes da nova fase do universo cinematográfico.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};