import * as React from 'react'
import Head from 'next/head'
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
	const [status, setStatus] = React.useState<string>('login')
	const [badResponse, setBadResponse] = React.useState<boolean>(false)
	const [otpFail, setOtpFail] = React.useState<boolean>(false)
	const [emptyField, setEmptyField] = React.useState<boolean>(false)
	const [loginStatus, setLoginStatus] = React.useState<boolean>(false)
	const [userExists, setUserExists] = React.useState<boolean>(false)
	//OTP screen page
	const [inputRefs, setInputRefs] = React.useState<any[]>([])
	const [valuesOTP, setValuesOTP] = React.useState<string[]>([])
	const inputLength: number = 6

	const handleChangeOTP = (event: any, index: number) => {
		event.preventDefault()

		if (event.target.value.length > 1) return

		let updatedValue = [...valuesOTP]
		updatedValue[index] = event.target.value
		setValuesOTP(updatedValue)
		if (inputLength > index + 1 && event.target.value !== '')
			inputRefs[index + 1].current.focus()
	}

	React.useEffect(() => {
		setInputRefs((inputRef) =>
			Array(inputLength)
				.fill(null)
				.map((_, i) => inputRef[i] || React.createRef())
		)

		setValuesOTP((value) => Array(inputLength).fill(''))
	}, [])

	/* async function () {
		const LoginEmail = {
			email: values.email
		}
		axios.post('https://192.168.1.2:8000:auth/login', LoginEmail)
		.then(res){res.data = OTP, res.status = 201 }
	} */
	//request otp
	const submitData = async function () {
		if (values.email && values.password) {
			const newData = {
				email: values.email
			}
			setLoading(true)
			setUserExists(false)
			setBadResponse(false)
			try {
				await axios
					.post('http://192.168.1.2:8000/auth/message', newData)
					.then((res) => {
						console.log((res.status = 201), res.data)
						setStatus('otp')
					})
			} catch (error) {
				setValues({ ...values, ['password']: '' })
				axios.isAxiosError(error)
				const err = error as AxiosError
				const errStatus = err.response?.status || 0

				if (errStatus === 401) {
					setUserExists(true)
				} else if ((errStatus > 402 && errStatus < 500) || errStatus === 0) {
					setBadResponse(true)
					console.error('Алдаа гарлаа')
				} else {
					console.error('Алдаа unknown')
				}
			}
			setLoading(false)
		} else {
			setEmptyField(true)
		}
	}
	/* 	const login = () => {
		axios
			.post('http://localhost:3001/auth/login', {
				email: values.email,
				password: values.password
			})
			.then((response) => {
				if (response.data.message) {
					setLoginStatus(false)
				} else {
					localStorage.setItem('token', response.data.token)
					setLoginStatus(true)
				}
			})
	} */

	//User Login
	const userLogin = async function () {
		setOtpFail(false)
		setLoading(true)
		const userData = {
			email: values.email,
			password: values.password,
			otp: parseInt(valuesOTP.join(''), 10)
		}
		try {
			await axios
				.post('http://192.168.1.2:8000/auth/message', userData)
				.then((res) => {
					setLoading(false)
					console.log(res.status, res.data)
					console.log('login successful')
					console.log(res.data.access_token)
					cookies.set('access_token', res.data.access_token, { path: '/' })
					Router.push('/user/profile')
				})
		} catch (error) {
			axios.isAxiosError(error)
			const err = error as AxiosError
			const errStatus = err.response?.status || 0
			if (errStatus === 400) {
				setOtpFail(true)
			} else if ((errStatus > 402 && errStatus < 500) || errStatus === 0) {
				console.error('bad response')
			} else {
				console.error('dddd unknown')
			}
		}
		setLoading(false)
	}

	if (status === 'login') {
		return (
			<Container maxWidth="xs" sx={{ minHeight: '60vh' }}>
				<Head>
					<title>
						{status === 'login'
							? 'Нэвтрэх | SEED.MN'
							: 'Бүртгэл баталгаажуулах | SEED.MN'}
					</title>
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
							error={
								emptyField === true || !valid.valid_password ? true : false
							}
							label="Нууц үг"
							helperText="Том жижиг үсэг, нэг тоо оруулсан байх ёстой"
							required
						/>
					</FormControl>
					<Button
						onClick={() => {
							submitData()
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
					{badResponse === true ? (
						<Typography
							variant="body2"
							sx={{ color: 'red', textAlign: 'center', mt: 2 }}
						>
							Бүртгэл үүсгэхэд алдаа гарлаа!
						</Typography>
					) : (
						''
					)}
					{emptyField === true ? (
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
						<Typography
							variant="body1"
							color="primary"
							component="a"
							sx={{ fontSize: '14px' }}
						>
							&nbsp;Энд дар.
						</Typography>
					</Box>
				</Box>
			</Container>
		)
	} else if (status === 'otp') {
		return (
			<Container
				maxWidth="sm"
				sx={{
					minHeight: '68vh',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center'
				}}
			>
				<Box
					component="form"
					noValidate
					autoComplete="off"
					sx={{
						border: '1px solid rgba(0,0,0,0.1)',
						mx: 'auto',
						p: 5
					}}
				>
					<Typography
						variant="h4"
						textAlign="center"
						fontWeight="bold"
						sx={{
							mb: 2
						}}
					>
						Имэйлээ шалгана уу!
					</Typography>
					<Typography
						variant="body2"
						textAlign="center"
						sx={{ fontSize: '14px' }}
					>
						<Typography
							variant="caption"
							sx={{
								fontWeight: 'bold',
								display: 'inline-block',
								fontSize: '14px',
								mr: '3px'
							}}
						>
							{values.email}
						</Typography>
						-руу илгээсэн 6 оронтой баталгаажуулах кодыг оруулна уу.
					</Typography>
					<Box
						sx={{
							textAlign: 'center',
							display: 'flex',
							py: 2,
							alignItems: 'center',
							justifyContent: 'center'
						}}
					>
						{valuesOTP.map((value: string, index: number) => (
							<FormControl
								key={index}
								sx={{
									display: 'inline-block',
									mr: 1,
									mt: 2
								}}
								variant="outlined"
							>
								<TextField
									sx={{
										maxHeight: '48px',
										maxWidth: '48px',
										textAlign: 'center',
										fontSize: '14px'
									}}
									autoFocus={index === 0 ? true : false}
									placeholder="-"
									value={value}
									onChange={(event) => handleChangeOTP(event, index)}
									inputRef={inputRefs[index]}
								/>
							</FormControl>
						))}
					</Box>
					<Button
						onClick={() => {
							userLogin()
						}}
						variant="contained"
						fullWidth
						size="medium"
						sx={{ mb: 2, mt: 1 }}
					>
						Баталгаажуулах
					</Button>
				</Box>
			</Container>
		)
	}
}
