import {
	Box,
	FilledInput,
	FormControl,
	FormHelperText,
	InputAdornment,
	TextField,
	Typography
} from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import Checkbox from '@mui/material/Checkbox'
import { useRouter } from 'next/router'
import Grid from '@mui/material/Grid'
import { Button } from '@mui/material'
import { useState } from 'react'
import FacebookIcon from 'public/assets/cta/facebook-login.png'
import GoogleIcon from 'public/assets/cta/google-login.png'
import { color } from '@mui/system'
import { Divider } from '@mui/material'

export default function Register() {
	const router = useRouter()

	return (
		<Box
			width="37%"
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
				Бүртгүүлэх
			</Typography>
			<Grid sx={{ mb: 2 }}>
				<FormControl sx={{ mb: 2 }} fullWidth>
					<TextField
						id="name"
						name="name"
						label="Нэр"
						variant="outlined"
						required
						size="small"
					/>
				</FormControl>
				<FormControl sx={{ mb: 2 }} fullWidth>
					<TextField
						id="email"
						name="email"
						label="И мэйл"
						variant="outlined"
						required
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
						required
						size="small"
					/>
				</FormControl>
				<FormControl sx={{ mb: 4 }} fullWidth>
					<TextField
						required
						id="password"
						name="password"
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
					href="/auth/loggedin"
					fullWidth
					sx={{ fontSize: '14px' }}
				>
					Бүртгүүлэх
				</Button>
				<Grid sx={{ mt: 2 }}>
					<Typography variant="caption" sx={{ fontSize: '11px' }}>
						Бүртгүүлснээр та манай
						<Typography
							sx={{ fontSize: '11px' }}
							variant="caption"
							color="primary"
							component="a"
							href="#"
						>
							&nbsp;Үйлчилгээний Нөхцлийг&nbsp;
						</Typography>
						хүлээн зөвшөөрч байгаа болно.
					</Typography>
				</Grid>
				<Divider sx={{ fontSize: '12px', mt: 1 }}>Эсвэл</Divider>
			</Grid>
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
						src={FacebookIcon}
						height={20}
						width={20}
						layout="fixed"
						alt="Facebook бүртгүүлэх"
					/>
					<Typography
						variant="caption"
						component="a"
						href="#"
						sx={{ ml: 1, fontSize: '14px' }}
					>
						Facebook-р бүртгүүлэх
					</Typography>
				</Button>
				<Button variant="outlined" fullWidth sx={{ mt: 1.5 }}>
					<Image
						src={GoogleIcon}
						height={20}
						width={20}
						layout="fixed"
						alt="Google бүртгүүлэх"
					/>
					<Typography
						variant="caption"
						component="a"
						href="#"
						sx={{ ml: 1, fontSize: '14px', color: '#5486ec' }}
					>
						&nbsp; Google-р бүртгүүлэх
					</Typography>
				</Button>
				<Grid sx={{ mt: 2 }}>
					<Divider sx={{ fontSize: '12px', my: 1 }}></Divider>
					<Typography variant="caption">
						Таныг робот биш болохыг батлахын тулд энэ хуудас reCAPTCHA-р
						хамгаалагдсан.
					</Typography>
					<Typography variant="caption" color="primary" component="a" href="#">
						&nbsp;Дэлгэрэнгүй.
					</Typography>
				</Grid>
			</Grid>
		</Box>
	)
}
