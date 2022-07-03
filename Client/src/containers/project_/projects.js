import './projects.scss'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Row, Col } from 'react-bootstrap'
function Projects() {
    const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }
    return (
        <div>
            <div
                style={{
                    backgroundColor: '#72a1ec',
                    padding: '80px 0px',
                }}
            >
                <div>
                    <Slider {...settings}>
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
                                        <Row style={{width: '100%', margin:'0 auto' }}>
                                            <Col sm style={{height:'400px', border:'1px solid'}}>1</Col>
                                            <Col sm style={{height:'400px', border:'1px solid'}}>1</Col>
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
                    </Slider>
                </div>
            </div>
            {/* <div class="section full-height">
                    <input
                        class="modal-btn"
                        type="checkbox"
                        id="modal-btn"
                        name="modal-btn"
                    />
                    <label for="modal-btn">
                        Open Modal <i class="uil uil-expand-arrows"></i>
                    </label>
                    <div class="modal">
                        <div class="modal-wrap">
                            <p>
                                Contrary to popular belief, Lorem Ipsum is not
                                simply random text. It has roots in a piece of
                                classical Latin literature from 45 BC, making it
                                over 2000 years old.
                            </p>
                        </div>
                    </div>
                </div> */}
        </div>
    )
}

export default Projects
