import * as React from 'react'
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
	IconButton
} from '@mui/material/'
import Checkbox from '@mui/material/Checkbox'
import FormControl from '@mui/material/FormControl'
import TextField from '@mui/material/TextField'
import Container from '@mui/material/Container'
import { Visibility, VisibilityOff } from '@mui/icons-material'

export default function LoginForm() {
	const cookies = new Cookies()

	React.useEffect(() => {
		if (cookies.get('access_token') !== undefined) {
			Router.push('/user/profile')
		}
	})

	return (
		<Container maxWidth="xs" sx={{ minHeight: '60vh' }}>
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
						id="email"
						label="И мэйл"
						size="small"
						variant="outlined"
					/>
				</FormControl>
				<FormControl sx={{ mb: 4 }} fullWidth>
					<TextField
						name="password"
						required
						size="small"
						label="Нууц үг"
						variant="outlined"
					/>
				</FormControl>
				<Button
					type="submit"
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
