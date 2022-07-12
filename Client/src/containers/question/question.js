import { Button, Collapse } from 'react-bootstrap'
import { useState } from 'react'
const Question = () => {
    const [letter,setLetter] = useState(['열기']);
    const [open, setOpen] = useState(false)
    const [show, setShow] = useState(letter);
    const openEvent = () =>{
        setOpen(!open);
        setShow();
        setLetter("열기")
    }
    return (
        <div style={{ paddingTop: '70px', height: '500px' }}>
            <div
                style={{
                    border: '1px solid',
                    width: '90%',
                    margin: '0 auto',
                    padding: '15px 15px',
                }}
            >
                <div
                    style={{
                        border: '1px solid',
                        width: '90%',
                        margin: '0 auto',
                        marginTop: '20px',
                    }}
                >
                    <h3 style={{margin:'10px'}}>Q. 안녕하세요</h3>
                  

                        <Button
                            onClick={openEvent}
                            aria-controls="example-collapse-text"
                            aria-expanded={open}
                            style={{width:'60px', fontSize:"12px", marginLeft:'35px'}}
                        >
                            {show}
                        </Button>
                        <Collapse in={open}>
                            <div id="example-collapse-text">
                                magna aliqua. Nisl tincidunt eget nullam non.
                                Quis hendrerit dolor magna eget est lorem ipsum
                                dolor sit. Volutpat odio facilisis mauris sit
                                amet massa. Commodo odio aenean sed adipiscing
                                diam donec adipiscing tristique. Mi eget mauris
                                pharetra et. Non tellus orci ac auctor augue.
                                Elit at imperdiet dui accumsan sit. Ornare arcu
                                dui vivamus arcu felis. Egestas integer eget
                                aliquet nibh praesent. In hac habitasse platea
                                dictumst quisque sagittis purus. Pulvinar
                                elementum integer enim neque volutpat ac.
                            </div>
                        </Collapse>
                </div>
                <div
                    style={{
                        border: '1px solid',
                        width: '90%',
                        margin: '0 auto',
                        marginTop: '20px',
                    }}
                >
                    dd
                </div>
                <div
                    style={{
                        border: '1px solid',
                        width: '90%',
                        margin: '0 auto',
                        marginTop: '20px',
                    }}
                >
                    dd
                </div>
                <div
                    style={{
                        border: '1px solid',
                        width: '90%',
                        margin: '0 auto',
                        marginTop: '20px',
                    }}
                >
                    dd
                </div>
            </div>
        </div>
    )
}

export default Question
