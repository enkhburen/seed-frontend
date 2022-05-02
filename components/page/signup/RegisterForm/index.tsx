import {
	Box,
	FormControl,
	FormGroup,
	TextField,
	Typography
} from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider'
import { Button } from '@mui/material'
import { fontSize } from '@mui/system'

export default function Register() {
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
			<Typography
				color="text.secondary"
				variant="body2"
				sx={{
					textAlign: 'center',
					pb: 2
				}}
			/>
			Хаяг үүсгэсэн бол
			<Typography color="#2752ff">
				<Link href="/login">
					<a>Нэвтрэх</a>
				</Link>
			</Typography>
			<Divider variant="middle" sx={{ width: '100%' }} />
			<Typography
				variant="h4"
				sx={{
					mt: '0.6rem',
					fontSize: '1.4rem'
				}}
			>
				Бүртгүүлэх
			</Typography>
			<FormControl sx={{ width: '100%' }}>
				<FormGroup>
					<TextField
						required
						id="name"
						variant="outlined"
						color="primary"
						placeholder="Нэр"
						size="small"
						margin="normal"
					></TextField>
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
						variant="outlined"
						placeholder="Нууц үг"
						size="small"
						margin="normal"
						color="primary"
						type="password"
					></TextField>
					<Button
						href="/loggedin"
						variant="contained"
						size="medium"
						sx={{ width: '100%', my: 3 }}
					>
						Хаяг үүсгэх
					</Button>
					<Typography variant="caption" align="left">
						Бүртгүүлснээр та манай
						<Link href="/home">үйлчилгээний нөхцлийг</Link>
						зөвшөөрч байгаа болно.
					</Typography>
				</FormGroup>
			</FormControl>
		</Box>
	)
}
