const PROVINCES_ARRAY = [
	{
		id: "PichinchaID",
		name: "Pichincha",
		cities: [
			{
				id: "ciudad_Pichincha_1_ID",
				name: "ciudad_Pichincha_1",
			},
			{
				id: "ciudad_Pichincha_2_ID",
				name: "ciudad_Pichincha_2",
			},
			{
				id: "ciudad_Pichincha_3_ID",
				name: "ciudad_Pichincha_3",
			},
		],
		parishes: [
			{
				id: "parroquia_Pichincha_1_id",
				name: "parroquia_Pichincha_1",
			},
			{
				id: "parroquia_Pichincha_2_id",
				name: "parroquia_Pichincha_2",
			},
			{
				id: "parroquia_Pichincha_3_id",
				name: "parroquia_Pichincha_3",
			},
		],
	},
	{
		id: "Santo_Domingo_de_los_Tsachilas_ID",
		name: "Santo Domingo de los Tsáchilas",
		cities: [
			{
				id: "ciudad_Santo_Domingo_de_los_Tsáchilas_1_id",
				name: "ciudad_Santo_Domingo_de_los_Tsáchilas_1",
			},
			{
				id: "ciudad_Santo_Domingo_de_los_Tsáchilas_2_id",
				name: "ciudad_Santo_Domingo_de_los_Tsáchilas_2",
			},
			{
				id: "ciudad_Santo_Domingo_de_los_Tsáchilas_3_id",
				name: "ciudad_Santo_Domingo_de_los_Tsáchilas_3",
			},
		],
		parishes: [
			{
				id: "parroquia_Santo_Domingo_de_los_Tsáchilas_1_id",
				name: "parroquia_Santo_Domingo_de_los_Tsáchilas_1",
			},
			{
				id: "parroquia_Santo_Domingo_de_los_Tsáchilas_2_id",
				name: "parroquia_Santo_Domingo_de_los_Tsáchilas_2",
			},
			{
				id: "parroquia_Santo_Domingo_de_los_Tsáchilas_3_id",
				name: "parroquia_Santo_Domingo_de_los_Tsáchilas_3",
			},
		],
	},
	{
		id: "Guayas_ID",
		name: "Guayas",
		cities: [
			{
				id: "ciudad_Guayas_1_id",
				name: "ciudad_Guayas_1",
			},
			{
				id: "ciudad_Guayas_2_id",
				name: "ciudad_Guayas_2",
			},
			{
				id: "ciudad_Guayas_3_id",
				name: "ciudad_Guayas_3",
			},
		],
		parishes: [
			{
				id: "parroquia_Guayas_1_id",
				name: "parroquia_Guayas_1",
			},
			{
				id: "parroquia_Guayas_2_id",
				name: "parroquia_Guayas_2",
			},
			{
				id: "parroquia_Guayas_3_id",
				name: "parroquia_Guayas_3",
			},
		],
	},
	{
		id: "Loja_ID",
		name: "Loja",
		cities: [
			{
				id: "ciudad_Loja_1_id",
				name: "ciudad_Loja_1",
			},
			{
				id: "ciudad_Loja_2_id",
				name: "ciudad_Loja_2",
			},
			{
				id: "ciudad_Loja_3_id",
				name: "ciudad_Loja_3",
			},
		],
		parishes: [
			{
				id: "parroquia_Loja_1_id",
				name: "parroquia_Loja_1",
			},
			{
				id: "parroquia_Loja_2_id",
				name: "parroquia_Loja_2",
			},
			{
				id: "parroquia_Loja_3_id",
				name: "parroquia_Loja_3",
			},
		],
	},
	{
		id: "Zamora_Chinchipe_ID",
		name: "Zamora Chinchipe",
		cities: [
			{
				id: "ciudad_Zamora_Chinchipe_1_id",
				name: "ciudad_Zamora_Chinchipe_1",
			},
			{
				id: "ciudad_Zamora_Chinchipe_2_id",
				name: "ciudad_Zamora_Chinchipe_2",
			},
			{
				id: "ciudad_Zamora_Chinchipe_3_id",
				name: "ciudad_Zamora_Chinchipe_3",
			},
		],
		parishes: [
			{
				id: "parroquia_Zamora_Chinchipe_1_id",
				name: "parroquia_Zamora_Chinchipe_1",
			},
			{
				id: "parroquia_Zamora_Chinchipe_2_id",
				name: "parroquia_Zamora_Chinchipe_2",
			},
			{
				id: "parroquia_Zamora_Chinchipe_3_id",
				name: "parroquia_Zamora_Chinchipe_3",
			},
		],
	},
	{
		id: "Pastaza_ID",
		name: "Pastaza",
		cities: [
			{
				id: "ciudad_Pastaza_Chinchipe_1_id",
				name: "ciudad_Pastaza_Chinchipe_1",
			},
			{
				id: "ciudad_Pastaza_Chinchipe_2_id",
				name: "ciudad_Pastaza_Chinchipe_2",
			},
			{
				id: "ciudad_Pastaza_Chinchipe_3_id",
				name: "ciudad_Pastaza_Chinchipe_3",
			},
		],
		parishes: [
			{
				id: "parroquia_Pastaza_Chinchipe_1_id",
				name: "parroquia_Pastaza_Chinchipe_1",
			},
			{
				id: "parroquia_Pastaza_Chinchipe_2_id",
				name: "parroquia_Pastaza_Chinchipe_2",
			},
			{
				id: "parroquia_Pastaza_Chinchipe_3_id",
				name: "parroquia_Pastaza_Chinchipe_3",
			},
		],
	},
];

export function getProvinces() {
	return PROVINCES_ARRAY.map((data) => ({
		id: data.id,
		name: data.name,
	}));
}
export function getCitiesAndParishes(province: string) {
	let temp = PROVINCES_ARRAY.filter((data) => data.name.toLocaleLowerCase() === province.toLowerCase());
	return { cities: temp[0].cities, parishes: temp[0].parishes };
}
