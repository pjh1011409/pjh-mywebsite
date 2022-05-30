import Header from '../../components/common/Header/header'
import { Form, Button } from 'react-bootstrap'
import './login.scss'
function Login() {
    return (
        <div>
            <Header></Header>

            <div class="pages">
                <input id="one" name="trigger" type="radio"></input>
                <input id="two" name="trigger" type="radio"></input>
                <input id="three" name="trigger" type="radio"></input>
                <input id="four" name="trigger" type="radio"></input>

                <div class="pages_page">
                    <div class="pages_page__inner">
                        첫번째(파랑색)
                        <div class="content"></div>
                    </div>
                </div>

                <div class="pages_page">
                    <div class="pages_page__inner">
                        두번째(갈색)
                        <div class="control next">
                            <label for="two"></label>
                        </div>
                    </div>
                </div>

                <div class="pages_page">
                    <div class="pages_page__inner">
                        세번째(살색)
                        <div class="control">
                            <label for="one"></label>
                        </div>
                    </div>
                </div>

                <div class="pages_page">
                    <div class="pages_page__inner">
                        네번째(하늘색)
                        <div class="control next">
                            <label for="three"></label>
                        </div>
                        <div class="content"></div>
                    </div>
                </div>

                <div class="pages_page">
                    <div class="pages_page__inner">
                        다섯번째(초록색)
                        <div class="control">
                            <label for="two"></label>
                        </div>
                    </div>
                </div>

                <div class="pages_page">
                    <div class="pages_page__inner">마지막페이지(연보라)</div>
                </div>
            </div>

            {/* <div style={{ width: '50%', margin: '0 auto' }}>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>{' '}
            </div> */}
        </div>
    )
}

export default Login
