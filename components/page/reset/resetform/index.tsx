import * as React from 'react'
import { useRouter } from 'next/router'
import {
	Box,
	Typography,
	FormControl,
	Button,
	Container,
	TextField
} from '@mui/material'

const uppercaseRegex = /(?=.*[A-Z])/
const numericRegex = /(?=.*[0-9])/

export default function resetForm() {
	const router = useRouter()

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
						name="password"
						type="password"
						size="small"
						label="Нууц үг"
					/>
				</FormControl>
				<FormControl sx={{ mb: 2 }} fullWidth>
					<TextField
						name="passwordConfirm"
						size="small"
						type="password"
						label="Нууц үг"
					/>
				</FormControl>

				<Button type="submit" fullWidth variant="contained" color="primary">
					Хадгалах
				</Button>
			</Box>
		</Container>
	)
}
