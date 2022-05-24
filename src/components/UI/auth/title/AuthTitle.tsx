import './styles/AuthTitle.scss'

interface TProps {
	title: string
}

const AuthTitle = (props:TProps) => {
	return(
		<h2 className='auth-title'>{props.title}</h2>
	)
}

export default AuthTitle