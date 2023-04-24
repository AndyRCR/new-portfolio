import './Button.css'

const Button = ({ children, type, style, ...props }) => {
	return (
		<button
			className={`button button-${type || 'main'}`}
			style={style}
			{...props}
		>
			{children}
		</button>
	)
}
export default Button
