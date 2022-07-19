import './projects.scss'

import { Carousel, Row, Col } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import Modal from './modal'
function Projects() {
  
  
    const [modalOpen, setModalOpen] = useState(false)

    const openModal = () => {
        document.body.style.overflow = "hidden";
        setModalOpen(true)
    }
    const closeModal = () => {
        document.body.style.overflow = "unset";
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
                <div>
                    <Carousel>
                        <Carousel.Item style={{ marginBottom: '50px' }}>
                            <div>
                                <article
                                    class="plan [ card ]"
                                    style={{
                                        margin: '0 auto',
                                        marginBottom: '30px',
                                        zIndex: '1',
                                    }}
                                >
                                    <div class="inner">
                                        <span class="pricing">
                                            <span>펫송완료</span>
                                        </span>

                                        <h2 class="title">애완패션 사이트</h2>
                                        <p class="info">
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipisc Quis hendrerit
                                            dolor magna eget est lorem ipsum
                                            dolor sit. Volutpat odio facilisis
                                            mauris sit amet massa.
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
                                                    border: '1px solid',
                                                }}
                                            >
                                                1
                                            </Col>
                                            <Col
                                                sm
                                                style={{
                                                    height: '400px',
                                                    border: '1px solid',
                                                }}
                                            >
                                                1
                                                <button class='modalBtn' onClick={openModal}>모달팝업</button>
                            <Modal
                                open={modalOpen}
                                close={closeModal}
                            >
                             
                               
                            </Modal>{' '}
                                            </Col>
                                        </Row>
                                    </div>
                                    
                                </article>
                            </div>
                          
                            
                        </Carousel.Item>

                        <Carousel.Item style={{ marginBottom: '50px' }}>
                            <div>
                                <article
                                    class="plan [ card ]"
                                    style={{
                                        margin: '0 auto',
                                        marginBottom: '30px',
                                        zIndex: '1',
                                    }}
                                >
                                    <div class="inner">
                                        <span class="pricing">
                                            <span>펫송완료</span>
                                        </span>

                                        <h2 class="title">애완패션 사이트</h2>
                                        <p class="info">
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipisc Quis hendrerit
                                            dolor magna eget est lorem ipsum
                                            dolor sit. Volutpat odio facilisis
                                            mauris sit amet massa.
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
                                                    border: '1px solid',
                                                }}
                                            >
                                                1
                                            </Col>
                                            <Col
                                                sm
                                                style={{
                                                    height: '400px',
                                                    border: '1px solid',
                                                }}
                                            >
                                                1
                                            </Col>
                                        </Row>
                                    </div>
                                </article>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item style={{ marginBottom: '50px' }}>
                            <div>
                                <article
                                    class="plan [ card ]"
                                    style={{
                                        margin: '0 auto',
                                        marginBottom: '30px',
                                        zIndex: '1',
                                    }}
                                >
                                    <div class="inner">
                                        <span class="pricing">
                                            <span>펫송완료</span>
                                        </span>

                                        <h2 class="title">애완패션 사이트</h2>
                                        <p class="info">
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipisc Quis hendrerit
                                            dolor magna eget est lorem ipsum
                                            dolor sit. Volutpat odio facilisis
                                            mauris sit amet massa.
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
                                                    border: '1px solid',
                                                }}
                                            >
                                                1
                                            </Col>
                                            <Col
                                                sm
                                                style={{
                                                    height: '400px',
                                                    border: '1px solid',
                                                }}
                                            >
                                                1
                                            </Col>
                                        </Row>
                                    </div>
                                </article>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default Projects

{
    /* <button onClick={openModal}>모달팝업</button>
<Modal
    open={modalOpen}
    close={closeModal}
    header="Modal heading"
>
    리액트 함수형 모달 팝업창입니다. 쉽게 만들 수
    있어요. 같이 만들어봐요!
</Modal> */
}

{
    /* <Slider {...settings}>
                        <div>
                            <article
                                class="plan [ card ]"
                                style={{
                                    margin: '0 auto',
                                    marginBottom: '30px',
                                    zIndex: '1',
                                }}
                            >
                                <div class="inner">
                                    <span class="pricing">
                                        <span>펫송완료</span>
                                    </span>

                                    <h2 class="title">애완패션 사이트</h2>
                                    <p class="info">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisc Quis hendrerit dolor magna eget
                                        est lorem ipsum dolor sit. Volutpat odio
                                        facilisis mauris sit amet massa.
                                    </p>
                                    <Row
                                        style={{
                                            width: '100%',
                                            margin: '0 auto',
                                        }}
                                    >
                                        <Col
                                            sm
                                            style={{
                                                height: '400px',
                                                border: '1px solid',
                                            }}
                                        >
                                            1
                                        </Col>
                                        <Col
                                            sm
                                            style={{
                                                height: '400px',
                                                border: '1px solid',
                                            }}
                                        >
                                            1
                                        </Col>
                                    </Row>
                                </div>
                            </article>
                        
                        </div>
                      
                        <div>
                            <h3>2</h3>
                        </div>
                        <div>
                            <h3>3</h3>
                        </div>
                        <div>
                            <h3>4</h3>
                        </div>
                        <div>
                            <h3>5</h3>
                        </div>
                        <div>
                            <h3>6</h3>
                        </div>
                    </Slider> */
}
