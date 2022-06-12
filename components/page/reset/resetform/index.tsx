import { Box, Typography, FormControl, Button, Container } from '@mui/material'
import { useRouter } from 'next/router'
import * as React from 'react'
import { useState } from 'react'
import InputAdornment from '@mui/material/InputAdornment'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import IconButton from '@mui/material/IconButton'
import OutlinedInput from '@mui/material/OutlinedInput'
import FormHelperText from '@mui/material/FormHelperText'

export default function resetForm() {
	const router = useRouter()

	const [showPassword, setShowPassword] = useState(false)
	const handleClickShowPassword = () => {
		setShowPassword(!showPassword)
	}

	const handleMouseDownPassword = (event: { preventDefault: () => void }) => {
		event.preventDefault()
	}

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
				<p>Дор хаяж 6 тэмдэгтийн урттай нууц үг оруулна уу.</p>

				<FormControl sx={{ mb: 2 }} fullWidth>
					<FormHelperText>Шинэ нууц үгээ оруулна уу.</FormHelperText>
					<OutlinedInput
						id="outlined-adornment-passowrd-login"
						name="password"
						size="small"
						type={showPassword ? 'text' : 'password'}
						endAdornment={
							<InputAdornment position="end">
								<IconButton
									aria-label="toggle password visibility"
									onClick={handleClickShowPassword}
									onMouseDown={handleMouseDownPassword}
									edge="end"
									size="small"
								>
									{showPassword ? <Visibility /> : <VisibilityOff />}
								</IconButton>
							</InputAdornment>
						}
						label="Нууц үг"
						inputProps={{}}
					/>
				</FormControl>
				<FormControl sx={{ mb: 2 }} fullWidth>
					<FormHelperText>Нууц үгээ давтан оруулна уу.</FormHelperText>
					<OutlinedInput
						id="outlined-adornment-passowrd-login"
						name="password"
						size="small"
						type={showPassword ? 'text' : 'password'}
						endAdornment={
							<InputAdornment position="end">
								<IconButton
									aria-label="toggle password visibility"
									onClick={handleClickShowPassword}
									onMouseDown={handleMouseDownPassword}
									edge="end"
									size="small"
								>
									{showPassword ? <Visibility /> : <VisibilityOff />}
								</IconButton>
							</InputAdornment>
						}
						label="Нууц үг"
						inputProps={{}}
					/>
				</FormControl>
				<Button
					type="submit"
					disableElevation
					fullWidth
					variant="contained"
					color="primary"
				>
					Хадгалах
				</Button>
			</Box>
		</Container>
	)
}
