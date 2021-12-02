import { useFormik } from "formik";
import React from "react";

export default function RegisterForm() {
	const validate = (values) => {
		const errors = {};

		if (!values.email) {
			errors.email = "Email is required";
		}

		if (!values.password) {
			errors.password = "Password id required";
		} else if (values.password.length < 8) {
			errors.password = "Password must be 8 characters or more ";
		} else if (values.password === "12345678") {
			errors.password = "Password must be not 12345678 ";
		}

		if (!values.repassword) {
			errors.repassword = "Re-password is required";
		} else if (values.password !== values.repassword) {
			errors.repassword = "Second password does not match";
		}

		return errors;
	};

	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
			repassword: "",
		},
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
		},

		validate,
	});

	return (
		<div>
			<br />
			<br />
			<br />
			<h1>Register</h1>

			<form onSubmit={formik.handleSubmit}>
				<label htmlFor="email">Email Address</label>
				<input
					onBlur={formik.handleBlur}
					onChange={formik.handleChange}
					value={formik.values.email}
					type="text"
					name="email"
				/>
				{formik.touched.email && formik.errors.email ? (
					<div className="error2">{formik.errors.email}</div>
				) : null}
				<label htmlFor="password">Password</label>
				<input
					onBlur={formik.handleBlur}
					onChange={formik.handleChange}
					value={formik.values.password}
					type="password"
					name="password"
				/>
				{formik.touched.password && formik.errors.password ? (
					<div className="error2">{formik.errors.password}</div>
				) : null}
				<label htmlFor="repassword">Password Again</label>
				<input
					onBlur={formik.handleBlur}
					onChange={formik.handleChange}
					value={formik.values.repassword}
					type="password"
					name="repassword"
				/>
				{formik.touched.repassword && formik.errors.repassword ? (
					<div className="error2">{formik.errors.repassword}</div>
				) : null}

				<button type="submit">Register</button>
			</form>
		</div>
	);
}
