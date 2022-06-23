import * as React from 'react'
import { useRouter } from 'next/router'
import * as Yup from 'yup'
import { useFormik } from 'formik'
//MUI
import {
	FormControl,
	Typography,
	TextField,
	Button,
	Divider,
	Container
} from '@mui/material'
import Box from '@mui/material/Box'

export default function forgotForm() {
	const router = useRouter()
	const formik = useFormik({
		initialValues: {
			email: ''
		},
		validationSchema: Yup.object({
			email: Yup.string()
				.required('Имэйл оруулах шаардлагатай')
				.max(255)
				.email('Имэйл буруу байна')
		}),
		onSubmit: () => {
			router.push('/auth/verify')
		}
	})

	return (
		<Container maxWidth="xs" sx={{ minHeight: '58.5vh', my: 10 }}>
			<Box
				component="form"
				noValidate
				autoComplete="off"
				sx={{
					border: '1px solid rgba(0,0,0,0.1)',
					mx: 'auto',
					py: 3,
					px: 4
				}}
				onSubmit={formik.handleSubmit}
			>
				<Typography
					variant="h5"
					component="h1"
					sx={{ mb: 3, textAlign: 'center' }}
				>
					Нууц үгээ мартсан уу?
				</Typography>
				<Divider sx={{ my: 1 }} />
				<Typography
					variant="caption"
					sx={{
						mb: 5,
						fontSize: '1,6rem'
					}}
				>
					Бид танд нууц үг шинэчлэх холбоосыг бүртгэлтэй имэйл хаягаар тань
					илгээх болно.
				</Typography>
				<FormControl sx={{ mb: 1 }} fullWidth>
					<TextField
						sx={{
							fontSize: '9px',
							my: 2
						}}
						id="email"
						error={Boolean(formik.touched.email && formik.errors.email)}
						helperText={formik.touched.email && formik.errors.email}
						onBlur={formik.handleBlur}
						onChange={formik.handleChange}
						value={formik.values.email}
						label="И мэйл"
						variant="outlined"
						size="small"
					/>
					<Button
						disabled={formik.isSubmitting}
						type="submit"
						variant="contained"
						size="large"
						fullWidth
						sx={{ fontSize: '12px' }}
					>
						Шинэ нууц үг авах
					</Button>
				</FormControl>

				<Button
					type="submit"
					variant="outlined"
					size="large"
					fullWidth
					href="/auth/login"
					sx={{ fontSize: '12px', mb: 2 }}
				>
					Буцах
				</Button>
			</Box>
		</Container>
	)
}
