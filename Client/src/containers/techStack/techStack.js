
import styles from './techStack.module.css'
import {Row,Col} from 'react-bootstrap'
function TechStack() {
  return (
    <div style={{display:'flex', justifyContent:'center', alignContent:'center',height:'400px'}}>
     
     <Row>
    <Col sm style={{minWidth:'400px',border:'1px solid'}}>
      <h1>FrontEnd</h1>
    <img className={styles.icon} src="/assets/images/icons/html-icon.png"></img>
      <img className={styles.icon} src="/assets/images/icons/css-icon.png"></img>
      <img className={styles.icon} src="/assets/images/icons/js-icon.png"></img>
    </Col>
    <Col sm style={{minWidth:'400px',border:'1px solid'}}>
    <h1>BackEnd</h1>

    <img className={styles.icon} src="/assets/images/icons/react-icon.png"></img>
      <img className={styles.icon} src="/assets/images/icons/vue-icon.png"></img>
      <img className={styles.icon} src="/assets/images/icons/django-icon.png"></img>
    </Col>
    <Col sm style={{minWidth:'400px',border:'1px solid'}}>
    <img className={styles.icon} src="/assets/images/icons/mysql-icon.png"></img>
      <img className={styles.icon} src="/assets/images/icons/github-icon.png"></img>
      <img className={styles.icon} src="/assets/images/icons/java-icon.png"></img>
      <img className={styles.icon} src="/assets/images/icons/typescript-icon.png"></img>
      <img className={styles.icon} src="/assets/images/icons/python-icon.png"></img>
      <img className={styles.icon} src="/assets/images/icons/node-icon.png"></img>
    </Col>
  </Row>
     
     
     
     
      
     

    </div>
  );
}

export default TechStack;