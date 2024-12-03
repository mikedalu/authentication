import { FC } from "react";
interface Input {
	label: string;
	type: string;
	register: object;
}
const CustomInput: FC<Input> = ({ label, type, register }) => {
	return (
		<div className="mb-4">
			<label className="block mb-3">{label}</label>
			<input
				type={type || "text"}
				className="p-3 focus:ring-1 focus:ring-blue-500 outline-none border border-yellow-500"
				{...register}
			/>
		</div>
	);
};

export default CustomInput;
