import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub,faInstagramSquare} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope,} from '@fortawesome/free-solid-svg-icons'
import styles from './footer.module.css'

function Footer() {
  return (
    <div style={{ background: "black", height: "200px" }}>
      <div className={styles.footerMark}>
        <FontAwesomeIcon
          icon={faGithub}
          size="2x"
          className={styles.footerIcon}
          style={{ margin: "10px", color: "white"}}
        />
        <FontAwesomeIcon
          icon={faEnvelope}
          size="2x"
          className={styles.footerIcon}
          style={{ marginBottom: "10px", color: "white" }}
        />
        <FontAwesomeIcon
          icon={faInstagramSquare}
          size="2x"
          className={styles.footerIcon}
          style={{ margin: "10px", color: "white" }}
        />
      </div>
      <div className={styles.footerInfo}>
          2022. produced by ParkJeongHo
      </div>
    </div>
  );
}

export default Footer