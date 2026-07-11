import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({children,active,linkto}) => {
  return (
    <Link to={linkto} className={`w-fit text-center shadow-[0px_0px_1px_white] font-semibold rounded-md px-4 py-2 ${active?"bg-yellow-300 text-black":"bg-gray-900 text-white"} hover:scale-95`}>
        {children}
    </Link>
  )
}

export default Button
