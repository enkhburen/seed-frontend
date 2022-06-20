import * as Yup from 'yup'
import * as React from 'react'
import { useRouter } from 'next/router'
import { Form, Formik, useFormik } from 'formik'
//MUI
import {
	Box,
	Typography,
	FormControl,
	Button,
	Container,
	TextField
} from '@mui/material'
import FormHelperText from '@mui/material/FormHelperText'

interface FormValues {
	name: string
	email: string
	password: string
	passwordConfirm: string
	position: string
}

const initialValues: FormValues = {
	name: '',
	email: '',
	password: '',
	passwordConfirm: '',
	position: ''
}

const uppercaseRegex = /(?=.*[A-Z])/
const numericRegex = /(?=.*[0-9])/

export default function resetForm() {
	const Schema = Yup.object().shape({
		password: Yup.string().required('This field is required'),
		changepassword: Yup.string().when('password', {
			is: (val: string | any[]) => (val && val.length > 0 ? true : false),
			then: Yup.string().oneOf(
				[Yup.ref('password')],
				'Both password need to be the same'
			)
		})
	})
	const router = useRouter()
	const formik = useFormik({
		initialValues: {
			password: '',
			passwordConfirm: ''
		},
		validationSchema: Yup.object().shape({
			password: Yup.string()
				.required('Нууц үг оруулна уу')
				.min(8, 'Дор хаяж 8 тэмдэгт агуулсан байх ёстой')
				.matches(numericRegex, 'Тоо агуулсан байх ёстой!')
				.matches(uppercaseRegex, 'Багадаа 1 том үсэг агуулсан байх ёстой!'),
			passwordConfirm: Yup.string()
				.oneOf([Yup.ref('Нууц үг'), null], 'Нууц үг таарахгүй байна')
				.required('Нууц үг оруулна уу')
				.label('confirm password')
		}),
		onSubmit: () => {
			router.push('/user/profile')
		}
	})

	return (
		<Container maxWidth="sm">
			<Box
				component="form"
				autoComplete="off"
				sx={{
					border: '1px solid rgba(0,0,0,0.1)',
					borderRadius: '2px',
					mx: 'auto',
					py: 3,
					px: 5
				}}
			>
				<Typography
					variant="h3"
					component="h1"
					sx={{ mb: 2, fontSize: '24px' }}
				>
					Нууц үг шинэчлэх
				</Typography>
				<p>Дор хаяж 6 тэмдэгтийн урттай нууц үг оруулна уу.</p>

				{/* Password Confirmation Section  */}

				<FormControl sx={{ mb: 2 }} fullWidth>
					<TextField
						name="password"
						error={Boolean(formik.touched.password && formik.errors.password)}
						onBlur={formik.handleBlur}
						onChange={formik.handleChange}
						helperText={formik.touched.password && formik.errors.password}
						value={formik.values.password}
						type="password"
						size="small"
						label="Нууц үг"
					/>
				</FormControl>
				<FormControl sx={{ mb: 2 }} fullWidth>
					<TextField
						name="passwordConfirm"
						size="small"
						type="password"
						label="Нууц үг"
						error={Boolean(formik.touched.password && formik.touched.password)}
						helperText={formik.touched.password && formik.touched.password}
						onChange={formik.handleChange}
					/>
				</FormControl>

				<Button
					type="submit"
					fullWidth
					variant="contained"
					color="primary"
					disabled={!(formik.isValid && formik.dirty)}
				>
					Хадгалах
				</Button>
			</Box>
		</Container>
	)
}
