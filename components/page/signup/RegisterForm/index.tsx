import * as React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Router from 'next/router'
import axios, { AxiosError } from 'axios'
import Cookies from 'universal-cookie'

import {
	Box,
	FormControl,
	Grid,
	Typography,
	IconButton,
	Button,
	Divider,
	Container,
	InputAdornment,
	OutlinedInput,
	InputLabel
} from '@mui/material'

import CircularProgress from '@mui/material/CircularProgress'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'

interface State {
	first_name: string
	last_name: string
	email: string
	phoneNumber: string
	password: string
	showPassword: boolean
}

function clearConsole() {
	if (window.console) {
		console.clear()
	}
}
export default function Register(): any {
	const cookies = new Cookies()

	React.useEffect(() => {
		if (cookies.get('access_token') !== undefined) {
			Router.push('/user/profile')
		}
	})

	const [loading, setLoading] = React.useState<boolean>(false)
	const [status, setStatus] = React.useState<string>('signup')
	const [userExists, setUserExists] = React.useState<boolean>(false)
	const [badResponse, setBadResponse] = React.useState<boolean>(false)
	const [otpFail, setOtpFail] = React.useState<boolean>(false)

	const [values, setValues] = React.useState<State>({
		first_name: '',
		last_name: '',
		email: '',
		phoneNumber: '',
		password: '',
		showPassword: false
	})
	const [valid, setValid] = React.useState<boolean>(false)

	const cyrillic = new RegExp(
		/^[аАбБвВгГдДеЕёЁжЖзЗиИйЙкКлЛмМнНоОөӨпПрРсСтТуУүҮфФхХцЦчЧшШщЩъЪьЬыЫьЬэЭюЮяЯ]+$/
	)

	const number = new RegExp('[0-9]')
	const handleChange =
		(prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
			// setValid(reg.test(event.target.value))
			// console.log(valid)
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
	//otp
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
	// otp request
	const submitData = async function () {
		const newData = {
			email: values.email
		}
		setUserExists(false)
		setBadResponse(false)
		setLoading(true)
		try {
			await axios
				.post('http://localhost:8000/auth/message', newData)
				.then((res) => {
					console.log(res.status, res.data)
					setStatus('otp')
				})
		} catch (error) {
			setValues({ ...values, ['password']: '' })
			axios.isAxiosError(error)
			const err = error as AxiosError
			const errStatus = err.response?.status || 0
			// console.error(err.response?.status)
			// user exists handling
			if (errStatus === 401) {
				setUserExists(true)
			} //bad response handling
			else if ((errStatus > 402 && errStatus < 500) || errStatus === 0) {
				setBadResponse(true)
				console.error('Алдаа гарлаа')
			} else {
				console.error('Алдаа unknown')
			}
		}
		setLoading(false)
		// clearConsole()
	}
	// creating user
	const createUser = async function () {
		setOtpFail(false)
		setLoading(true)
		const userData = {
			first_name: values.first_name,
			last_name: values.last_name,
			email: values.email,
			phoneNumber: values.phoneNumber,
			password: values.password,
			otp: parseInt(valuesOTP.join(''), 10)
		}

		// console.log(userData)
		try {
			await axios
				.post('http://localhost:8000/auth/signup', userData)
				.then((res) => {
					setLoading(false)
					console.log(res.status, res.data)
					console.log('user created')
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
				console.error('Алдаа unknown')
			}
		}
		setLoading(false)
		// clearConsole()
	}

	{
		if (status === 'signup') {
			return (
				<Container maxWidth="xs" sx={{ minHeight: '70vh' }}>
					<Head>
						<title>
							{status === 'signup'
								? 'Шинэ бүртгэл үүсгэх | SEED.MN'
								: 'Бүртгэл баталгаажуулах | SEED.MN'}
						</title>
					</Head>
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
					>
						<Typography variant="h4" component="h1" sx={{ mb: 4 }}>
							Бүртгүүлэх
						</Typography>
						<Grid container spacing={2}>
							<Grid item xs={12} md={6}>
								<FormControl sx={{ mb: 1 }} variant="outlined">
									<InputLabel htmlFor="last_name" sx={{ fontSize: '14px' }}>
										Овог
									</InputLabel>
									<OutlinedInput
										sx={{ fontSize: '14px' }}
										id="last_name"
										name="last_name"
										label="Овог"
										value={values.last_name}
										type="text"
										onChange={handleChange('last_name')}
										inputComponent="input"
									/>
								</FormControl>
							</Grid>
							<Grid item xs={12} md={6}>
								<FormControl sx={{ mb: 1 }} variant="outlined">
									<InputLabel htmlFor="first_name" sx={{ fontSize: '14px' }}>
										Нэр
									</InputLabel>
									<OutlinedInput
										sx={{ fontSize: '14px' }}
										id="first_name"
										name="first_name"
										label="Нэр"
										type="text"
										value={values.first_name}
										onChange={handleChange('first_name')}
										error={!valid}
										inputComponent="input"
									/>
								</FormControl>
							</Grid>
							<Grid item xs={12} md={12}>
								<FormControl
									sx={{ mb: 1, minWidth: '100%' }}
									variant="outlined"
								>
									<InputLabel htmlFor="email" sx={{ fontSize: '14px' }}>
										И-мэйл
									</InputLabel>
									<OutlinedInput
										sx={{
											fontSize: '14px',
											borderBottom:
												userExists === true || badResponse === true
													? '2px solid red'
													: 'none'
										}}
										id="email"
										label="И-мэйл"
										type="email"
										value={values.email}
										onChange={handleChange('email')}
										inputComponent="input"
									/>
								</FormControl>
								{userExists === true ? (
									<Typography
										variant="body2"
										sx={{ color: 'red', textAlign: 'center', mt: 2 }}
									>
										Хэрэглэгч бүртгэлтэй байна!
									</Typography>
								) : (
									''
								)}
							</Grid>
							<Grid item xs={12} md={12}>
								<FormControl
									sx={{ mb: 1, minWidth: '100%' }}
									variant="outlined"
								>
									<InputLabel htmlFor="phone_number">Утасны дугаар</InputLabel>
									<OutlinedInput
										startAdornment={
											<InputAdornment position="start">+976</InputAdornment>
										}
										sx={{
											fontSize: '14px',
											borderBottom:
												badResponse === true ? '2px solid red' : 'none'
										}}
										id="phone_number"
										name="phone_number"
										placeholder="88xx99xx"
										type="tel"
										value={values.phoneNumber}
										onChange={handleChange('phoneNumber')}
										label="Утасны дугаар"
										inputComponent="input"
										required
									/>
								</FormControl>
							</Grid>
							<Grid item xs={12} md={12}>
								<FormControl
									sx={{ mb: 1, minWidth: '100%' }}
									variant="outlined"
								>
									<InputLabel htmlFor="password" sx={{ fontSize: '14px' }}>
										Нууц үг
									</InputLabel>
									<OutlinedInput
										sx={{
											fontSize: '14px',
											borderBottom:
												badResponse === true ? '2px solid red' : 'none'
										}}
										id="password"
										name="password"
										inputComponent="input"
										type={values.showPassword ? 'text' : 'password'}
										value={values.password}
										onChange={handleChange('password')}
										endAdornment={
											<InputAdornment position="end">
												<IconButton
													aria-label="toggle password visibility"
													onClick={handleClickShowPassword}
													onMouseDown={handleMouseDownPassword}
													edge="end"
												>
													{values.showPassword ? (
														<VisibilityOff />
													) : (
														<Visibility />
													)}
												</IconButton>
											</InputAdornment>
										}
										label="Нууц үг"
										required
									/>
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
								</FormControl>
							</Grid>
							<Grid item xs={12} md={12}>
								<Button
									disabled={loading === true ? true : false}
									onClick={() => {
										submitData()
									}}
									size="large"
									variant="outlined"
									sx={{
										width: '100%',
										backgroundColor: '#127F06',
										color: 'white',
										fontSize: '14px',
										'&:hover': {
											backgroundColor: '#005100'
										}
									}}
								>
									{loading === true ? (
										<CircularProgress sx={{ color: 'white' }} size={24} />
									) : (
										'Бүртгүүлэх'
									)}
								</Button>
							</Grid>
						</Grid>
						<Typography variant="subtitle1" sx={{ fontSize: '11px', mt: 3 }}>
							Бүртгүүлснээр та манай
							<Link href="/terms-of-use">
								<a>
									<Typography
										sx={{ fontSize: '11px' }}
										variant="caption"
										color="primary"
									>
										&nbsp;Үйлчилгээний Нөхцлийг&nbsp;
									</Typography>
									хүлээн зөвшөөрч байгаа болно.
								</a>
							</Link>
						</Typography>
						<Divider sx={{ fontSize: '12px', mt: 1 }}>Эсвэл</Divider>
						<Typography variant="subtitle1" sx={{ mt: 2, fontSize: '11px' }}>
							Таныг робот биш болохыг батлахын тулд энэ хуудас reCAPTCHA-р
							хамгаалагдсан.
						</Typography>
						<Link href="#">
							<a>
								<Typography variant="caption" color="primary">
									&nbsp;Дэлгэрэнгүй.
								</Typography>
							</a>
						</Link>
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
							px: 5,
							py: { xs: 5, md: 15 },
							textAlign: 'center'
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
						{otpFail === true ? (
							<Typography
								variant="body2"
								sx={{ color: 'red', textAlign: 'center', mt: 2 }}
							>
								Баталгаажуулах код буруу байна.
							</Typography>
						) : (
							''
						)}

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
									<OutlinedInput
										inputProps={{
											style: {
												padding: '12px 5px',
												textAlign: 'center'
											}
										}}
										sx={{
											maxHeight: '48px',
											maxWidth: '48px',
											textAlign: 'center',
											fontSize: '14px',
											border: otpFail === true ? '1px solid red' : ''
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
							disabled={loading === true ? true : false}
							onClick={() => {
								createUser()
							}}
							size="large"
							variant="outlined"
							sx={{
								width: '60%',
								mt: 5,
								backgroundColor: '#127F06',
								color: 'white',
								fontSize: '14px',
								'&:hover': {
									backgroundColor: '#005100'
								}
							}}
						>
							{loading === true ? (
								<CircularProgress sx={{ color: 'white' }} size={24} />
							) : (
								'Баталгаажуулах'
							)}
						</Button>
					</Box>
				</Container>
			)
		}
	}
}
