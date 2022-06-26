import * as React from 'react'
import { useRouter } from 'next/router'
import {
	Box,
	Typography,
	FormControl,
	Button,
	Container,
	TextField
} from '@mui/material'

const uppercaseRegex = /(?=.*[A-Z])/
const numericRegex = /(?=.*[0-9])/

export default function resetForm() {
	const router = useRouter()
	const formik = useFormik({
		initialValues: {
			password: '',
			passwordConfirm: ''
		},
		validationSchema: Yup.object({
			password: Yup.string()
				.required('Нууц үг оруулна уу')
				.min(8, 'Дор хаяж 8 тэмдэгт агуулсан байх ёстой')
				.matches(numericRegex, 'Тоо агуулсан байх ёстой!')
				.matches(uppercaseRegex, 'Багадаа 1 том үсэг агуулсан байх ёстой!'),
			passwordConfirm: Yup.string()
				.oneOf([Yup.ref('нууц үг'), null], 'Нууц үг таарахгүй байна')
				.required('Нууц үг хийх шаардлагатай')
		}),
		onSubmit: () => {
			router.push('/')
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
				onSubmit={formik.handleSubmit}
			>
				<Typography
					variant="h3"
					component="h1"
					sx={{ mb: 2, fontSize: '24px' }}
				>
					Нууц үг шинэчлэх
				</Typography>
				<Typography variant="body2">
					Дор хаяж 6 тэмдэгтийн урттай нууц үг оруулна уу.
				</Typography>

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
						error={Boolean(
							formik.touched.passwordConfirm && formik.touched.passwordConfirm
						)}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.passwordConfirm}
						helperText={
							formik.touched.passwordConfirm && formik.errors.passwordConfirm
						}
					/>
				</FormControl>

				<Button
					type="submit"
					fullWidth
					variant="contained"
					color="primary"
					disabled={formik.isSubmitting}
				>
					Хадгалах
				</Button>
			</Box>
		</Container>
	)
}
