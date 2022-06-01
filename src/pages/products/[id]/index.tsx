import  { useEffect } from "react";
import { useRouter } from "next/router";
import { ROUTES } from "@utils/routes";

function index() {
	const router = useRouter();
    const { id, variantSku } = router.query;

	useEffect(() => {
        router.push(`${ROUTES.PRODUCT}/${id}/${variantSku}`);
	})

    return null
}

export default index;