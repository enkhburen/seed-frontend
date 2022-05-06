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
			<Typography variant="h4" component="h1" sx={{ mb: 4 }}>
				Нэвтрэх
			</Typography>
			<Grid sx={{ mb: 2 }}>
				<FormControl sx={{ mb: 2 }} fullWidth>
					<TextField id="email" name="email" label="И мэйл" variant="filled" />
					<FormHelperText>И-мэйл хаягаа оруулна уу.</FormHelperText>
				</FormControl>
				<FormControl sx={{ mb: 4 }} fullWidth>
					<TextField
						id="password"
						name="password"
						type="password"
						label="Нууц үг"
						variant="filled"
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
				<Typography variant="caption" component="a" href="">
					Нууц үгээ мартсан уу?
				</Typography>
			</Grid>
			<Grid container alignItems="center" sx={{ mb: 2 }}>
				<Image
					src="/assets/facebook.png"
					height={20}
					width={20}
					layout="fixed"
					alt="Facebook нэвтрэх"
				/>
				<Typography
					variant="caption"
					component="a"
					href="#"
					sx={{ ml: 1, fontSize: '16px' }}
				>
					Facebook-р нэвтрэх
				</Typography>
			</Grid>
			<Grid>
				<Typography variant="body1" component="span">
					Шинээр бүртгүүлэх бол?
				</Typography>
				<Typography
					variant="body1"
					color="primary"
					component="a"
					href="/auth/signup"
				>
					&nbsp;Энд дар.
				</Typography>
			</Grid>
		</Box>
	)
}
