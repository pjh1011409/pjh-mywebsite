import './projects.scss'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
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
                    marginBottom: '100px',
                    height: '800px',
                    backgroundColor: 'gray',
                }}
            >
                <div>
                    <h2
                        style={{
                            display: 'block',
                            textAlign: 'center',
                            padding: '20px',
                        }}
                    >
                        {' '}
                        Projects
                    </h2>
                    <Slider {...settings}>
                        <div>
                            <article
                                class="plan [ card ]"
                                style={{
                                    margin: '0 auto',
                                    marginBottom: '30px',
                                    zIndex:'1'
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
                                    <div style={{ height: '400px' }}>
                                        <div
                                            style={{
                                                height: '100%',
                                                width: '50%',
                                                float: 'left',
                                                border: '1px solid',
                                            }}
                                        ></div>
                                        <div
                                            style={{
                                                height: '100%',
                                                width: '50%',
                                                float: 'right',
                                                border: '1px solid',
                                            }}
                                        >
                                            <ul class="features">
                                                <li>
                                                    <span class="icon">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                            width="24"
                                                            height="24"
                                                        >
                                                            <path
                                                                fill="none"
                                                                d="M0 0h24v24H0z"
                                                            />
                                                            <path
                                                                d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                                                                fill="currentColor"
                                                            />
                                                        </svg>
                                                    </span>
                                                    <span>FE 2명 / BE 2명</span>
                                                </li>
                                                <li>
                                                    <span class="icon">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                            width="24"
                                                            height="24"
                                                        >
                                                            <path
                                                                fill="none"
                                                                d="M0 0h24v24H0z"
                                                            />
                                                            <path
                                                                d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                                                                fill="currentColor"
                                                            />
                                                        </svg>
                                                    </span>
                                                    <span>
                                                        2021.11 ~ 2022.02
                                                    </span>
                                                </li>
                                                <li>
                                                    <span class="icon">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                            width="24"
                                                            height="24"
                                                        >
                                                            <path
                                                                fill="none"
                                                                d="M0 0h24v24H0z"
                                                            />
                                                            <path
                                                                d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                                                                fill="currentColor"
                                                            />
                                                        </svg>
                                                    </span>
                                                    <span>
                                                        HTML CSS JS React.js
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
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
