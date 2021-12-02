import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import TextField from "./TextField";

export default function Signup() {
	const validation = Yup.object({
		firstName: Yup.string().max(15, "Must be 15 characters or less").required("First Name Required"),
		lastName: Yup.string().max(15, "Must be 15 characters or less").required("Last Name Required"),
		email: Yup.string().email("Email is invalid").required("Email is Required"),
		password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is Required"),
		confirmPassword: Yup.string()
			.oneOf([Yup.ref("password"), null], "Password must match")
			.required("Confirm password is Required"),
	});
	return (
		<Formik
			initialValues={{ firstName: "", lastName: "", email: "", password: "", confirmPassword: "" }}
			validationSchema={validation}
			onSubmit={(values) => {
				console.log(values);
			}}
		>
			{(formik) => (
				<div>
					<h1 className="my-4 font-weight-bold display-4">Sign Up</h1>
					{/* {console.log(formik.values)} */}
					<Form>
						<TextField label="First Name" name="firstName" type="text" />
						<TextField label="Last Name" name="lastName" type="text" />
						<TextField label="Email" name="email" type="email" />
						<TextField label="Password" name="password" type="password" />
						<TextField label="Confirm Password" name="confirmPassword" type="password" />

						<button className="btn btn-dark mt-3" type="submit">
							Submit
						</button>
						<button className="btn btn-danger mt-3 mx-3" type="reset">
							Reset
						</button>
					</Form>
				</div>
			)}
		</Formik>
	);
}
