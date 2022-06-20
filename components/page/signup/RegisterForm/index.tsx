import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { useFormik } from 'formik'
import * as Yup from 'yup'
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
	const router = useRouter()
	const formik = useFormik({
		initialValues: {
			fullName: '',
			email: '',
			password: ''
		},
		validationSchema: Yup.object({
			email: Yup.string()
				.email('Имэйл буруу байна')
				.max(255)
				.required('Имэйл оруулах шаардлагатай'),
			fullName: Yup.string().max(255).required('Нэрээ оруулна уу'),
			password: Yup.string().max(255).required('Нууц үг оруулна уу.')
		}),
		onSubmit: () => {
			router.push('/user/profile')
		}
	})

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
				onSubmit={formik.handleSubmit}
			>
				<Typography variant="h4" component="h1" sx={{ mb: 4 }}>
					Бүртгүүлэх
				</Typography>

				<FormControl sx={{ mb: 2 }} fullWidth>
					<TextField
						error={Boolean(formik.touched.fullName && formik.errors.fullName)}
						helperText={formik.touched.fullName && formik.errors.fullName}
						onBlur={formik.handleBlur}
						onChange={formik.handleChange}
						value={formik.values.fullName}
						name="fullName"
						label="Нэр"
						variant="outlined"
						required
						size="small"
					/>
				</FormControl>
				<FormControl sx={{ mb: 2 }} fullWidth>
					<TextField
						error={Boolean(formik.touched.email && formik.errors.email)}
						helperText={formik.touched.email && formik.errors.email}
						onBlur={formik.handleBlur}
						onChange={formik.handleChange}
						value={formik.values.email}
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
						error={Boolean(formik.touched.password && formik.errors.password)}
						helperText={formik.touched.password && formik.errors.password}
						onBlur={formik.handleBlur}
						value={formik.values.password}
						onChange={formik.handleChange}
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
					disabled={formik.isSubmitting}
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
