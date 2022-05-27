export interface createNewProductSliceState {
	materialTypes: MaterialTypes[]
	isLoading: boolean
	error: string
	choisenTypeOfMaterial: string
	nameOfNewProductInputValue: string
}

export interface MaterialTypes  {
	id: number;
	material: string
}

