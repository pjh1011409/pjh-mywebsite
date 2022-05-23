import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBlogger,faGithub, faFacebook, faInstagramSquare} from '@fortawesome/free-brands-svg-icons';

import {Row, Col} from 'react-bootstrap'

import styles from './mainPage.module.css'

function Profile(){
    return(
        <Row className={styles.aboutMe}>
        <Col sm>
          <img className={styles.myPhoto} src="assets/images/박정호.jpeg"></img>
        </Col>
        <Col sm>
          <div className={styles.profile}>
            <h1>박정호</h1>
            <h4>ParkJeongHo</h4>
            <br></br>

            <h4>FE Developer</h4>
            <br></br>

            </div>
            <ul style={{ listStyle: "none"}}>
              <li style={{ float: "left" }}>
                {" "}
                <FontAwesomeIcon
                  icon={faGithub}
                  size="2x"
                  className={styles.profileIcon}
                  style={{ margin: "5px" }}
                />
              </li>
              <li style={{ float: "left" }}>
                {" "}
                <FontAwesomeIcon
                  icon={faBlogger}
                  size="2x"
                  className={styles.profileIcon}
                  style={{ margin: "5px" }}
                />
              </li>
              <li style={{ float: "left" }}>
                {" "}
                <FontAwesomeIcon
                  icon={faFacebook}
                  size="2x"
                  className={styles.profileIcon}
                  style={{ margin: "5px" }}
                />
              </li>
              <li style={{ float: "left" }}>
                {" "}
                <FontAwesomeIcon
                  icon={faInstagramSquare}
                  size="2x"
                  className={styles.profileIcon}
                  style={{ margin: "5px" }}
                />
              </li>
              <li style={{ float: "left" }}>
                {" "}
                <img
                  className={styles.profileIcon}
                  style={{ width: "40px" }}
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADY0lEQVRoge3ZS4hcRRQG4K/DyOAjMibxhUpEkYBP8IEufIDiwo2CuDCgohuNBtGNC+NCF4riQkVF3IjoRhAFUREXCnEVN4qPSFAiJg6KIY4ZfJPEtIuqa2q67+25t+7tJsH+oaia6qpz/p+qM1V1LlNMMcX/Ar0x2DwWq7A6llVJXdb+Ex/hGezIdTpKyFElTuuQOyKTyx+4Dy/lTK4S8jEuzST0O37BQqx/jnXaV9SLOBH34KY4/zVswK9NnFYJ6Sft77AzIVMQW1BOcG8TAgluwQtYie24GZ9k2voP/aRsw8ltDdbE6cJu6GMfHsGKNgYLEV8m9QntONbGLJ7Fgej7bSEGs1AIOR5fOLgyJ7WmWR/XC1u1j3lcOWrwcjHSE1biQ5yLrbgau1sQnMFxmIv1YDv9++xY4B88jMdyhbBUzDw2CYHYq0koba9sILoM9+L5XCEsFdMWi9gT67Q9qu8ivIofccqgwSZCCGJ2xfZefNuASNHeU1tufV4jJ/SX+e28FoRyMYpX4wmNjXWISt+tDptDCeMUcrRwI1iHi7GmYtx6vIst+ArfC/F0fxckcrfWg/gJ+5NxRXmnZPxaIfgHxz6t/DSfWIz8VkIqLesr5s0mYw5k8mo8oY6xzcqF7FZ+Z+tpKWTSwb4GT03S4bhWpCg3DIw/LFZkV0nfc8LbvjNMQshD+Gug7zQ80aWTSQjZjkdL+jfgmnE77zJGrhLeIJ8ZjpVvcKTDJEYIB+RdhkmeJTyWxoauV6TAi4ZXZR8u0XJFcia0ETInPIwGxaTb7pDeWgWqLoMXtDVcJaTxS6wBXsd7XRutEjIf6zO6dhixUcj1doYqIZtjvalLZwl2CFnEsWOdcBr3cffAb22CPcUMPjUc+J3+1yIklftCtiQ9gUcZm8Hl+DoZt4gPcEXJ+AvxtzELgcfjxAXh8FrO2JYSUj/gFdWXxOuExPVW4ZPCtSP4ZAtZgbfi5G3COTDK2GU4B6fq+HYbkS0EjsHn0cD7bY21RGvfa4V3RbptJo3zHXwuD2GmppGduFHI/c52QCpNbM9ZmuSu6jszzn2zzGDTk/t2vBzbtwkZ+bpE0nYO9uMN3Clka5Yg5wryJB7IJFOgSRa+aM8rEVAgR0gPd+BW4Yts008EbbLxU0wxRSb+BYo+cotr0vKUAAAAAElFTkSuQmCC"
                />
              </li>
            </ul>
         
        </Col>
      </Row>
    )
}

export default Profile;