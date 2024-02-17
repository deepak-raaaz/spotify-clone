import React from 'react'

function DotsIcon(props) {
  return (
    <svg width={24} height={24} fill="none" {...props}>
  <path
    d="M5 12h.01H5zm7 0h.01H12zm7 0h.01H19zM6 12a1 1 0 11-2 0 1 1 0 012 0v0zm7 0a1 1 0 11-2 0 1 1 0 012 0v0zm7 0a1 1 0 11-2 0 1 1 0 012 0v0z"
    stroke={props.fill}
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>


  )
}

export default DotsIcon