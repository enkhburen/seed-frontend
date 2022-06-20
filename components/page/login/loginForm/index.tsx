import * as React from 'react'
import { useState } from 'react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
// 3rd party package
import * as Yup from 'yup'
import { useFormik, FormikProvider, yupToFormErrors } from 'formik'
//MUI
import {
	Box,
	Grid,
	Button,
	Typography,
	Divider,
	InputAdornment,
	IconButton
} from '@mui/material/'
import Checkbox from '@mui/material/Checkbox'
import FormControl from '@mui/material/FormControl'
import TextField from '@mui/material/TextField'
import Container from '@mui/material/Container'
import { Router, Visibility, VisibilityOff } from '@mui/icons-material'
interface State {
	password: string
	showPassword: boolean
}

export default function LoginForm() {
	const [values, setValues] = React.useState<State>({
		showPassword: false,
		password: ''
	})

	const handleClickShowPassword = () => {
		setValues({
			...values,
			showPassword: !values.showPassword
		})
	}

	const revealPassword =
		(prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
			setValues({ ...values, [prop]: event.target.value })
		}

	const handleMouseDownPassword = (
		event: React.MouseEvent<HTMLButtonElement>
	) => {
		event.preventDefault()
	}

	const router = useRouter()
	const formik = useFormik({
		initialValues: {
			email: '',
			password: ''
		},
		validationSchema: Yup.object({
			email: Yup.string()
				.email('Имэйл буруу байна')
				.max(255)
				.required('Имэйл оруулах шаардлагатай'),
			password: Yup.string().max(255).required('Нууц үг оруулна уу')
		}),
		onSubmit: () => {
			router.push('/user/profile')
		}
	})

	const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik

	return (
		<Container maxWidth="xs" sx={{ minHeight: '57.8vh' }}>
			<FormikProvider value={formik}>
				<Box
					autoComplete="off"
					component="form"
					noValidate
					sx={{
						border: '0.5px solid rgba(0,0,0,0.1)',
						py: 2,
						px: 4,
						mt: 'auto'
					}}
					onSubmit={handleSubmit}
				>
					<Typography variant="h4" sx={{ my: 2 }}>
						Нэвтрэх
					</Typography>
					<FormControl sx={{ mb: 2, fontSize: '9px' }} fullWidth>
						<TextField
							id="email"
							{...getFieldProps('email')}
							error={Boolean(touched.email && errors.email)}
							helperText={touched.email && errors.email}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values.email}
							label="И мэйл"
							size="small"
							variant="outlined"
						/>
					</FormControl>
					<FormControl sx={{ mb: 4 }} fullWidth>
						<TextField
							id="password"
							value={values.password}
							onChange={revealPassword('password')}
							InputProps={{
								endAdornment: (
									<InputAdornment position="end">
										<IconButton
											edge="end"
											onClick={handleClickShowPassword}
											onMouseDown={handleMouseDownPassword}
										>
											{values.showPassword ? <VisibilityOff /> : <Visibility />}
										</IconButton>
									</InputAdornment>
								)
							}}
							error={Boolean(touched.password && errors.password)}
							helperText={touched.password && errors.password}
							size="small"
							label="Нууц үг"
							variant="outlined"
						/>
					</FormControl>
					<Button
						type="submit"
						variant="contained"
						size="large"
						disabled={formik.isSubmitting}
						fullWidth
						sx={{ fontSize: '12px' }}
					>
						Нэвтрэх
					</Button>
					<Grid
						container
						alignItems="center"
						justifyContent="space-between"
						display="flex"
					>
						<Box sx={{ mt: 1 }}>
							<Checkbox />
							<Typography variant="caption">Сануулах</Typography>
						</Box>
						<Typography
							href="/auth/forgot"
							component="a"
							sx={{ fontSize: '12px', mt: 1 }}
						>
							Нууц үгээ мартсан уу?
						</Typography>
					</Grid>
					<Divider sx={{ my: 2, fontSize: '14px' }}>Эсвэл</Divider>
					<Box textAlign="center">
						<Typography
							variant="body1"
							component="span"
							sx={{ fontSize: '14px' }}
						>
							Шинээр бүртгүүлэх бол?
						</Typography>
						<Typography
							variant="body1"
							color="primary"
							component="a"
							href="/auth/signup"
							sx={{ fontSize: '14px' }}
						>
							&nbsp;Энд дар.
						</Typography>
					</Box>
				</Box>
			</FormikProvider>
		</Container>
	)
}
