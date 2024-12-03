import { z } from "zod";

//structure of login data
export const loginSchema = z.object({
	email: z.string().email({ message: "Invalid emaiil" }),
	password: z
		.string({ message: "password must be provided" })
		.min(1, { message: "Password must be provided" })
		.min(3, { message: "length must be morethan 3 characters" }),
});
