import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import Typography from '@mui/material/Typography'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import TextField from '@mui/material/TextField'
import Divider from '@mui/material/Divider'
import Container from '@mui/material/Container'
import * as React from 'react'

export default function LoginForm() {
	return (
		<Container maxWidth="xs">
			<Box
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
				<Typography variant="h4" component="h1" sx={{ mb: 3 }}>
					Нэвтрэх
				</Typography>

				<FormControl sx={{ mb: 2 }} fullWidth>
					<TextField
						sx={{
							fontSize: '9px'
						}}
						id="outlined-email"
						name="email"
						label="И мэйл"
						variant="outlined"
						size="small"
					/>
					<FormHelperText>И-мэйл хаягаа оруулна уу.</FormHelperText>
				</FormControl>
				<FormControl sx={{ mb: 4 }} fullWidth>
					<TextField
						id="password"
						name="password"
						type="password"
						label="Нууц үг"
						variant="outlined"
						size="small"
						InputProps={{}}
					/>
					<FormHelperText>
						Таны нууц үг 4-60 үсэг агуулсан байх ёстой.
					</FormHelperText>
				</FormControl>
				<Button
					type="submit"
					variant="contained"
					size="large"
					href="/auth/loggedin"
					fullWidth
					sx={{ fontSize: '12px' }}
				>
					Нэвтрэх
				</Button>

				<Grid
					container
					alignItems="center"
					justifyContent="space-between"
					sx={{ mb: 1 }}
				>
					<Box>
						<Checkbox />
						<Typography variant="caption">Сануулах</Typography>
					</Box>
					<Typography
						href="/auth/forgot"
						component="a"
						sx={{ fontSize: '12px' }}
					>
						Нууц үгээ мартсан уу?
					</Typography>
				</Grid>
				<Divider sx={{ my: 2, fontSize: '14px' }}>Эсвэл</Divider>
				<Grid textAlign="center">
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
				</Grid>
			</Box>
		</Container>
	)
}
