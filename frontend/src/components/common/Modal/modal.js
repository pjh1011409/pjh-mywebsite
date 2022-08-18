import { Explain } from '../../../data/projectData'
import { useState, useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons'

import styles from './modal.module.css'

function Modal(props) {
    // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
    const { open, close } = props
    const [explain, setExplain] = useState(Explain)
    const wrapperRef = useRef()

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    })
    const handleClickOutside = (event) => {
        if (wrapperRef && !wrapperRef.current.contains(event.target)) {
            document.body.style.overflow = 'unset'

            props.setModalOpen(false)
        } else {
            props.setModalOpen(true)
        }
    }

    return (
        // 모달이 열릴때 openModal 클래스가 생성된다.

        <div
            className={open ? `${styles.modal}` : null}
            ref={wrapperRef}
        >
            {open ? (
                <section className={styles.modalSection}>
                     <div className={styles.close} onClick={close}>
                     <FontAwesomeIcon
                        icon={faCircleXmark}
                        size= '2x'
                    ></FontAwesomeIcon>
                    </div>
                    <main className={styles.modalMain}>
                        {' '}
                        <div className={styles.inner1}>
                            <div className={styles.inner2}>
                                <h1>PJH MyWebSite</h1>
                                <p>개인 포트폴리오 사이트입니다. 필자에 대한 개인적인 정보와 커리어가 담긴 사이트이며, 더하여 개발스택, CS지식, 면접, 회고 등의 여러 글들을 게시할 수 있는 개인 블로그를 탑재하고 있습니다.</p>
                                {/* {explain[props.modalId].map((data) => {
                                    return (
                                        
                                            <div key={data}>{data}</div>
                                        
                                    )
                                })} */}
                                {explain[props.id]}
                            </div>
                        </div>
                    </main>
                   
                </section>
            ) : null}
        </div>
    )
}

export default Modal