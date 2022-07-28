import './projects.scss'

import { Carousel, Row, Col, CarouselItem } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { Images } from './projectData'
import { ProjectData } from './projectData'
import './modal.css'
import { Explain } from './projectData'
import { useParams } from 'react-router-dom'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'

function Projects() {
    const [projectData, setProjectData] = useState(ProjectData)
    const [images, setImages] = useState(Images)
    const [modalOpen, setModalOpen] = useState(false)

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
            <div
                style={{
                    backgroundColor: '#72a1ec',
                    padding: '80px 0px',
                    height: 'auto',
                }}
            >
                <Row style={{ margin: '0' }}>
                    {projectData.map((data, i) => {
                        return (
                            <>
                                <Col
                                    sm={6}
                                    style={{
                                        minWidth: '500px',
                                        margin: '0 auto',
                                    }}
                                >
                                    <article
                                        class="plan [ card ]"
                                        style={{
                                            margin: '0 auto',
                                            marginBottom: '60px',
                                        }}
                                    >
                                        <div class="inner">
                                            <span class="pricing">
                                                <span>{data.Name}</span>
                                            </span>

                                            <p
                                                class="info"
                                                style={{
                                                    marginTop: '30px',
                                                    fontSize:
                                                        'clamp(1.2em, 1.0vw, 2rem)',
                                                }}
                                            >
                                                {data.Intro}
                                            </p>
                                            <Row
                                                style={{
                                                    width: '95%',
                                                    margin: '0 auto',
                                                }}
                                            >
                                                <Col
                                                    sm
                                                    style={{
                                                        height: '400px',
                                                        minWidth: '300px',
                                                    }}
                                                >
                                                    <Slide
                                                        images={images}
                                                        i={i}
                                                    ></Slide>
                                                </Col>
                                                <Col
                                                    sm
                                                    style={{
                                                        height: '400px',
                                                        fontSize: '25px',
                                                        paddingTop: '50px',
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            margin: '10px 5px',
                                                        }}
                                                    >
                                                        <FontAwesomeIcon
                                                            icon={faCircleCheck}
                                                            style={{
                                                                marginRight:
                                                                    '10px',
                                                            }}
                                                        />
                                                        {data.Period}
                                                    </div>
                                                    <div
                                                        style={{
                                                            margin: '10px 5px',
                                                        }}
                                                    >
                                                        <FontAwesomeIcon
                                                            icon={faCircleCheck}
                                                            style={{
                                                                marginRight:
                                                                    '10px',
                                                            }}
                                                        />
                                                        {data.Team}
                                                    </div>{' '}
                                                    <div
                                                        style={{
                                                            margin: '10px 5px',
                                                        }}
                                                    >
                                                        <FontAwesomeIcon
                                                            icon={faCircleCheck}
                                                            style={{
                                                                marginRight:
                                                                    '10px',
                                                            }}
                                                        />
                                                        {data.Stack}
                                                    </div>
                                                </Col>
                                            </Row>
                                            <div
                                                style={{
                                                    width: '100%',
                                                    display: 'flex',
                                                    ustifyContent: 'center',
                                                    marginTop: '10px',
                                                }}
                                            >
                                                <button
                                                    class="modalBtn"
                                                    onClick={() => {
                                                        openModal()
                                                        console.log(data.id)
                                                    }}
                                                >
                                                    Go To Detail{' '}
                                                </button>
                                                <Modal
                                                    open={modalOpen}
                                                    close={closeModal}
                                                    openModal={openModal}
                                                    modalOpen={modalOpen}
                                                    closeModal={closeModal}
                                                    id={data.id}
                                                ></Modal>{' '}
                                            </div>
                                        </div>
                                    </article>
                                </Col>
                            </>
                        )
                    })}
                </Row>
            </div>
        </div>
    )
}

function Modal(props) {
    // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
    const { open, close } = props
    const [explain, setExplain] = useState(Explain)

    return (
        // 모달이 열릴때 openModal 클래스가 생성된다.
        <div className={open ? 'openModal modal' : 'modal'}>
            {open ? (
                <section style={{ width: '95%' }}>
                    <main style={{ height: 'auto' }}>
                        {' '}
                        <div
                            style={{
                                width: '100%',
                                height: '700px',
                                overflow: 'auto',
                            }}
                        >
                            <div
                                style={{
                                    width: '80%',
                                    border: '1px solid',
                                    height: '1000px',
                                    margin: '0 auto',
                                    marginTop: '30px',
                                }}
                            >
                                {explain[props.id].map((data) => {
                                    return (
                                        <>
                                            <div>{data}</div>
                                        </>
                                    )
                                })}
                                {explain[props.id]}
                            </div>
                        </div>
                    </main>
                    <div></div>
                    <button
                        className="close"
                        onClick={close}
                        style={{ display: 'block', margin: '0 auto' }}
                    >
                        close{' '}
                    </button>
                </section>
            ) : null}
        </div>
    )
}

function Slide(props) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }
    return (
        <>
            <Slider {...settings} class="slick">
                {props.images[props.i].map((img) => {
                    return (
                        <>
                            <div
                                style={{
                                    width: '100%',
                                    height: '400px',
                                    margin: '0 auto',
                                }}
                            >
                                <img
                                    src={`./static/images/projectImage/${img}`}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        marginTop: '0px',
                                    }}
                                ></img>
                            </div>
                        </>
                    )
                })}
            </Slider>
        </>
    )
}

export default Projects
