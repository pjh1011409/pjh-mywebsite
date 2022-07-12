import './modal.css'
import { Row, Col } from 'react-bootstrap'
const Modal = (props) => {
    // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
    const { open, close, header } = props

    return (
        // 모달이 열릴때 openModal 클래스가 생성된다.
        <div className={open ? 'openModal modal' : 'modal'}>
            {open ? (
                <section style={{ width: '95%' }}>
                    <main style={{ height: 'auto' }}>
                        {' '}
                        <div style={{ height: '500px', overflow: 'auto' }}>
                            <div style={{ overflow: 'auto' }}>
                                Lorem ipsum dolor sit amet, consectetur adipisc
                                Quis hendrerit dolor magna eget est lorem ipsum
                                dolor sit. Volutpat odio facilisis mauris sit
                                amet massa. Lorem ipsum dolor sit amet,
                                consectetur adipisc Quis hendrerit dolor magna
                                eget est lorem ipsum dolor sit. Volutpat odio
                                facilisis mauris sit amet massa. Lorem ipsum
                                dolor sit amet, consectetur adipisc Quis
                                hendrerit dolor magna eget est lorem ipsum dolor
                                sit. Volutpat odio facilisis mauris sit amet
                                massa. Lorem ipsum dolor sit amet, consectetur
                                adipisc Quis hendrerit dolor magna eget est
                                lorem ipsum dolor sit. Volutpat odio facilisis
                                mauris sit amet massa. Lorem ipsum dolor sit
                                amet, consectetur adipisc Quis hendrerit dolor
                                magna eget est lorem ipsum dolor sit. Volutpat
                                odio facilisis mauris sit amet massa. Lorem
                                ipsum dolor sit amet, consectetur adipisc Quis
                                hendrerit dolor magna eget est lorem ipsum dolor
                                sit. Volutpat odio facilisis mauris sit amet
                                massa. Lorem ipsum dolor sit amet, consectetur
                                adipisc Quis hendrerit dolor magna eget est
                                lorem ipsum dolor sit. Volutpat odio facilisis
                                mauris sit amet massa. Lorem ipsum dolor sit
                                amet, consectetur adipisc Quis hendrerit dolor
                                magna eget est lorem ipsum dolor sit. Volutpat
                                odio facilisis mauris sit amet massa. Lorem
                                ipsum dolor sit amet, consectetur adipisc Quis
                                hendrerit dolor magna eget est lorem ipsum dolor
                                sit. Volutpat odio facilisis mauris sit amet
                                massa. dolor sit. Volutpat odio facilisis mauris
                                sit amet massa. Lorem ipsum dolor sit amet,
                                consectetur adipisc Quis hendrerit dolor magna
                                eget est lorem ipsum dolor sit. Volutpat odio
                                facilisis mauris sit amet massa.
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

export default Modal
