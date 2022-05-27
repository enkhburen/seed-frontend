import {
	Container,
	MenuItem,
	TextField,
	Typography,
	Grid,
	Box,
	Button
} from '@mui/material'
import * as React from 'react'
import { Divider, Autocomplete } from '@mui/material'

const categories = [
	{ title: 'Дуу' },
	{ title: 'Кино' },
	{ title: 'Технологи' },
	{ title: 'Бусад' }
]

const options = categories.map((option) => {
	const firstLetter = option.title[0].toUpperCase()
	return {
		firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
		...option
	}
})

export default function CategoryPage() {
	return (
		<Box>
			<>
				<Container
					disableGutters
					maxWidth="sm"
					component="main"
					sx={{ my: 11 }}
				>
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
								m: 1.7,
								mt: 7,
								width: '30ch'
							}
						}}
					>
						<div>
							<Autocomplete
								id="grouped-demo"
								size="small"
								sx={{ display: 'inline-block' }}
								options={options.sort(
									(a, b) => -b.firstLetter.localeCompare(a.firstLetter)
								)}
								groupBy={(option) => option.firstLetter}
								getOptionLabel={(option) => option.title}
								renderInput={(params) => (
									<TextField
										{...params}
										sx={{ mt: 7 }}
										label="Ангилал сонгох"
									/>
								)}
							/>
							<Autocomplete
								id="grouped-demo"
								size="small"
								disabled
								sx={{ display: 'inline-block' }}
								options={options.sort(
									(a, b) => -b.firstLetter.localeCompare(a.firstLetter)
								)}
								groupBy={(option) => option.firstLetter}
								getOptionLabel={(option) => option.title}
								renderInput={(params) => (
									<TextField
										{...params}
										sx={{ mt: 7 }}
										label="Ангилал сонгох"
									/>
								)}
							/>
						</div>
					</Box>
					<Grid>
						<Divider sx={{ pt: 5 }}></Divider>
						<Box
							display="flex"
							alignItems="flex-end"
							justifyContent="flex-end"
							sx={{ mb: 15, my: 3 }}
						>
							<Button variant="contained" href="/campaign/location">
								Дараагийн алхам: нэмэлт бүлэг
							</Button>
						</Box>
					</Grid>
					<Typography align="center" sx={{ fontSize: '12px', mt: 12 }}>
						Анхаар: Та төслөө засварлах, нуух, устгах тохиолдолд төслийг
						эхлүүлсний дараа хязгаарлагдана.
					</Typography>
				</Container>
			</>
		</Box>
	)
}
