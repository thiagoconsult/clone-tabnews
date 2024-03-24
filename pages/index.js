import styles from "../styles/index.module.css";
import Image from "next/image";
import Logo from "../assets/images/collabnews-logo.png";

function Home() {
  return (
    <>
      <div className={styles.container}>
        <header className={styles.topo}>
          <Image src={Logo}></Image>
        </header>

        <main className={styles.corpo}>Em construção....</main>

        <footer className={styles.rodape}>collabnews - 2024 </footer>
      </div>
    </>
  );
}

export default Home;
