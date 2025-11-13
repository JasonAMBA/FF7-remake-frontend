'use client';
import Image from "next/image";
import styles from "./page.module.scss";

export default function Home() {

  const scrollIntoStorySection = () => {
    const storySection = document.getElementById('storySection');
    storySection.scrollIntoView({behavior:'smooth'});
  }

  return (
    <>
      <header className={styles.header}>
        <Image
          src="https://final-fantasy-vii-project.s3.eu-north-1.amazonaws.com/Logo-Final-Fantasy-VII-Remake/Final_Fantasy_VII_Remake_Logo.png"
          alt="Logo Final Fantasy"
          width={200}
          height={110}
        />

        <p>POUR LES FANS DE FINAL FANTASY</p>
      </header>

      <section className={styles.heroSection}>
        <p>DECOUVREZ L’HISTOIRE DE FINAL FANTASY VII REMAKE </p>
        <div className={styles.flex}>
          <button className={styles.homeBtn} onClick={scrollIntoStorySection}>Voir le contenu</button>
          <button className={styles.homeBtn}>Commencer l'aventure</button>
        </div>
      </section>

      <section id="storySection" className={styles.storySection}>

        <div className={styles.storySectionBlok}>
          <div className={styles.storySectionBlokColumn}>
            <p className={styles.storySectionBlokTitle}>Une aventure palpitante !</p>
            <Image 
              src="https://final-fantasy-vii-project.s3.eu-north-1.amazonaws.com/home-page/Green+materia.png"
              alt="Green materia"
              width={695}
              height={28}
            />
            <p className={styles.storySectionBlokText}>Suivez Cloud Strife et les membres d’Avalanche, un groupe de résistants luttant contre la Shinra, une puissante entreprise qui exploite la mako, source vitale de la planète.</p>
          </div>

          <Image 
            src="https://final-fantasy-vii-project.s3.eu-north-1.amazonaws.com/home-page/Cloud+%26+midgar.webp"
            alt="Cloud & Midgar"
            width={447}
            height={252}
            className={`${styles.borderImg} ${styles.fixImage}`}
          />
        </div>

        <div className={styles.storySectionBlok}>
          <Image 
            src="https://final-fantasy-vii-project.s3.eu-north-1.amazonaws.com/home-page/Cloud+%26+sephitoth.webp"
            alt="Cloud & Sephiroth"
            width={447}
            height={252}
            className={`${styles.borderImg} ${styles.fixImage}`}
          />

          <div className={styles.storySectionBlokColumn}>
            <p className={styles.storySectionBlokTitle}>Un quiz à chaque chapitre !</p>
            <Image 
              src="https://final-fantasy-vii-project.s3.eu-north-1.amazonaws.com/home-page/Purple+materia.png"
              alt="Purple materia"
              width={695}
              height={28}
            />
            <p className={styles.storySectionBlokText}>À la fin de chaque chapitre, un quiz vous attendra. Testez vos connaissances, visez le score parfait et collectionnez un maximum de badges… ou même tous les badges, si vous êtes à la hauteur !</p>
          </div>
        </div>

        <div className={styles.storySectionBlok}>
          <div className={styles.storySectionBlokColumn}>
            <p className={styles.storySectionBlokTitle}>Nous pensons à vous jusqu’au bout !</p>
            <Image 
              src="https://final-fantasy-vii-project.s3.eu-north-1.amazonaws.com/home-page/Red+materia.png"
              alt="Red materia"
              width={695}
              height={28}
            />
            <p className={styles.storySectionBlokText}>Tout au long de votre progression, vous recevrez des astuces et conseils utiles pour vous aider à vous lancer sereinement dans Final Fantasy VII Remake.</p>
          </div>

          <Image 
            src="https://final-fantasy-vii-project.s3.eu-north-1.amazonaws.com/home-page/Wall+market.webp"
            alt="Wall market"
            width={447}
            height={252}
            className={`${styles.borderImg} ${styles.fixImage}`}
          />
        </div>
      </section>

      <section className={styles.footerSection}>
        <Image
          src="https://final-fantasy-vii-project.s3.eu-north-1.amazonaws.com/home-page/UI+separator.png"
          alt="UI Separator"
          width={415}
          height={49}
        />
        <p className={styles.footerSectionBlokTitle}>Un projet pense par des fans et pour des fans !</p>
        <p className={styles.footerSectionBlokText}>Ce site web est né de notre passion pour Final Fantasy VII. Chaque section du site a été réalisé avec soin pour rendre hommage à l’univers du jeu.</p>
      </section>
    </>
  );
}
