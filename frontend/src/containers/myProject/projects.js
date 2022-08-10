import styles from './projects.module.css'

import { Row, Col } from 'react-bootstrap'
import { useState, useEffect, useRef } from 'react'
import { Images } from './projectData'
import { ProjectData } from './projectData'
import { Stack } from './projectData'

import Modal from './modal/modal'
import Slide from './slide/slide'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'

function Projects() {
    const [projectData, setProjectData] = useState(ProjectData)
    const [images, setImages] = useState(Images)
    const [stack, setStack] = useState(Stack)
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
        <div style={{ backgroundColor: '#72a1ec' }}>
            <div className={styles.projectBg}>
                <div className={styles.projectHead}>
                    <FontAwesomeIcon icon={faCircleCheck} className={styles.projectHeadIcon}></FontAwesomeIcon>
                    PROJECTS
                </div>

                <Row style={{ margin: '0' }}>
                    {projectData.map((data, i) => {
                        return (
                            <Col
                                key={data.id}
                                className={styles.project}
                            >
                                <article className={styles.card}>
                                    <div className={styles.inner}>
                                        <div className={styles.innerRow}>
                                            <div
                                                className={styles.projectPhoto}
                                            >
                                                <Slide
                                                    images={images}
                                                    i={i}
                                                ></Slide>
                                            </div>
                                            <div className={styles.projectInfo}>
                                                <div
                                                    className={
                                                        styles.projectTitle
                                                    }
                                                >
                                                    <img
                                                        src={
                                                            process.env
                                                                .PUBLIC_URL +
                                                            './static/images/projectImage/websiteTitle-icon.png'
                                                        }
                                                        className={
                                                            styles.navImg
                                                        }
                                                    ></img>
                                                    {data.Name}
                                                </div>
                                                <div
                                                    className={
                                                        styles.projectIntro
                                                    }
                                                >
                                                    <img
                                                        src={
                                                            process.env
                                                                .PUBLIC_URL +
                                                            './static/images/projectImage/websiteIntro-icon.png'
                                                        }
                                                        className={
                                                            styles.navImg
                                                        }
                                                    ></img>
                                                    {data.Intro}
                                                </div>
                                                <div>
                                                    {stack[i].map((stack) => {
                                                        return (
                                                            <div 
                                                                key={stack}
                                                                className={
                                                                    styles.projectStack
                                                                }
                                                            >
                                                                {stack}
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                                <div
                                                    className={
                                                        styles.projectPeriod
                                                    }
                                                >
                                                    {data.Period}
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.modalBg}>
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
