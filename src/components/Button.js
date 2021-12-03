import propTypes from 'prop-types'
const Button=({color , text ,onClick})=>{


	return(
		<button onClick={onClick} style={{backgroundColor:color}} className='btn'>{text}</button>
		)

}


Button.propTypes={
	color:'steelblue' ,
}

Button.propTypes ={
	text:propTypes.string,

}
export default Button