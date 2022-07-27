import * as React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import axios, { AxiosError } from 'axios'
import Router from 'next/router'
import Cookies from 'universal-cookie'
//MUI
import {
	Box,
	Grid,
	Button,
	Typography,
	Divider,
	InputAdornment,
	IconButton,
	CircularProgress
} from '@mui/material/'

import Checkbox from '@mui/material/Checkbox'
import FormControl from '@mui/material/FormControl'
import TextField from '@mui/material/TextField'
import Container from '@mui/material/Container'
import { Visibility, VisibilityOff } from '@mui/icons-material'

const host = 'http://localhost:8000'

interface State {
	email: string
	password: string
	showPassword: boolean
	rememberMe: false
}

interface Validation {
	valid_email: boolean
	valid_password: boolean
}

export default function LoginForm(): any {
	const cookies = new Cookies()
	React.useEffect(() => {
		if (cookies.get('access_token') !== undefined) {
			Router.push('/user/profile')
		}
	})
	//State email and password
	const [values, setValues] = React.useState<State>({
		email: '',
		password: '',
		showPassword: false,
		rememberMe: false
	})
	const [valid, setValid] = React.useState<Validation>({
		valid_email: true,
		valid_password: true
	})

	//Regex
	const email = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
	const password = new RegExp(
		/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/
	)
	//Show and Hide password function
	const handleChange =
		(prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
			var regType = event.target.name
			var validInput: string = ''
			var reg = new RegExp(/$/)
			switch (regType) {
				case 'email':
					validInput = 'valid_email'
					reg = email
					break
				case 'password':
					validInput = 'valid_password'
					reg = password
					break
				default:
					break
			}
			event.target.value !== ''
				? setValid({ ...valid, [validInput]: reg.test(event.target.value) })
				: ''
			setValues({ ...values, [prop]: event.target.value })
		}

	const handleClickShowPassword = () => {
		setValues({
			...values,
			showPassword: !values.showPassword
		})
	}

	const handleMouseDownPassword = (
		event: React.MouseEvent<HTMLButtonElement>
	) => {
		event.preventDefault()
	}

	const [loading, setLoading] = React.useState<boolean>(false)
	const [badResponse, setBadResponse] = React.useState<boolean>(false)
	const [emptyField, setEmptyField] = React.useState<boolean>(false)

	//User Login
	const userLogin = async function () {
		if (valid.valid_email && valid.valid_password) {
			setLoading(true)
			const userData = {
				email: values.email,
				password: values.password
			}
			try {
				await axios.post(host + '/auth/signin', userData).then((res) => {
					setLoading(false)
					cookies.set('access_token', res.data.access_token, { path: '/' })
				})
			} catch (error) {
				axios.isAxiosError(error)
				const err = error as AxiosError
				const errStatus = err.response?.status || 0
				if (errStatus === 400) {
					setBadResponse(true)
				} else if (errStatus === 404) {
					setBadResponse(true)
				} else {
					console.log('unknown error')
				}
			}
			setLoading(false)
		} else {
			setBadResponse(true)
		}
	}

	return (
		<Container maxWidth="xs" sx={{ minHeight: '60vh' }}>
			<Head>
				<title>Нэвтрэх | SEED.MN</title>
			</Head>
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
			>
				<Typography variant="h4" sx={{ my: 2 }}>
					Нэвтрэх
				</Typography>
				<FormControl sx={{ mb: 2, fontSize: '9px' }} fullWidth>
					<TextField
						sx={{ fontSize: '14px' }}
						required={true}
						value={values.email}
						onChange={handleChange('email')}
						id="email"
						name="email"
						type="email"
						error={emptyField || !valid.valid_email}
						label="И мэйл"
						variant="outlined"
						InputLabelProps={{
							shrink: true
						}}
					/>
				</FormControl>
				<FormControl sx={{ mb: 4 }} fullWidth variant="outlined">
					<TextField
						InputLabelProps={{
							shrink: true
						}}
						sx={{ fonSize: '14px' }}
						id="password"
						name="password"
						type={values.showPassword ? 'text' : 'password'}
						value={values.password}
						onChange={handleChange('password')}
						InputProps={{
							endAdornment: (
								<InputAdornment position="end">
									<IconButton
										aria-label="toggle password visibility"
										onClick={handleClickShowPassword}
										onMouseDown={handleMouseDownPassword}
										edge="end"
									>
										{values.showPassword ? <VisibilityOff /> : <Visibility />}
									</IconButton>
								</InputAdornment>
							)
						}}
						variant="outlined"
						error={emptyField === true || !valid.valid_password ? true : false}
						label="Нууц үг"
						helperText="Том жижиг үсэг, нэг тоо оруулсан байх ёстой"
						required
					/>
				</FormControl>
				<Button
					onClick={() => {
						userLogin()
					}}
					variant="contained"
					size="large"
					fullWidth
					sx={{ fontSize: '12px' }}
				>
					{loading === true ? (
						<CircularProgress sx={{ color: 'white ' }} size={24} />
					) : (
						'Нэвтрэх'
					)}
				</Button>
				{emptyField || badResponse ? (
					<Typography
						variant="body2"
						sx={{ color: 'red', textAlign: 'center', mt: 2 }}
					>
						Имэйл эсвэл нууц үг буруу байна.
					</Typography>
				) : (
					''
				)}
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
					<Typography component="a" sx={{ fontSize: '12px', mt: 1 }}>
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
					<Link href="/auth/signup">
						<a>
							<Typography
								variant="body1"
								color="primary"
								sx={{ fontSize: '14px', textDecoration: 'underline' }}
							>
								&nbsp;Энд дар.
							</Typography>
						</a>
					</Link>
				</Box>
			</Box>
		</Container>
	)
}
