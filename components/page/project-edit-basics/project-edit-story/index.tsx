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

export default function CampaignStory() {
	return (
		<>
			<Container sx={{ my: 10, textAlign: 'center' }}>
				<Typography variant="h4">Гол сэдэв</Typography>
				<Typography variant="body1" sx={{ mt: 2 }}>
					Хүмүүс яагаад таны төсөлд сэтгэл догдлох ёстойг илэрхийлнэ үү. Энгийн
					бөгөөд товч байгаарай.
				</Typography>
			</Container>
			<Divider sx={{ my: 10, mb: 2.3 }} />
			<Container sx={{ mt: 5 }}>
				<Grid container spacing={2}>
					<Grid item xs={8} sx={{ pr: 2 }}>
						<Typography variant="h5" sx={{ textAlign: 'justify' }}>
							Төслийн тайлбар
						</Typography>
						<Typography variant="body2" sx={{ mt: 3, color: '#545454' }}>
							Та юу хийхээр хөрөнгө босгож байгаа, яагаад үүнд санаа тавьдаг,
							үүнийг хэрхэн хэрэгжүүлэхээр төлөвлөж байгаа, мөн өөрийгөө хэн бэ
							гэдгээ тайлбарла. Таны тодорхойлолт дэмжигчдэд мэдэх ёстой бүх
							зүйлийг хэлэх ёстой. Боломжтой бол таны төсөл юу болохыг, ямар
							шагнал урамшуулалтай болохыг харуулахын тулд зураг оруулаарай.
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<TextareaAutosize
							aria-label="maximum height"
							placeholder="Төслийнхөө талаар яг л найздаа тайлбарлаж байгаа мэт бичээрэй."
							maxRows={4}
							style={{ height: 300, width: '100%' }}
						></TextareaAutosize>
					</Grid>
				</Grid>
			</Container>
			<Divider sx={{ my: 5 }} />
			<Container sx={{ my: 5 }}>
				<Grid
					container
					direction="row"
					justifyContent="space-between"
					alignItems="center"
				>
					<Button
						variant="text"
						sx={{ fontSize: '12px' }}
						startIcon={<ArrowBackIosNewIcon />}
						href="/campaign/edit/basics"
					>
						Буцах
					</Button>
					<Button variant="contained" href="#" sx={{ fontSize: '12px' }}>
						Шалгуулах
					</Button>
				</Grid>
			</Container>
		</>
	)
}
