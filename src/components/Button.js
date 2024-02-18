import React from 'react'
import PropTypes from 'prop-types'

const Button = ({color, text,onClick}) => {
  return <button 
  onClick={onClick}
  style = {{backgroundColor : color}} className='btn'
  >{text}</button>
}

Button.defaultProps = {
    title : 'Button',
    color : 'steelblue'
}
Button.propTypes = {
    title : PropTypes.string,
    color : PropTypes.string,
}

export default Button
