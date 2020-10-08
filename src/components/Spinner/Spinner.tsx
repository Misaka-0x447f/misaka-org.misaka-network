import React from 'react'
import spinner from '../../assets/spinner.svg'

export const Spinner = ({ visible = false, size = 24 }) => {
  return (
    <div>
      <img src={spinner} alt="spinner" style={{ display: visible ? 'block' : 'none', width: size }}/>
    </div>
  )
}
