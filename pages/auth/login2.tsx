import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import { FormHelperText } from '@mui/material'

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
			<Typography variant="h4" component="h1" sx={{ mb: 4 }}>
				Нэвтрэх
			</Typography>
			<form>
				<FormControl sx={{ mb: 2 }}>
					<TextField
						id="email"
						type="email"
						label="outlined"
						variant="filled"
						fullWidth
						sx={{ mb: 2 }}
					/>
					<FormHelperText>И-мэйл хаягаа оруулна уу.</FormHelperText>
				</FormControl>
				<FormControl sx={{ mb: 2 }}>
					<TextField
						id="email"
						type="email"
						label="outlined"
						variant="filled"
						fullWidth
						sx={{ mb: 4 }}
					/>
				</FormControl>
				<FormHelperText>Таны нууц үг 4-60 үсэгтэй байх ёстой.</FormHelperText>
				<Button type="submit" variant="contained" size="large" fullWidth>
					Нэвтрэх
				</Button>
			</form>
		</Box>
	)
}
