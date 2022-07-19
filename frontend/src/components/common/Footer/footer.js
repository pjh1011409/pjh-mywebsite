
import styles from './footer.module.css'

function Footer() {
  return (
    <div className={styles.footerMark}>
      <div >
        <img
          className={styles.icon}
          src="/assets/images/messenger/mail-icon.png"
        ></img>
        <img
          className={styles.icon}
          src="/assets/images/icons/github-icon.png"
        ></img>

        <img
          className={styles.icon}
          src="/assets/images/messenger/instagram-icon.png"
        ></img>
      </div>
      <div className={styles.footerInfo}>2022. produced by ParkJeongHo</div>
    </div>
  );
}

export default Footer