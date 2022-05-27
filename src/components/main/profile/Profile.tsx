import { createDispatchHook } from 'react-redux'
import { logoutFirebase } from '../../../dal/firebase/autentification'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import { clearAllFields } from '../../../store/reducers/AutentificationSlice'
import ConfirmGreenBtn from '../../UI/buttons/confirmGreenBtn/ConfirmGreenBtn'
import DirectoryTitle from '../../UI/directoryTitle/DirectoryTitle'
import './styles/Profile.scss'

const Profile = () => {
	const dispatch = useAppDispatch()
	const {currentUser} = useAppSelector(state => state.AutentificationReducer)

	return(
		<div className='profile'>
			<DirectoryTitle title={'Личный кабинет'}/>
			<div className="profile__wrapper">
				<h2  className="profile__title">Здравствуйте {currentUser}!</h2>
				<div className="profile__logout-wrapper">
					<div className="profile__logout-discription">
						Для входа из учётной записи нажмите кнопку:
					</div>
					<ConfirmGreenBtn
					function={() => logoutFirebase(dispatch, clearAllFields)}
					discriptionText='выйти'
					/>
				</div>
			</div>
			

		</div>
	)
}

export default Profile