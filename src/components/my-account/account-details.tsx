import Input from "@components/ui/input";
import Button from "@components/ui/button";
import Table from "@components/ui/table/table";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { fadeInTop } from "@utils/motion/fade-in-top";
import {
	useUpdateUserMutation,
	UpdateUserType,
} from "@framework/customer/use-update-customer";

import { useTranslation } from "next-i18next";

const defaultValues = {};
const AccountDetails: React.FC = () => {
	const { mutate: updateUser, isLoading } = useUpdateUserMutation();
	const { t } = useTranslation();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<UpdateUserType>({
		defaultValues,
	});
	function onSubmit(input: UpdateUserType) {
		updateUser(input);
	}

	return (
		<motion.div
			layout
			initial="from"
			animate="to"
			exit="from"
			//@ts-ignore
			variants={fadeInTop(0.35)}
			className={`w-full flex flex-col`}
		>
			<h2 className="text-lg md:text-xl xl:text-2xl font-bold text-heading mb-6 xl:mb-8">
				{t("common:text-account-details")}
			</h2>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="w-full mx-auto flex flex-col justify-center "
				noValidate
			>
				<div className="flex flex-col space-y-4 sm:space-y-5">
					<div className="flex flex-col sm:flex-row sm:space-s-3 space-y-4 sm:space-y-0">
						<Input
							labelKey="forms:label-first-name"
							{...register("firstName", {
								required: "forms:first-name-required",
							})}
							variant="solid"
							className="w-full sm:w-1/2"
							errorKey={errors.firstName?.message}
						/>
						<Input
							labelKey="forms:label-last-name"
							{...register("lastName", {
								required: "forms:last-name-required",
							})}
							variant="solid"
							className="w-full sm:w-1/2"
							errorKey={errors.lastName?.message}
						/>
					</div>
					<Input
						labelKey="forms:label-display-name"
						{...register("displayName", {
							required: "forms:display-name-required",
						})}
						variant="solid"
						errorKey={errors.displayName?.message}
					/>
					<div className="flex flex-col sm:flex-row sm:space-s-3 space-y-4 sm:space-y-0">
						<Input
							type="tel"
							labelKey="forms:label-phone"
							{...register("phoneNumber", {
								required: "forms:phone-required",
							})}
							variant="solid"
							className="w-full sm:w-1/2"
							errorKey={errors.phoneNumber?.message}
						/>
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
							variant="solid"
							className="w-full sm:w-1/2"
							errorKey={errors.email?.message}
						/>
					</div>
					<Table name="tableInfo" data={USER_ADDRESSES} />
					<div className="relative">
						<Button
							type="submit"
							loading={isLoading}
							disabled={isLoading}
							className="h-12 mt-3 w-full sm:w-32"
						>
							{t("common:button-save")}
						</Button>
					</div>
				</div>
			</form>
		</motion.div>
	);
};

export default AccountDetails;

const USER_ADDRESSES = [
	{
		id:"1",
		shipping_option: "Envío a domicilio",
		chosen_courier_Id: "courier_id",
		principal_street: "calle 1",
		secondary_Street: "calle 2",
		neighborhood_citadel: "barrio ejemplo",
		house_color: "amarilla",
		phone_number_1: "telefono 1",
		phone_number_2: "telefono 2",
		aditional_info: "Lorem Ipsum.....",
		chosen_bus_copmany_Id: "",
	},
	{
		id:"2",
		shipping_option: "Cooperativa de Terminal Terrestre",
		chosen_bus_copmany_Id: "bus_company_id",
		chosen_courier_Id: "",
		principal_street: "",
		secondary_Street: "",
		neighborhood_citadel: "",
		house_color: "",
		phone_number_1: "telefono 1",
		phone_number_2: "telefono 2",
		aditional_info: "Lorem Ipsum.....",
	},
	{
		id:"3",
		shipping_option: "Retiro de oficina",
		chosen_courier_Id: "courier_id",
		principal_street: "",
		secondary_Street: "",
		neighborhood_citadel: "",
		house_color: "",
		phone_number_1: "telefono 1",
		phone_number_2: "",
		aditional_info: "Lorem Ipsum.....",
		chosen_bus_copmany_Id: "",
	},
];
