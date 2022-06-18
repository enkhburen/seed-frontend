import {
	Container,
	MenuItem,
	TextField,
	Typography,
	Box,
	Button
} from '@mui/material'
import * as React from 'react'
import { Divider } from '@mui/material'

const categories = [
	{
		title: 'Дуу',
		label: 'Бусад'
	},
	{
		title: 'Кино',
		label: 'Бусад'
	},
	{
		title: 'Технологи',
		label: 'Бусад'
	},
	{
		title: 'Бусад',
		label: 'Бусад'
	}
]
export default function CategoryPage() {
	const [category, setCategory] = React.useState('Бусад')
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setCategory(event.target.value)
	}

	return (
		<>
			<Container disableGutters maxWidth="sm" component="main" sx={{ my: 10 }}>
				<Typography
					component="h1"
					variant="h4"
					align="center"
					gutterBottom
					sx={{ fontWeight: 'medium' }}
				>
					Краудфандинг аялалаа эхлүүлцгээе.
				</Typography>
				<Typography variant="h5" align="center" sx={{ mt: 3 }}>
					Шинэ төслийнхөө ангиллыг сонгоно уу.
				</Typography>
				<Typography variant="body2" align="center" sx={{ mt: 2 }}>
					Эдгээр нь дэмжигчдэд таны төслийг олоход туслах бөгөөд хэрэв
					шаардлагатай бол дараа нь өөрчлөх боломжтой.
				</Typography>
				<Box
					component="form"
					sx={{
						'& .MuiTextField-root': {
							mt: 7
						}
					}}
					noValidate
					autoComplete="off"
				>
					<TextField
						id="outlined-select-category"
						select
						label="Ангилал сонгох"
						value={category}
						onChange={handleChange}
						fullWidth
						required
						helperText="Төслийнхөө ангилалыг сонгоно уу"
					>
						{categories.map((option) => (
							<MenuItem key={option.title} value={option.title}>
								{option.title}
							</MenuItem>
						))}
					</TextField>
				</Box>

				<Divider sx={{ pt: 2 }}></Divider>
				<Box
					display="flex"
					alignItems="flex-end"
					justifyContent="flex-end"
					sx={{ pt: 3 }}
				>
					<Button variant="contained" href="/campaign/edit/basics">
						Дараагийн алхам
					</Button>
				</Box>

				<Typography align="center" sx={{ fontSize: '12px', mt: 12 }}>
					Анхаар: Та төслөө засварлах, нуух, устгах тохиолдолд төслийг
					эхлүүлсний дараа хязгаарлагдана.
				</Typography>
			</Container>
		</>
	)
}
