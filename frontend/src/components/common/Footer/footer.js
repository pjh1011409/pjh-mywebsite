
import styles from './footer.module.css'

function Footer() {
  return (
    <div className={styles.footerLayout}> 


    <div className={styles.footerMark}>
      <div >
        <img
          className={styles.icon}
          src={process.env.PUBLIC_URL + "/static/images/messenger/mail-icon.png"}
          ></img>
        <img
          className={styles.icon}
          src={process.env.PUBLIC_URL + "/static/images/icons/github-icon.png"}
        ></img>

        <img
          className={styles.icon}
          src={process.env.PUBLIC_URL + "/static/images/messenger/instagram-icon.png"}
        ></img>
      </div>
      <div className={styles.footerInfo}>2022. produced by ParkJeongHo</div>
    </div>
    </div>

  );
}

export default Footer