
import React, { useRef, useState } from 'react'
import Footer from '../../components/common/Footer/footer'
function TestPage() {
  const targetElement = useRef();
  const scrollingTop = (event) => {
    const elmnt = targetElement;
    elmnt.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "start"
    });
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <p>lorem ipsum </p>
      <div style={{ height: "1000px", backgroundColor: "orange" }}>
        <h1>Example Form Tag </h1>
        <button id="btnAppear" onClick={scrollingTop}>
          Submit Scroll bottom
        </button>
      </div>
      dd
      <Footer ref={targetElement}>dd</Footer>
    </div>
  );
}

export default TestPage
