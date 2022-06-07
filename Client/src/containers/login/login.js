import React from 'react';
import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';

const Fullpage = () => (
  <ReactFullpage
    //fullpage options
    licenseKey = {'YOUR_KEY_HERE'}
    scrollingSpeed = {1000} /* Options here */

    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section" style={{backgroundColor:"red"}}>
            <button onClick={() => fullpageApi.moveTo(5)}>
              Click me to move down
            </button>
          </div>
          <div className="section" style={{backgroundColor:"blue"}}>
          <button onClick={() => fullpageApi.moveSectionDown()}>
              Click me to move down
            </button>
          </div>
          <div className="section" style={{backgroundColor:"green"}}>
            <p>Section 3</p>
            <button onClick={() => fullpageApi.moveSectionUp()}>
              Click me to move down
            </button>
          </div>
          <div className="section" style={{backgroundColor:"purple"}}>
            <p>Section 3</p>
            <button onClick={() => fullpageApi.moveSectionUp()}>
              Click me to move down
            </button>
          </div>
          <div className="section" style={{backgroundColor:"brown"}}>
            <p>Section 3</p>
            <button onClick={() => fullpageApi.moveSectionUp()}>
              Click me to move down
            </button>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);


export default Fullpage