import * as React from 'react'
import {
	Container,
	MenuItem,
	InputLabel,
	Typography,
	Box,
	Select,
	SelectChangeEvent,
	Button,
	FormControl,
	TextField,
	Grid,
	Card,
	CardContent,
	IconButton,
	Input
} from '@mui/material'
import { Divider } from '@mui/material'
import ImageIcon from '@mui/icons-material/Image'

interface IProps {
	currentPage?: number
	cate?: string
}

const categories = [
	{
		title: 'Дуу'
	},
	{
		title: 'Кино'
	},
	{
		title: 'Технологи'
	},
	{
		title: 'Бусад'
	}
]
export default function CategoryPage(props: IProps): any {
	let { currentPage, cate } = props
	const [page, setPage] = React.useState<number>(currentPage)
	const [category, setCategory] = React.useState('category')

	const handleChange = (event: SelectChangeEvent) => {
		setCategory(event.target.value as string)
		setPage(page + 1)
		console.log(page)
	}

	return (
		<Box
			sx={{
				minHeight: '80vh',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center'
			}}
		>
			<Container maxWidth="sm">
				<Typography
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

				<Box sx={{ mt: 7 }}>
					<FormControl fullWidth>
						<InputLabel id="demo-simple-select-label">Ангилал</InputLabel>
						<Select
							labelId="outlined-select-category"
							label="Ангилал"
							value={category}
							inputProps={{ MenuProps: { disableScrollLock: true } }}
							onChange={handleChange}
						>
							{categories.map((option, index) => (
								<MenuItem key={index} value={option.title}>
									{option.title}
								</MenuItem>
							))}
						</Select>
					</FormControl>
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

				<Typography
					align="center"
					variant="body2"
					sx={{ fontSize: '12px', mt: 12 }}
				>
					Анхаар: Та төслөө засварлах, нуух, устгах тохиолдолд төслийг
					эхлүүлсний дараа хязгаарлагдана.
				</Typography>
			</Container>
		</Box>
	)
}
