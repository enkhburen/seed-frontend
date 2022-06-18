import * as React from 'react'
import {
	Container,
	Divider,
	Typography,
	Grid,
	Box,
	TextField,
	Card,
	CardContent,
	IconButton,
	Input,
	Button
} from '@mui/material'

import ImageIcon from '@mui/icons-material/Image'

export default function EditBasics() {
	return (
		<Container>
			<Box sx={{ my: 6, textAlign: 'center' }}>
				<Typography variant="h4">Төсөл засварлах</Typography>
				<Typography variant="body2">
					Хүмүүс таны төслийн талаар сурахад хялбар болго.
				</Typography>
			</Box>
			<Divider sx={{ my: 5 }} />
			<Box>
				<Grid container spacing={4}>
					<Grid item xs={12} md={4} sm={12} sx={{ pr: 5 }}>
						<Typography variant="h5" sx={{ textAlign: 'justify' }}>
							Төслийн гарчиг
						</Typography>
						<Typography
							variant="body2"
							sx={{ mt: 3, textAlign: 'justify', color: '#545454' }}
						>
							Хүмүүст төслөө хурдан ойлгоход нь туслахын тулд тодорхой, товч
							гарчиг, хадмал гарчиг бичнэ үү. Аль аль нь таны төсөл болон
							нээлтийн өмнөх хуудсан дээр гарч ирхэх болно.
						</Typography>
					</Grid>
					<Grid item xs={12} md={8}>
						<TextField
							sx={{ mt: 2 }}
							required
							id="outlined-campaign-title"
							label="Төслийн нэр"
							fullWidth
						></TextField>
						<TextField
							sx={{ mt: 5 }}
							id="outlined-multiline-static"
							label="Богино тайлбар"
							multiline
							fullWidth
							rows={3}
							defaultValue=""
						/>
					</Grid>
				</Grid>
			</Box>

			{/* Upload Image Section */}

			<Divider sx={{ my: 6 }} />
			<Box>
				<Grid container spacing={4}>
					<Grid item xs={12} md={4} sm={12} sx={{ pr: 5 }}>
						<Typography variant="h5" sx={{ textAlign: 'justify' }}>
							Төслийн зураг
						</Typography>
						<Typography
							variant="body2"
							sx={{
								mt: 3,
								textAlign: 'justify',
								color: '#545454'
							}}
						>
							Таны зураг хамгийн багадаа 1024x576 пиксел байх ёстой. Ингэснээр
							зураг 16:9 харьцаатай гарч ирэх болно.
						</Typography>
					</Grid>
					<Grid item xs={12} md={8} sm={12}>
						<Card>
							<CardContent sx={{ textAlign: 'center' }}>
								<label htmlFor="contained-button-file">
									<Input id="contained-button-file" type="file" />
									<IconButton
										color="primary"
										aria-label="upload-picture"
										component="span"
									>
										<ImageIcon sx={{ fontSize: '55px' }} />
									</IconButton>
									<Typography>
										Энд зурагаа чирж авчрах эсвэл сонгоно уу.
									</Typography>
									<Typography variant="caption">
										Зураг 120 MB-аас ихгүй JPG, PNG төрлийнх байх ёстой.
									</Typography>
								</label>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</Box>
			<Divider sx={{ my: 6 }} />
			<Box>
				<Grid container spacing={4}>
					<Grid item xs={12} md={4} sm={12} sx={{ pr: 5 }}>
						<Typography variant="h5" sx={{ textAlign: 'justify' }}>
							Санхүүжилтын зорилго
						</Typography>
						<Typography
							variant="body2"
							sx={{ mt: 3, textAlign: 'justify', color: '#545454' }}
						>
							Төслөө дуусгахад шаардлагатай зүйлээ багтаасан хүрч болохуйц
							зорилго тавь. Хэрэв та зорилгодоо хүрээгүй тохиолдолд мөнгө авах
							боломжгүй.
						</Typography>
					</Grid>
					<Grid item xs={12} md={8} sx={{ mt: 3 }}>
						<TextField
							label="Зорилгын хэмжээ (₮)"
							name="numberformat"
							id="formatted-numberformat-input"
							type="number"
							required
							fullWidth
							variant="outlined"
						/>
					</Grid>
				</Grid>
			</Box>
			<Divider sx={{ my: 5.8 }} />
			<Box>
				<Grid container spacing={4}>
					<Grid item xs={12} md={4} sm={12} sx={{ pr: 5 }}>
						<Typography variant="h5" sx={{ textAlign: 'justify' }}>
							Кампанит ажлын үргэлжлэх хугацаа
						</Typography>
						<Typography
							variant="body2"
							sx={{ mt: 3, textAlign: 'justify', color: '#545454' }}
						>
							Өөрийн кампанит ажлын цагийн хязгаарыг тогтооно уу. Та үүнийг
							дараа өөрчлөх боломжгүй.
						</Typography>
					</Grid>
					{/* <Grid item xs={8}></Grid> */}
				</Grid>
			</Box>
			<Box sx={{ mt: 5 }}>
				<Grid
					container
					justifyContent="flex-end"
					display="flex"
					direction="row"
				>
					<Button
						variant="contained"
						href="/campaign/edit/story"
						sx={{ fontSize: '14px' }}
					>
						Дараагийнх: Гол сэдэв
					</Button>
				</Grid>
			</Box>
			<Divider sx={{ my: 8 }} />
		</Container>
	)
}
