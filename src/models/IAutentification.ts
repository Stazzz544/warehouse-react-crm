export interface AutentificationState  {
	currentUser: string | null,
	error: string,
	isLoading: boolean,
	userLoginInputValue: string,
	userPasswordInputValue: string,
	userEmailInputValue: string,
}