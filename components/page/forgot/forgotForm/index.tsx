import * as React from 'react'
import { useRouter } from 'next/router'
import Router from 'next/router'
import axios, { AxiosError } from 'axios'
import Cookies from 'universal-cookie'
//MUI
import {
	FormControl,
	Typography,
	TextField,
	Button,
	Divider,
	Container,
	CircularProgress
} from '@mui/material'
import Box from '@mui/material/Box'
import Head from 'next/head'

interface State {
	email: string
	password: string
}

const host = 'http://localhost:8000'

export default function forgotForm(): any {
	const cookies = new Cookies()
	React.useEffect(() => {
		if (cookies.get('access_token') !== undefined) {
			Router.push('/')
		}
	})

	const [values, setValues] = React.useState<State>({
		email: '',
		password: ''
	})
	const [valid, setValid] = React.useState<boolean>(true)

	//Regex
	const email = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
	const password = new RegExp(
		/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/
	)

	const [loading, setLoading] = React.useState<boolean>(false)
	const [status, setStatus] = React.useState<string>('forgot')
	const [badResponse, setBadResponse] = React.useState<boolean>(false)
	const [otpFail, setOtpFail] = React.useState<boolean>(false)
	const [emptyField, setEmptyField] = React.useState<boolean>(false)
	const [confirmPasswordError, SetConfirmPasswordError] = React.useState({
		password: '',
		confirmPassword: ''
	})
	const [wrongInput, setWrongInput] = React.useState<boolean>(false)

	const handleChange =
		(prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
			var reg = new RegExp(/$/)
			var regType = event.target.name
			var validInput: string = ''
			switch (regType) {
				case 'email':
					validInput = 'valid_email'
					reg = email
					break
				case 'password':
					validInput = 'valid_phone_number'
					reg = password
					break
			}
			event.target.value !== '' ? setValid(reg.test(event.target.value)) : ''
			setValues({ ...values, [prop]: event.target.value })
			event.preventDefault()
		}

	const sendOTP = async function () {
		setLoading(true)
		if (valid && values.email !== '') {
			setWrongInput(false)
			try {
				await axios
					.post(host + '/auth/forgot', values.email)
					.then((response) => {
						// setLoading(false)
						console.log(response.data)
						/* 				console.log(res.status, res.data)
					console.log('password forgot success')
					console.log(res.data.access_token) */
					})
			} catch (error) {
				axios.isAxiosError(error)
				const err = error as AxiosError
				const errStatus = err.response?.status || 0
				console.log(err.response?.data)
			}
			// setLoading(false)
		}
		setLoading(false)
		setWrongInput(true)
	}

	const resetPassword = async function () {
		setLoading(true)
		if (valid && values.password !== '') {
			setWrongInput(false)
			try {
				await axios
					.patch(host + '/auth/reset-password', values.password)
					.then((response) => {
						console.log(response.data)
					})
			} catch (error) {
				axios.isAxiosError(error)
				const err = error as AxiosError
				const errStatus = err.response?.status || 0
				console.log(err.response?.data)
			}
		}
		setLoading(false)
		setWrongInput(true)
	}

	if (status === 'forgot') {
		return (
			<Container maxWidth="xs" sx={{ minHeight: '58vh', my: 10 }}>
				<Head>
					<title>
						{status === 'forgot'
							? 'Нууц үг шинэчлэх | SEED.MN'
							: 'Нууц үг солих | SEED.MN'}
					</title>
				</Head>
				<Box
					onSubmit={(e: any) => e.preventDefault()}
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
					<Typography variant="h4" sx={{ mb: 3, textAlign: 'center' }}>
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

					{/* EMAIL FORM SECTION */}

					<FormControl sx={{ mb: 1 }} fullWidth>
						<TextField
							type="email"
							name="email"
							id="email"
							label="И мэйл"
							variant="outlined"
							value={values.email}
							error={emptyField || !valid ? true : false}
							sx={{
								fontSize: '14px',
								my: 2,
								borderBottom: badResponse === true ? '2px solid red' : 'none'
							}}
							onChange={handleChange('email')}
							helperText={wrongInput ? 'Имэйлээ дахин шалгана уу?' : ''}
							InputLabelProps={{
								shrink: true
							}}
						/>
						{emptyField || badResponse ? (
							<Typography
								variant="body2"
								sx={{ color: 'red', textAlign: 'center', mt: 2 }}
							>
								Имэйл оруулна уу
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
					<Button
						onClick={() => {
							sendOTP()
						}}
						type="submit"
						variant="contained"
						fullWidth
						size="large"
						sx={{ fontSize: '12px' }}
					>
						{loading === true ? (
							<CircularProgress sx={{ color: 'white ' }} size={24} />
						) : (
							'Шинэ нууц үг авах'
						)}
					</Button>
				</Box>
			</Container>
		)
	} else if (status === 'reset') {
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
					<Typography variant="body2">
						Дор хаяж 6 тэмдэгтийн урттай нууц үг оруулна уу.
					</Typography>

					{/* Password Confirmation Section  */}

					<FormControl sx={{ mb: 2 }} fullWidth>
						<TextField
							type="password"
							id="password"
							value={values.password}
							error={emptyField || !valid ? true : false}
							sx={{
								borderBottom: badResponse === true ? '2px solid red' : 'none'
							}}
							onChange={handleChange('password')}
							name="password"
							size="small"
							label="Нууц үг"
						/>
					</FormControl>
					<FormControl sx={{ mb: 2 }} fullWidth>
						<TextField
							id="passwordConfirm"
							name="passwordConfirm"
							size="small"
							type="password"
							helperText={wrongInput ? 'Нууц үг таарахгүй байна' : ''}
							label="Нууц үг"
							InputLabelProps={{
								shrink: true
							}}
						/>
					</FormControl>
					{emptyField || badResponse ? (
						<Typography
							variant="body2"
							sx={{ color: 'red', textAlign: 'center', mt: 2 }}
						>
							Нууц үгээ оруулна уу
						</Typography>
					) : (
						''
					)}
					<Button
						fullWidth
						variant="contained"
						color="primary"
						/* onClick={() => {
							resetPassword()
						}} */
					>
						Хадгалах
					</Button>
				</Box>
			</Container>
		)
	}
}
