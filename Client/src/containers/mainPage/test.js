import '../mainPage/test.css'
import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap'

const Test = () => {
    return (
        <div class="section full-height">
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
                        Contrary to popular belief, Lorem Ipsum is not simply
                        random text. It has roots in a piece of classical Latin
                        literature from 45 BC, making it over 2000 years old.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Test
