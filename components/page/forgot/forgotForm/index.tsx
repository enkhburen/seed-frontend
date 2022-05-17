import {
	FormControl,
	Typography,
	Grid,
	TextField,
	Button,
	Divider
} from '@mui/material'
import Box from '@mui/material/Box'

export default function forgotForm() {
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
			<Typography
				variant="h5"
				component="h1"
				sx={{ mb: 3, textAlign: 'center' }}
			>
				Нууц үгээ мартсан уу?
			</Typography>
			<Divider sx={{ my: 1 }}></Divider>
			<Typography
				variant="caption"
				sx={{
					mb: 5,
					fontSize: '1,6rem'
				}}
			>
				Бид танд нууц үг шинэчлэх холбоосыг бүртгэлтэй имэйл хаягаар тань илгээх
				болно.
			</Typography>
			<Grid sx={{ mt: 2 }}>
				<FormControl sx={{ mb: 2 }} fullWidth>
					<TextField
						sx={{
							fontSize: '9px',
							mb: 2
						}}
						id="outlined-email"
						name="email"
						label="И мэйл"
						variant="outlined"
						size="small"
					/>
					<Button
						type="submit"
						variant="contained"
						size="large"
						href="/auth/verify"
						fullWidth
						sx={{ fontSize: '12px' }}
					>
						Шинэ нууц үг авах
					</Button>
				</FormControl>
			</Grid>
			<Grid sx={{ mt: 1 }}>
				<Button
					type="submit"
					variant="outlined"
					size="large"
					href="/auth/login"
					fullWidth
					sx={{ fontSize: '12px' }}
				>
					Буцах
				</Button>
			</Grid>
		</Box>
	)
}
