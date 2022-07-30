// import './modal.css'
// import { Carousel, Row, Col } from 'react-bootstrap'
// import { Explain } from './projectData'
// import {useState} from 'react'
// const Modal = (props) => {
//     // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
//     const { open, close } = props
//     const [explain, setExplain] = useState(Explain)

//     return (
//         // 모달이 열릴때 openModal 클래스가 생성된다.
//         <div className={open ? 'openModal modal' : 'modal'}>
//             {open ? (
//                 <section style={{ width: '95%' }}>
//                     <main style={{ height: 'auto' }}>
//                         {' '}
//                         <div
//                             style={{
//                                 width: '100%',
//                                 height: '700px',
//                                 overflow: 'auto',
//                             }}
//                         >
//                             <div
//                                 style={{
//                                     width: '95%',
//                                     border: '1px solid',
//                                     height: '1000px',
//                                     margin: '0 auto',
//                                     marginTop: '30px',
//                                 }}
//                             >
//                             {
//                                 explain[props.i].map(data => {
//                                     return(
//                                         <>
//                                         <div>{data}</div>
//                                         </>
//                                     )
//                                 })   
//                             }
//                             {props.i}
//                             </div>
//                         </div>
//                     </main>
//                     <div></div>
//                     <button
//                         className="close"
//                         onClick={close}
//                         style={{ display: 'block', margin: '0 auto' }}
//                     >
//                         close{' '}
//                     </button>
//                 </section>
//             ) : null}
//         </div>
//     )
// }

// export default Modal
