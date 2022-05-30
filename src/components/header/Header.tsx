import { Link } from "react-router-dom";
import './styles/Header.scss'
import userIcon from '../../img/user/user-login-avatar.svg'
import Navigation from "../navigation/Navigation";

const Header = () => {
	return(
		<header className='header'>
			<Link className="header__profile" to='./profile'>
				<img className="header__profile-img" src={userIcon} alt="" />
			</Link>
			<Navigation/>
		</header>
	)
}

export default Header