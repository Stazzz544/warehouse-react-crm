import './styles/LoaderSpinner.scss'
import loaderImg from '../../../img/gif/loader.svg'

const LoaderSpinner = () => {

	document.body.style.overflow = "hidden";

	return(
		<div className="loader-wrapper">
			<div className="loader__img-wrapper">
				<img  className="loader__img" src={loaderImg} alt="loader.gif" />
			</div>
		</div>
	)
}

export default LoaderSpinner