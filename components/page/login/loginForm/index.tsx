import * as React from 'react'
import axios from 'axios'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
//MUI
import {
	Box,
	Grid,
	Button,
	Typography,
	Divider,
	OutlinedInput,
	InputLabel
} from '@mui/material/'
import Checkbox from '@mui/material/Checkbox'
import FormControl from '@mui/material/FormControl'
import TextField from '@mui/material/TextField'
import Container from '@mui/material/Container'

interface condition {
	email: string
	password: string
	showPassword: boolean
}

export default function LoginForm() {
	const [values, setValues] = React.useState<State>({
		email: '',
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
		<Container maxWidth="xs" sx={{ minHeight: '58vh' }}>
			<Box
				autoComplete="on"
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

				{/* Form Section start */}

				<FormControl sx={{ mb: 2, fontSize: '9px' }} variant="outlined">
					<OutlinedInput
						id="email"
						name="email"
						label="И мэйл"
						type="email"
						value={values.email}
						onChange={handleChange('email')}
					/>
				</FormControl>
				<FormControl sx={{ mb: 4 }} fullWidth>
					<TextField
						required
						id="password"
						type="password"
						label="Нууц үг"
						variant="outlined"
						size="small"
					/>
				</FormControl>
				<Button
					onClick={}
					variant="contained"
					size="large"
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

				{/* Form ending */}

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
		</Container>
	)
}

async function submitData(data: any) {
	const newData = {
		email: data.email,
		passowrd: data.password
	}
	try {
		const resp = await axios
			.post('http://192.168.1.161:3000/auth/login', newData)
			.then((response) => {
				console.log(response)
			})
	} catch (err) {
		alert(err)
	}
}
