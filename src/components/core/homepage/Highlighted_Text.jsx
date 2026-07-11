import React from 'react'

const Highlighted_Text = ({text,gradient}) => {
  return (
    <span className={`${gradient?gradient:"bg-gradient-to-r from-sky-400 via-sky-500 to-blue-500"} bg-clip-text text-transparent font-bold p-1`}>
        {" "}
        {text}
    </span>
  )
}

export default Highlighted_Text
