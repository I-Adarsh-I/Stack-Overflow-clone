import React from 'react'
import "./avatar.css"

function Avatar({ children, px,py, backgroundColor, color, fontSize, borderRadius, cursor }) {
    const style ={
        padding: `${px} ${py}`,
        backgroundColor,
        color: color || "black",
        fontSize,
        textAlign: "center",
        borderRadius,
        cursor: cursor|| null
    }
  return (
    <div style = {style} className='username_first_letter'>
        { children }
    </div>
  )
}

export default Avatar
