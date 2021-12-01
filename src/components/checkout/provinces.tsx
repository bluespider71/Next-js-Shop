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

const COVERAGE_COURIER = [
	{
		id: "cobertura_1",
		cityId: "ciudad_Pichincha_1_ID",
		provinceId: "PichinchaID",
		name: "courier name test 1",
		base_price: 3.5,
		base_weight: 2, //kg
		aditional_kg: 2, //$
		address: "test address",
		phone_number: "test phone number",
	},
	{
		id: "cobertura_2",
		cityId: "ciudad_Pichincha_2_ID",
		provinceId: "PichinchaID",
		name: "courier name test 2",
		base_price: 3.5,
		base_weight: 2, //kg
		aditional_kg: 2, //$
		address: "test address",
		phone_number: "test phone number",
	},
	{
		//add some enough ProvinceId-ParishId or ProvinceId-CityId
		// combinations here in  order you can test
	},
	{
		id: "cobertura_2",
		parishId: "parroquia_Pichincha_1_id",
		provinceId: "PichinchaID",
		name: "courier name test p",
		base_price: 3.5,
		base_weight: 2, //kg
		aditional_kg: 2, //$
		address: "test address",
		phone_number: "test phone number",
	},
];

const COVERAGE_TERMINAL = [
	{
		id: "cobertura_1",
		cityId: "ciudad_Pichincha_1_ID",
		provinceId: "PichinchaID",
		name: "bus company name test",
		price_small_package: 2.5, //USD
		max_weight_small_package: 2, //kg
		price_medium_package: 4.5, //USD
		max_weight_medium_package: 4, //kg
		price_big_package: 8.5, //USD
		max_weight_big_package: 8, //kg
		address: "test address",
		phone_number: "test phone number",
	},
	{
		id: "cobertura_2",
		cityId: "ciudad_Pichincha_2_ID",
		provinceId: "PichinchaID",
		name: "bus company name test",
		price_small_package: 2.5, //USD
		max_weight_small_package: 2, //kg
		price_medium_package: 4.5, //USD
		max_weight_medium_package: 4, //kg
		price_big_package: 8.5, //USD
		max_weight_big_package: 8, //kg
		address: "test address",
		phone_number: "test phone number",
	},

	{
		id: "cobertura_3",
		parishId: "parroquia_Pichincha_1_ID",
		provinceId: "PichinchaID",
		name: "bus company name test",
		price_small_package: 2.5, //USD
		max_weight_small_package: 2, //kg
		price_medium_package: 4.5, //USD
		max_weight_medium_package: 4, //kg
		price_big_package: 8.5, //USD
		max_weight_big_package: 8, //kg
		address: "test address",
		phone_number: "test phone number",
	},
];

const USER_ADDRESSES = [
	{
		shipping_option: "Envío a domicilio",
		chosen_courier_Id: "courier_id",
		principal_street: "calle 1",
		secondary_Street: "calle 2",
		neighborhood_citadel: "barrio ejemplo",
		house_color: "amarilla",
		phone_number_1: "telefono 1",
		phone_number_2: "telefono 2",
		aditional_info: "Lorem Ipsum.....",
	},
	{
		shipping_option: "Cooperativa de Terminal Terrestre",
		chosen_bus_copmany_Id: "bus_company_id",
		phone_number_1: "telefono 1",
		phone_number_2: "telefono 2",
		aditional_info: "Lorem Ipsum.....",
	},
	{
		shipping_option: "Retiro de oficina",
		chosen_courier_Id: "courier_id",
		phone_number_1: "telefono 1",
		aditional_info: "Lorem Ipsum.....",
	},
];
export function getProvinces() {
	return PROVINCES_ARRAY.map((data) => ({
		id: data.id,
		name: data.name,
	}));
}
export function getCitiesAndParishes(province: string) {
	let temp = PROVINCES_ARRAY.filter(
		(data) => data.name.toLocaleLowerCase() === province.toLowerCase()
	);
	return { cities: temp[0].cities, parishes: temp[0].parishes };
}

export function getCoverageCourier(prov: string, city: string, parish: string) {
	let d = getIds(prov, city, parish);
	return COVERAGE_COURIER.filter(
		(data) =>
			data.parishId === d.parishId &&
			data.provinceId === d.provId &&
			data.cityId === d.cityId
	);
}
export function getCoverageTerminal(
	prov: string,
	city: string,
	parish: string
) {
	let d = getIds(prov, city, parish);
	return COVERAGE_TERMINAL.filter(
		(data) =>
			data.parishId === d.parishId &&
			data.provinceId === d.provId &&
			data.cityId === d.cityId
	);
}

function getIds(prov: string, city: string, parish: string) {
	let tempProv = PROVINCES_ARRAY.filter(
		(data) => data.name.toLocaleLowerCase() === prov.toLowerCase()
	);
	let tempCity =
		tempProv[0]?.cities.filter(
			(data) => data.name.toLocaleLowerCase() === city.toLowerCase()
		) || [];
	let tempParish =
		tempProv[0]?.parishes.filter(
			(data) => data.name.toLocaleLowerCase() === parish.toLowerCase()
		) || [];
	return {
		provId: tempProv[0]?.id,
		cityId: tempCity[0]?.id,
		parishId: tempParish[0]?.id,
	};
}
