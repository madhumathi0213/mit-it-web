import * as React from "react"
import { Link } from "gatsby"
import COLORS from "../theme/color"

const pageStyles = {
  width:'100%',
  backgroundColor:COLORS.textPinkLight
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}


const NotFoundPage = () => {
  return (
    <div style={pageStyles}>
      <h1 style={headingStyles}>Page not found</h1>
    </div>
  )
}

export default NotFoundPage

