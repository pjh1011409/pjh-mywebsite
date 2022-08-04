import styles from './projects.module.css'

import { Row, Col } from 'react-bootstrap'
import { useState, useEffect, useRef } from 'react'
import { Images } from './projectData'
import { ProjectData } from './projectData'

import Modal from './modal/modal'
import Slide from './slide/slide'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'

function Projects() {
    const [projectData, setProjectData] = useState(ProjectData)
    const [images, setImages] = useState(Images)
    const [modalOpen, setModalOpen] = useState(false)
    const [modalId, setModalId] = useState('')

    const openModal = () => {
        document.body.style.overflow = 'hidden'
        setModalOpen(true)
    }
    const closeModal = () => {
        document.body.style.overflow = 'unset'
        setModalOpen(false)
    }

    return (
        <div>
            <div className={styles.projectBg}>
                <Row style={{ margin: '0' }}>
                    {projectData.map((data, i) => {
                        return (
                            
                                <Col sm={6} key={data.id} className={styles.project}>
                                    <article className={styles.card}>
                                        <div className={styles.inner}>
                                            <span
                                                className={styles.projectTitle}
                                            >
                                                <span>{data.Name}</span>
                                            </span>

                                            <p className={styles.intro}>
                                                {data.Intro}
                                            </p>
                                            <Row className={styles.innerRow}>
                                                <Col
                                                    sm
                                                    className={styles.leftCol}
                                                >
                                                    <Slide
                                                        images={images}
                                                        i={i}
                                                    ></Slide>
                                                </Col>
                                                <Col
                                                    sm
                                                    className={styles.rightCol}
                                                >
                                                    <div
                                                        className={
                                                            styles.rightInfo
                                                        }
                                                    >
                                                        <FontAwesomeIcon
                                                            icon={faCircleCheck}
                                                            className={
                                                                styles.icon
                                                            }
                                                        />
                                                        {data.Period}
                                                    </div>
                                                    <div
                                                        className={
                                                            styles.rightInfo
                                                        }
                                                    >
                                                        <FontAwesomeIcon
                                                            icon={faCircleCheck}
                                                            className={
                                                                styles.icon
                                                            }
                                                        />
                                                        {data.Team}
                                                    </div>{' '}
                                                    <div
                                                        className={
                                                            styles.rightInfo
                                                        }
                                                    >
                                                        <FontAwesomeIcon
                                                            icon={faCircleCheck}
                                                            className={
                                                                styles.icon
                                                            }
                                                        />
                                                        {data.Stack}
                                                    </div>
                                                </Col>
                                            </Row>
                                            <div
                                              className={styles.modalBg}
                                            >
                                                <button
                                                    className={styles.modalBtn}
                                                    onClick={() => {
                                                        openModal()
                                                        setModalId(data.id)
                                                    }}
                                                >
                                                    Go To Detail{' '}
                                                </button>
                                                <Modal
                                                    open={modalOpen}
                                                    close={closeModal}
                                                    openModal={openModal}
                                                    setModalOpen={setModalOpen}
                                                    modalOpen={modalOpen}
                                                    closeModal={closeModal}
                                                    modalId={modalId}
                                                ></Modal>{' '}
                                            </div>
                                        </div>
                                    </article>
                                </Col>
                            
                        )
                    })}
                </Row>
            </div>
        </div>
    )
}


export default Projects
