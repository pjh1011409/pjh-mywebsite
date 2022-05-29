import Header from '../../../../components/common/Header/header'
import {Row, Form, Col} from 'react-bootstrap'
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

function StudyDetail(props) {

  const [text, setText] = useState([])
  const onClickHandler = (event) => {
    axios.get('http://127.0.0.1:8000/review/').then((response)=>{
      setText([...response.data])
      // console.log(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
}
  const mounted = useRef(false);
 useEffect(()=>{
   if(!mounted.current){
     mounted.current = true;
     onClickHandler();

   }
   else{
    console.log('랜더링 될때마다 실행');
    console.log(text);
    
   }
 },[text])

  return (
    
    <>
        <Header></Header>

        {text.map((e) => (
                <div key={e.id}>
                    {' '}
                    <div className="list" >
                        <span>
                            {e.id}번, {e.title}, {e.content}, {e.update_at}
                        </span>
                    </div>
                </div>
            ))}    </>
  );
}

export default StudyDetail