import './styles/DirectoryTitle.scss'

type TProps = {
	title: string
}

const DirectoryTitle = (props: TProps) => {
	return(
		<h1 className='title'>{props.title}</h1>
	)
}

export default DirectoryTitle