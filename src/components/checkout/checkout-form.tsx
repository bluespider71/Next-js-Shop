import Input from "@components/ui/input";
import { useForm } from "react-hook-form";
import TextArea from "@components/ui/text-area";
import SearchableSelect from "@components/ui/searchable-select/searchable-select";
import { useCheckoutMutation } from "@framework/checkout/use-checkout";
import { CheckBox } from "@components/ui/checkbox";
import Button from "@components/ui/button";
import Router from "next/router";
import { ROUTES } from "@utils/routes";
import { useTranslation } from "next-i18next";
import {
	getProvinces,
	getCitiesAndParishes,
	getCoverageCourier,
	getCoverageTerminal,
} from "./provinces";
import { useState, useEffect } from "react";

type CourierData = {
	id: string;
	parishId: string;
	provinceId: string;
	name: string;
	base_price: number;
	base_weight: number;
	aditional_kg: number;
	address: string;
	phone_number: string;
};

interface CheckoutInputType {
	firstName: string;
	lastName: string;
	phone: string;
	phone2: string;
	email: string;
	save: boolean;
	note: string;
	shippingOption: string;
	provinceOption: string;
	cityOption: string;
	parishOption: string;
	neighborhood: string;
	houseColor: string;
	crossStreet: string;
	principalStreet: string;
	courier: string;
	terminal: string;
}
const shippingOptions = [
	{ id: "forms:shipping-option-home", name: "forms:shipping-option-home" },
	{
		id: "forms:shipping-option-courier",
		name: "forms:shipping-option-courier",
	},
	{ id: "forms:shipping-option-bus", name: "forms:shipping-option-bus" },
	{
		id: "forms:shipping-option-guayaquil",
		name: "forms:shipping-option-guayaquil",
	},
];
const provincesData = getProvinces();
const CheckoutForm: React.FC = () => {
	const [provinces, setProvinces] = useState(provincesData);
	const [province, setProvince] = useState("");
	const [shipping, setShipping] = useState("");
	const [disableOptions, setDisableOptions] = useState(true);
	const [cities, setCities] = useState<{ id: string; name: string }[]>([]);
	const [parishes, setParishes] = useState<{ id: string; name: string }[]>([]);
	const [coverageCourier, setCoverageCourier] = useState<
		{ id: string; name: string }[]
	>([]);
	const [coverageTerminal, setCoverageTerminal] = useState<
		{ id: string; name: string }[]
	>([]);
	const [city, setCity] = useState("");
	const [parish, setParish] = useState("");
	const { t } = useTranslation();
	const { mutate: updateUser, isLoading } = useCheckoutMutation();
	const {
		register,
		handleSubmit,
		formState: { errors },
		getValues,
		setValue,
	} = useForm<CheckoutInputType>({
		defaultValues: {
			firstName: "rangarirai",
			lastName: "zawe",
			phone: "01234567",
			email: "nakaramusic@gmail.com",
			save: true,
		},
	});

	function onSubmit(input: CheckoutInputType) {
		console.log(input);
		updateUser(input);
		Router.push(ROUTES.ORDER);
	}

	function handleShippingOptions(value: string) {
		setShipping(value);
	}
	function handleProvinceOptions(value: string) {
		setProvince(value);
		setCity("");
		setParish("");
	}
	function handleCityOptions(value: string) {
		setCity(value);
	}
	function handleParishOptions(value: string) {
		setParish(value);
	}
	useEffect(() => {
		let tempC = getCoverageCourier(province, city, parish);
		let tempT = getCoverageTerminal(province, city, parish);
		setCoverageCourier(tempC);
		setCoverageTerminal(tempT);
	}, [province, city, parish]);
	useEffect(() => {
		if (province) {
			let temp = getCitiesAndParishes(province);
			setCities(temp.cities);
			setParishes(temp.parishes);
		} else {
			setCities([]);
			setParishes([]);
		}
	}, [province]);
	useEffect(() => {
		if (shipping === t("forms:shipping-option-guayaquil")) {
			return setDisableOptions(true);
		}
		if (shipping) {
			return setDisableOptions(false);
		} else {
			return setDisableOptions(true);
		}
	}, [shipping]);
	useEffect(() => {
		setShipping(getValues().shippingOption);
		console.log(getValues());
	}, [register]);

	return (
		<>
			<h2 className="text-lg md:text-xl xl:text-2xl font-bold text-heading mb-6 xl:mb-8">
				{t("text-shipping-address")}
			</h2>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="w-full mx-auto flex flex-col justify-center "
				noValidate
			>
				<div className="flex flex-col space-y-4 lg:space-y-5">
					<div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0">
						<Input
							labelKey="forms:label-first-name"
							{...register("firstName", {
								required: "forms:first-name-required",
							})}
							errorKey={errors.firstName?.message}
							variant="solid"
							className="w-full lg:w-1/2 "
							placeholderKey="forms:placeholder-first-name"
						/>
						<Input
							labelKey="forms:label-last-name"
							{...register("lastName", {
								required: "forms:last-name-required",
							})}
							errorKey={errors.lastName?.message}
							variant="solid"
							className="w-full lg:w-1/2 lg:ms-3 mt-2 md:mt-0"
							placeholderKey="forms:placeholder-last-name"
						/>
					</div>

					<div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0">
						<Input
							type="tel"
							labelKey="forms:label-phone"
							{...register("phone", {
								required: "forms:phone-required",
							})}
							errorKey={errors.phone?.message}
							variant="solid"
							className="w-full lg:w-1/2 "
							placeholderKey="forms:placeholder-phone-number"
						/>
						<Input
							type="tel"
							labelKey="forms:label-phone-2"
							{...register("phone2")}
							errorKey={errors.phone2?.message}
							variant="solid"
							className="w-full lg:w-1/2 lg:ms-3 mt-2 md:mt-0"
							placeholderKey="forms:placeholder-phone-2-number"
						/>
					</div>
					<Input
						type="email"
						labelKey="forms:label-email-star"
						{...register("email", {
							required: "forms:email-required",
							pattern: {
								value:
									/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
								message: "forms:email-error",
							},
						})}
						errorKey={errors.email?.message}
						variant="solid"
						className="w-full lg:w-1/2 "
						placeholderKey="forms:placeholder-email"
					/>
					<SearchableSelect
						labelKey="forms:label-shipping-option"
						{...register("shippingOption", {
							required: "forms:option-required",
						})}
						setFormValue={setValue}
						options={shippingOptions}
						handleOptions={handleShippingOptions}
						errorKey={errors.provinceOption?.message}
					/>
					{!disableOptions && (
						<>
							<SearchableSelect
								labelKey="forms:label-province-option"
								{...register("provinceOption", {
									...(disableOptions
										? { required: false }
										: { required: "forms:option-required" }),
								})}
								setFormValue={setValue}
								options={provinces}
								handleOptions={handleProvinceOptions}
								disabled={disableOptions}
								errorKey={errors.provinceOption?.message}
							/>
							{!parish && (
								<SearchableSelect
									labelKey="forms:label-city-option"
									{...register("cityOption", {
										...(disableOptions
											? { required: false }
											: { required: "forms:option-required" }),
									})}
									options={cities}
									disabled={disableOptions}
									errorKey={errors.cityOption?.message}
									setFormValue={setValue}
									handleOptions={handleCityOptions}
								/>
							)}

							{!city && (
								<SearchableSelect
									labelKey="forms:label-parish-option"
									{...register("parishOption", {
										...(disableOptions
											? { required: false }
											: { required: "forms:option-required" }),
									})}
									options={parishes}
									disabled={disableOptions}
									errorKey={errors.parishOption?.message}
									setFormValue={setValue}
									handleOptions={handleParishOptions}
								/>
							)}
						</>
					)}
					{shipping === t("forms:shipping-option-home") && (
						<>
							<div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0">
								<Input
									labelKey="forms:label-principal-street"
									{...register("principalStreet", {
										//		required: "forms:principal-street-required",
									})}
									errorKey={errors.principalStreet?.message}
									variant="solid"
									className="w-full lg:w-1/2 "
									//	placeholderKey="forms:placeholder-principal-street"
								/>

								<Input
									labelKey="forms:label-cross-street"
									{...register("crossStreet", {
										//		required: "forms:cross-street-required"
									})}
									errorKey={errors.crossStreet?.message}
									variant="solid"
									className="w-full lg:w-1/2 lg:ms-3 mt-2 md:mt-0"
									//	placeholderKey="forms:placeholder-cross-street"
								/>
							</div>
							<div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0">
								<Input
									labelKey="forms:label-neighborhood"
									{...register("neighborhood", {
										//	required: "forms: neighborhood-required",
									})}
									errorKey={errors.neighborhood?.message}
									variant="solid"
									className="w-full lg:w-1/2 "
									//placeholderKey="forms:placeholder-neighborhood"
								/>
								<Input
									labelKey="forms:label-house-color"
									{...register("houseColor", {
										//	required: "forms:house-color-required",
									})}
									errorKey={errors.houseColor?.message}
									variant="solid"
									className="w-full lg:w-1/2 lg:ms-3 mt-2 md:mt-0"
									//placeholderKey="forms:placeholder-house-color"
								/>
							</div>
						</>
					)}

					<div className="relative flex items-center ">
						<CheckBox
							labelKey="forms:label-save-information"
							{...register("save")}
						/>
					</div>
					{shipping === t("forms:shipping-option-home") && (
						<SearchableSelect
							setFormValue={setValue}
							options={coverageCourier}
							{...register("courier")}
						/>
					)}
					{shipping ===
						(t("forms:shipping-option-courier") && (
							<SearchableSelect
								setFormValue={setValue}
								options={coverageCourier}
								{...register("courier")}
							/>
						))}
					{shipping === t("forms:shipping-option-bus") && (
						<SearchableSelect
							setFormValue={setValue}
							options={coverageTerminal}
							{...register("terminal")}
						/>
					)}

					<TextArea
						labelKey="forms:label-order-notes"
						{...register("note")}
						placeholderKey="forms:placeholder-order-notes"
						className="relative pt-3 xl:pt-6"
					/>

					<div className="flex w-full">
						<Button
							className="w-full sm:w-auto"
							loading={isLoading}
							disabled={isLoading}
						>
							{t("common:button-place-order")}
						</Button>
					</div>
				</div>
			</form>
		</>
	);
};

export default CheckoutForm;
