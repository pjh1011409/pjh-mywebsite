import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
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
                        
                            <div
                            key={img}
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
                        
                    )
                })}
            </Slider>
        </>
    )
}

export default Slide