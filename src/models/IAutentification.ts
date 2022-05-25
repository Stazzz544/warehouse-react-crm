export interface AutentificationState  {
	currentUser: string | null,
	rememberMe: boolean
	error: string,
	isLoading: boolean,
	userLoginInputValue: string,
	userPasswordInputValue: string,
	userEmailInputValue: string,
}