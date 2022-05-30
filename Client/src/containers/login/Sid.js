import React from "react"
import styled from "styled-components"
import { Link } from "react-scroll"

const SideDiv = styled.div`
  width: 10%;
  position: fixed;
  right: 5rem;
  margin-top: 70px;
  div {
    display: flex;
    flex-direction: column;
  }
`

const Side = () => {
  return (
    <SideDiv>
      <div>
        <Link to="1" spy={true} smooth={true}>
          <span>Day 1</span>
        </Link>
        <Link to="2" spy={true} smooth={true}>
          <span>Day 2</span>
        </Link>
        <Link to="3" spy={true} smooth={true}>
          <span>Day 3</span>
        </Link>
        <Link to="4" spy={true} smooth={true}>
          <span>Day 4</span>
        </Link>
      </div>
    </SideDiv>
  )
}

export default Side