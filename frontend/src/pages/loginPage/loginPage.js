// ----------------react & hooks-------------------------------------
import React, {useContext} from 'react'
// ----------------style & css---------------------------------------
import './login.css'
// ----------------components & data---------------------------------
import {Footer, LoginRecordHeader} from 'components/common'
//------------------authentication(utils & context)---------------------------
import AuthContext from 'context/AuthContext'

function LoginPage() {
    let {loginUser} = useContext(AuthContext)
    
    return (
        <>
            <LoginRecordHeader></LoginRecordHeader>
            <div style={{marginTop:'300px'}}>
            <form onSubmit={loginUser}>
                <input type="text" name="username" placeholder="Enter Username" />
                <input type="password" name="password" placeholder="Enter Password" />
                <input type="submit"/>
            </form>
        </div>
            <Footer></Footer>
        </>
    )
}

export default LoginPage
