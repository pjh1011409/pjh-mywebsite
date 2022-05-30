import Header from '../../components/common/Header/header'
import { Form, Button } from 'react-bootstrap'
import './login.scss'

import styled from 'styled-components';
import Middle from './Middle';
import Side from './Sid';


const MainDiv = styled.div`
  margin: 3rem 5rem;
`

const ContentDiv = styled.div`
  width: 100%;
  display: flex;
`

function Login() {
    return (
        <div>
            <Header></Header>


            <MainDiv>
      <ContentDiv>
        <Middle />
        <Side />
      </ContentDiv>
    </MainDiv>








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
