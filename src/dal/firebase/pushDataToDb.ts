import { getDatabase, ref, set } from "firebase/database";


export const createNewProductInDb = (productName: string, productType: string) => {
	const db = getDatabase();
	set(ref(db, `productCommon/products/${productType}/${Date.now()}`), {
		id: Date.now(),
		productName: productName,
	});
}
