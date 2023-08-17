import React from "react"
import { styled } from "styled-components"


const IconWrapper = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 2px solid #eaeaea;
  // background-color: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;

.icon-container {
  width: 80px;
  height: 80px;
  background-color: #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}


.icon {
  max-width:12%;
  min-width:10%;
  height:10%;
  padding: 12px;
  border: 2px solid #888888;
  border-radius:50%;
}
`

const Icons = ({ icon }) => {
  return (
    <IconWrapper>
      <div className="icon-container">
        {icon}
      </div>
    </IconWrapper>
  )
}

export default Icons