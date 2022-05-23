import Header from '../../components/common/Header/header'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faJs} from '@fortawesome/free-brands-svg-icons';

import styles from './techStack.module.css'
function TechStack() {
  return (
    <div>
      <Header></Header>
      <img className={styles.icon} src="/assets/images/html-icon.png"></img>
      <img className={styles.icon} src="/assets/images/css-icon.png"></img>
      <img className={styles.icon} src="/assets/images/js-icon.png"></img>
      <img className={styles.icon} src="/assets/images/react-icon.png"></img>

    </div>
  );
}

export default TechStack;