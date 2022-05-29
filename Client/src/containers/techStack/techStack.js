import Header from '../../components/common/Header/header'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faJs} from '@fortawesome/free-brands-svg-icons';

import styles from './techStack.module.css'
function TechStack() {
  return (
    <div>
      <Header></Header>
      <img className={styles.icon} src="/assets/images/icons/html-icon.png"></img>
      <img className={styles.icon} src="/assets/images/icons/css-icon.png"></img>
      <img className={styles.icon} src="/assets/images/icons/js-icon.png"></img>
      <img className={styles.icon} src="/assets/images/icons/react-icon.png"></img>
      <img className={styles.icon} src="/assets/images/icons/vue-icon.png"></img>
      <img className={styles.icon} src="/assets/images/icons/django-icon.png"></img>
      <img className={styles.icon} src="/assets/images/icons/mysql-icon.png"></img>
      <img className={styles.icon} src="/assets/images/icons/github-icon.png"></img>
      <img className={styles.icon} src="/assets/images/icons/java-icon.png"></img>
      <img className={styles.icon} src="/assets/images/icons/typescript-icon.png"></img>
      <img className={styles.icon} src="/assets/images/icons/python-icon.png"></img>
      <img className={styles.icon} src="/assets/images/icons/node-icon.png"></img>

    </div>
  );
}

export default TechStack;