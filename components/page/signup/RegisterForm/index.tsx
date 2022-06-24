import NextLink from 'next/link'
import { useRouter } from 'next/router'

import {
	Box,
	FormControl,
	TextField,
	Typography,
	Button,
	Divider,
	Container
} from '@mui/material'

export default function Register() {
	return (
		<Container maxWidth="xs" sx={{ minHeight: '70.7vh' }}>
			<Box
				component="form"
				noValidate
				autoComplete="off"
				sx={{
					border: '1px solid rgba(0,0,0,0.1)',
					mx: 'auto',
					py: 3,
					px: 4
				}}
			>
				<Typography variant="h4" component="h1" sx={{ mb: 4 }}>
					Бүртгүүлэх
				</Typography>

				<FormControl sx={{ mb: 2 }} fullWidth>
					<TextField
						name="fullName"
						label="Нэр"
						variant="outlined"
						required
						size="small"
					/>
				</FormControl>
				<FormControl sx={{ mb: 2 }} fullWidth>
					<TextField
						id="email"
						label="И мэйл"
						variant="outlined"
						required
						type="email"
						size="small"
					/>
				</FormControl>
				<FormControl sx={{ mb: 2 }} fullWidth>
					<TextField
						inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
						id="number"
						name="phone-number"
						label="Утасны дугаар"
						variant="outlined"
						type="number"
						size="small"
					/>
				</FormControl>
				<FormControl sx={{ mb: 4 }} fullWidth>
					<TextField
						required
						id="password"
						type="password"
						label="Нууц үг"
						variant="outlined"
						size="small"
					/>
				</FormControl>
				<Button
					type="submit"
					variant="contained"
					size="large"
					fullWidth
					sx={{ fontSize: '14px' }}
				>
					Бүртгүүлэх
				</Button>
				<Typography variant="subtitle1" sx={{ fontSize: '11px', mt: 3 }}>
					Бүртгүүлснээр та манай
					<Typography
						sx={{ fontSize: '11px' }}
						variant="caption"
						color="primary"
						component="a"
						href="/terms-of-use"
					>
						&nbsp;Үйлчилгээний Нөхцлийг&nbsp;
					</Typography>
					хүлээн зөвшөөрч байгаа болно.
				</Typography>
				<Divider sx={{ fontSize: '12px', mt: 1 }}>Эсвэл</Divider>
				<Typography variant="subtitle1" sx={{ mt: 2, fontSize: '11px' }}>
					Таныг робот биш болохыг батлахын тулд энэ хуудас reCAPTCHA-р
					хамгаалагдсан.
				</Typography>
				<Typography variant="caption" color="primary" component="a" href="#">
					&nbsp;Дэлгэрэнгүй.
				</Typography>
			</Box>
		</Container>
	)
}
