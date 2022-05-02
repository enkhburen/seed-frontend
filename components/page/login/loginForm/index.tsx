import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'

import Link from 'next/link'
import { useRouter } from 'next/router'

export default function LoginForm() {
	const router = useRouter()

	return (
		<Box
			width="35%"
			component="form"
			noValidate
			autoComplete="off"
			sx={{
				border: '1px solid rgba(0,0,0,0.1)',
				borderRadius: '2px',
				mx: 'auto',
				py: 3,
				px: 5
			}}
		>
			<Typography variant="h4">Нэвтрэх</Typography>
			<FormControl sx={{ width: '100%' }}>
				<FormGroup>
					<TextField
						required
						id="email"
						type="email"
						variant="outlined"
						color="primary"
						placeholder="И-мэйл"
						size="small"
						margin="normal"
					></TextField>
					<TextField
						required
						id="password"
						type="password"
						variant="outlined"
						color="primary"
						placeholder="Нууц үг"
						size="small"
						margin="normal"
					></TextField>
					<Typography variant="caption" color="#2752ff" align="right">
						<Link href="/auth/forgot">
							<a>Нууц үг сэргээх</a>
						</Link>
					</Typography>
					<Typography variant="caption" color="#2752ff" align="right">
						<Link href="/auth/register">
							<a>Шинээр бүртгүүлэх</a>
						</Link>
					</Typography>
					<Button
						href="/auth/loggedin"
						variant="contained"
						size="medium"
						sx={{ width: '100%', my: 1 }}
					>
						Нэвтрэх
					</Button>
					<FormControlLabel
						control={
							<Checkbox
								defaultChecked
								size="small"
								sx={{
									color: '#2752ff',
									'&.Mui-checked': {
										color: '#2752ff'
									}
								}}
							/>
						}
						label="Сануулах"
					/>
				</FormGroup>
			</FormControl>
		</Box>
	)
}
