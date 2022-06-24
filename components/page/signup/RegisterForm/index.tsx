import * as React from 'react'
import axios from 'axios'
import Link from 'next/link'

import {
	Box,
	FormControl,
	TextField,
	Grid,
	Typography,
	IconButton,
	Button,
	Input,
	Divider,
	Container,
	InputAdornment,
	OutlinedInput,
	InputLabel
} from '@mui/material'

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

async function submitData(data: any) {
	const newData = {
		first_name: data.first_name,
		last_name: data.last_name,
		email: data.email,
		phoneNumber: data.phoneNumber,
		password: data.password
	}

	try {
		const resp = await axios
			.post('http://192.168.1.161:3000/auth/singup', newData)
			.then((response) => {
				console.log(response)
			})
		// console.log(newData)
	} catch (err) {
		alert(err)
	}
	// return { newData }
}

export default function Register() {
	const [values, setValues] = React.useState<State>({
		first_name: '',
		last_name: '',
		email: '',
		phoneNumber: '',
		password: '',
		showPassword: false
	})

	const handleChange =
		(prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
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

	return (
		<Container maxWidth="xs" sx={{ minHeight: '70vh' }}>
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
								inputComponent="input"
							/>
						</FormControl>
					</Grid>
					<Grid item xs={12} md={12}>
						<FormControl sx={{ mb: 1, minWidth: '100%' }} variant="outlined">
							<InputLabel htmlFor="email" sx={{ fontSize: '14px' }}>
								И-мэйл
							</InputLabel>
							<OutlinedInput
								sx={{ fontSize: '14px' }}
								id="email"
								label="И-мэйл"
								type="email"
								value={values.email}
								onChange={handleChange('email')}
								inputComponent="input"
							/>
						</FormControl>
					</Grid>
					<Grid item xs={12} md={12}>
						<FormControl sx={{ mb: 1, minWidth: '100%' }} variant="outlined">
							<InputLabel htmlFor="phone_number">Утасны дугаар</InputLabel>
							<OutlinedInput
								startAdornment={
									<InputAdornment position="start">+976</InputAdornment>
								}
								sx={{ fontSize: '14px' }}
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
						<FormControl sx={{ mb: 1, minWidth: '100%' }} variant="outlined">
							<InputLabel htmlFor="password" sx={{ fontSize: '14px' }}>
								Нууц үг
							</InputLabel>
							<OutlinedInput
								sx={{ fontSize: '14px' }}
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
											{values.showPassword ? <VisibilityOff /> : <Visibility />}
										</IconButton>
									</InputAdornment>
								}
								label="Нууц үг"
								required
							/>
						</FormControl>
					</Grid>
					<Grid item xs={12} md={12}>
						<Button
							onClick={() => {
								// console.log(values.first_name)
								submitData(values)
							}}
							variant="contained"
							size="large"
							sx={{ fontSize: '14px', minWidth: '100%' }}
						>
							Бүртгүүлэх
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
}
