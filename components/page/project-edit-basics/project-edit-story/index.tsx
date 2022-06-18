import {
	Container,
	Divider,
	Typography,
	Grid,
	Box,
	TextField,
	Button
} from '@mui/material'
import TextareaAutosize from '@mui/material/TextareaAutosize'
import * as React from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'

const description =
	'Та юу хийхээр хөрөнгө босгож байгаа, яагаад үүнд санаа тавьдаг, үүнийг хэрхэн хэрэгжүүлхээр төлөвлөж байгаа, мөн өөрийгөө хэн бэ гэдгээ тайлбарла. Таны тодорхойлолт дэмжигчдэд мэдэх ёстой бүх зүлийг хэлэх ёстой. Боломжтой бол таны төсөл юу болохыг, ямар шагнал урамшуулалтай болохыг харуулахын тулд зураг оруулаарай.'

export default function CampaignStory() {
	return (
		<Container>
			<Box sx={{ my: 4, textAlign: 'center' }}>
				<Typography variant="h4">Гол сэдэв</Typography>
				<Typography variant="body1" sx={{ mt: 2 }}>
					Хүмүүс яагаад таны төсөлд сэтгэл догдлох ёстойг илэрхийлнэ үү. Энгийн
					бөгөөд товч байгаарай.
				</Typography>
			</Box>
			<Divider sx={{ my: 5, mb: 2.3 }} />
			<Box sx={{ mt: 5 }}>
				<Grid container spacing={2}>
					<Grid item xs={12} md={12} sm={4} sx={{ mb: 3 }}>
						<Typography variant="h4">Төслийн тайлбар</Typography>
						<Typography
							variant="body2"
							sx={{ mt: 3, color: '#545454', textAlign: 'justify' }}
						>
							{description}
						</Typography>
					</Grid>
					<Grid item xs={12} md={12} sm={8}>
						<TextField
							id="outlined-multiline-static"
							helperText="Төслийнхөө талаар яг л найздаа ярьж байгаа мэт бичээрэй."
							multiline
							rows={14}
							fullWidth
						/>
					</Grid>
				</Grid>
			</Box>
			<Divider sx={{ my: 5 }} />
			<Box sx={{ my: 5 }}>
				<Grid
					container
					direction="row"
					justifyContent="space-between"
					alignItems="center"
				>
					<Button
						variant="text"
						sx={{ fontSize: '14px' }}
						startIcon={<ArrowBackIosNewIcon />}
						href="/campaign/edit/basics"
					>
						Буцах
					</Button>
					<Button variant="contained" href="#" sx={{ fontSize: '14px' }}>
						Шалгуулах
					</Button>
				</Grid>
			</Box>
		</Container>
	)
}
