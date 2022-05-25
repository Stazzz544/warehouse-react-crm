import { Link } from "react-router-dom";
import './styles/Header.scss'
import userIcon from '../../img/user/user-login-avatar.svg'

const Header = () => {
	return(
		<header className='header'>
			<Link className="header__profile" to='./profile'>
				<img className="header__profile-img" src={userIcon} alt="" />
			</Link>
			<nav className="navigation">
				<Link className="navigation__link" to='./'>Главная</Link>
				<Link className="navigation__link" to='./issue-product'>Выдача</Link>
				<Link className="navigation__link" to='./admissio-product'>Поступление</Link>
				<Link className="navigation__link" to='./create-new-product'>Создание товара</Link>
				<Link className="navigation__link" to='./current-state-warehouse'>Все остатки</Link>
			</nav>
		</header>
	)
}

export default Header