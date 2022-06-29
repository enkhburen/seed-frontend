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
	TextField
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

interface Validation {
	valid_first_name: boolean
	valid_last_name: boolean
	valid_email: boolean
	valid_phone_number: boolean
	valid_password: boolean
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
	const [emptyField, setEmptyField] = React.useState<boolean>(false)

	const [values, setValues] = React.useState<State>({
		first_name: '',
		last_name: '',
		email: '',
		phoneNumber: '',
		password: '',
		showPassword: false
	})
	const [valid, setValid] = React.useState<Validation>({
		valid_first_name: true,
		valid_last_name: true,
		valid_email: true,
		valid_phone_number: true,
		valid_password: true
	})

	const cyrillic = new RegExp(
		/^[аАбБвВгГдДеЕёЁжЖзЗиИйЙкКлЛмМнНоОөӨпПрРсСтТуУүҮфФхХцЦчЧшШщЩъЪьЬыЫьЬэЭюЮяЯ]+$/
	)
	const email = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
	const number = new RegExp(/^[0-9]{8}$/)
	const password = new RegExp(
		/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/
	)

	const handleChange =
		(prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
			var regType = event.target.name
			var validInput: string = ''
			var reg = new RegExp(/$/)

			switch (regType) {
				case 'first_name':
					validInput = 'valid_first_name'
					reg = cyrillic
					break
				case 'last_name':
					validInput = 'valid_last_name'
					reg = cyrillic
					break
				case 'email':
					validInput = 'valid_email'
					reg = email
					break
				case 'phone_number':
					validInput = 'valid_phone_number'
					reg = number
					break
				case 'password':
					validInput = 'valid_password'
					reg = password
					break
				default:
					break
			}
			// console.log(valid)
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

	const checkEmpty = (e: any) => {
		if (e.target.value !== '') {
			return true
		} else {
			return false
		}
	}
	// otp request
	const submitData = async function () {
		if (
			valid.valid_first_name &&
			valid.valid_last_name &&
			valid.valid_password &&
			valid.valid_email &&
			valid.valid_phone_number &&
			values.email &&
			values.first_name &&
			values.last_name &&
			values.password &&
			values.phoneNumber
		) {
			const newData = {
				email: values.email
			}
			setLoading(true)
			setUserExists(false)
			setBadResponse(false)
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
		} else {
			setEmptyField(true)
		}
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
	}

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
					<Typography variant="h4" component="h1" sx={{ mb: 2 }}>
						Бүртгүүлэх
					</Typography>
					<Typography
						variant="caption"
						component="p"
						sx={{ mb: 2, color: '#888' }}
					>
						Овог нэрийг криллээр бичнэ үү.
					</Typography>
					<Grid container spacing={2}>
						<Grid item xs={12} md={6}>
							<FormControl sx={{ mb: 1 }}>
								<TextField
									InputLabelProps={{
										shrink: true
									}}
									sx={{ fontSize: '14px' }}
									id="last_name"
									name="last_name"
									label="Овог"
									value={values.last_name}
									type="text"
									onChange={handleChange('last_name')}
									error={emptyField || !valid.valid_last_name}
									variant="outlined"
									helperText="Криллээр бичнэ үү"
									required
								/>
							</FormControl>
						</Grid>
						<Grid item xs={12} md={6}>
							<FormControl sx={{ mb: 1 }}>
								<TextField
									InputLabelProps={{
										shrink: true
									}}
									sx={{ fontSize: '14px' }}
									id="first_name"
									name="first_name"
									label="Нэр"
									type="text"
									value={values.first_name}
									onChange={handleChange('first_name')}
									error={emptyField || !valid.valid_first_name}
									variant="outlined"
									helperText="Криллээр бичнэ үү"
									required
								/>
							</FormControl>
						</Grid>
						<Grid item xs={12} md={12}>
							<FormControl sx={{ mb: 1, minWidth: '100%' }}>
								<TextField
									InputLabelProps={{
										shrink: true
									}}
									sx={{
										fontSize: '14px'
									}}
									error={emptyField || !valid.valid_email}
									helperText={
										userExists === true ? 'Хэрэглэгч бүртгэлтэй байна' : ''
									}
									variant="outlined"
									required={true}
									id="email"
									name="email"
									label="И-мэйл"
									type="email"
									value={values.email}
									onChange={handleChange('email')}
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
							<FormControl sx={{ mb: 1, minWidth: '100%' }}>
								<TextField
									InputLabelProps={{
										shrink: true
									}}
									InputProps={{
										startAdornment: (
											<InputAdornment position="start">+976</InputAdornment>
										)
									}}
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
									error={
										emptyField === true || !valid.valid_phone_number
											? true
											: false
									}
									variant="outlined"
									required
								/>
							</FormControl>
						</Grid>
						<Grid item xs={12} md={12}>
							<FormControl sx={{ mb: 1, minWidth: '100%' }}>
								<TextField
									InputLabelProps={{
										shrink: true
									}}
									sx={{
										fontSize: '14px',
										borderBottom:
											badResponse === true ? '2px solid red' : 'none'
									}}
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
													{values.showPassword ? (
														<VisibilityOff />
													) : (
														<Visibility />
													)}
												</IconButton>
											</InputAdornment>
										)
									}}
									label="Нууц үг"
									error={
										emptyField === true || !valid.valid_password ? true : false
									}
									variant="outlined"
									helperText="Дор хаяж нэг том, нэг жижиг, нэг тоо агуулсан байхыг анхаарна уу. "
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
								{emptyField === true ? (
									<Typography
										variant="body2"
										sx={{ color: 'red', textAlign: 'center', mt: 2 }}
									>
										Мэдээллээ бүрэн зөв бөглөнө үү!
									</Typography>
								) : (
									''
								)}
							</FormControl>
						</Grid>
						<Grid item xs={12} md={12}>
							<Button
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
							createUser()
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
