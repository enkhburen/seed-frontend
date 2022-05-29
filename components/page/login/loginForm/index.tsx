import { useRouter } from 'next/router'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'

import Checkbox from '@mui/material/Checkbox'
import Typography from '@mui/material/Typography'
import InputAdornment from '@mui/material/InputAdornment'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import TextField from '@mui/material/TextField'
import facebookIcon from 'public/assets/cta/facebook-login.png'
import GoogleIcon from 'public/assets/cta/google-login.png'
import Divider from '@mui/material/Divider'
import * as React from 'react'
import Modal from '@mui/material/Modal'

const style = {
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '1px solid #127F06',
	boxShadow: 24,
	pt: 2,
	px: 4,
	pb: 3
}

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
			<Typography variant="h4" component="h1" sx={{ mb: 3 }}>
				Нэвтрэх
			</Typography>
			<Grid sx={{ mb: 2 }}>
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
			</Grid>
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
				<Typography href="/auth/forgot" component="a" sx={{ fontSize: '12px' }}>
					Нууц үгээ мартсан уу?
				</Typography>
			</Grid>
			<Divider sx={{ my: 2, fontSize: '14px' }}>Эсвэл</Divider>
			<Grid
				container
				alignItems="center"
				sx={{ mb: 2, justifyContent: 'center' }}
			>
				<Button
					variant="contained"
					fullWidth
					sx={{ backgroundColor: '#354e86' }}
				>
					<Image
						src={facebookIcon}
						height={20}
						width={20}
						layout="fixed"
						alt="Facebook нэвтрэх"
					/>
					<Typography
						variant="caption"
						component="a"
						href="#"
						sx={{ ml: 1, fontSize: '14px' }}
					>
						Facebook-р нэвтрэх
					</Typography>
				</Button>
				<Button variant="outlined" fullWidth sx={{ mt: 1.5 }}>
					<Image
						src={GoogleIcon}
						height={20}
						width={20}
						layout="fixed"
						alt="Google нэвтрэх"
					/>
					<Typography
						variant="caption"
						component="a"
						href="#"
						sx={{ ml: 1, fontSize: '14px', color: '#5486ec' }}
					>
						&nbsp; Google-р нэвтрэх
					</Typography>
				</Button>
			</Grid>
			<Grid textAlign="center">
				<Typography variant="body1" component="span" sx={{ fontSize: '14px' }}>
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
	)
}
