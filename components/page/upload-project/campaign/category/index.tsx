// undsen page
import * as React from 'react'
import {
	Container,
	Grid,
	MenuItem,
	InputLabel,
	Typography,
	Box,
	Card,
	CardContent,
	Input,
	IconButton,
	TextField,
	Select,
	Button,
	Divider,
	FormControl
} from '@mui/material'
import ImageIcon from '@mui/icons-material/Image'

interface State {
	category: string
	title: string
	subtitle: string
	file: any
	goal: number
}

export default function CategoryPage() {
	const [values, setValues] = React.useState<State>({
		category: '',
		title: '',
		subtitle: '',
		file: null,
		goal: 0
	})
	const [pageNumber, setPageNumber] = React.useState(0)
	const [categoryEmpty, setCategoryEmpty] = React.useState(false)

	const handleInputChanges = (prop: keyof State) => (event: any) => {
		if (prop === 'file') setValues({ ...values, ['file']: event.target.files })
		else setValues({ ...values, [prop]: event.target.value as string })
	}

	const handleSubmit = (e: { preventDefault: () => void }) => {
		const formData = new FormData()

		formData.append('file', values.file, values.file.name)

		console.log(values.file)

		e.preventDefault()
	}

	if (pageNumber === 0) {
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
								onChange={handleInputChanges('category')}
								value={values.category}
								inputProps={{ MenuProps: { disableScrollLock: true } }}
							>
								<MenuItem value="Дуу">Дуу</MenuItem>
								<MenuItem value="Кино">Кино</MenuItem>
								<MenuItem value="Технологи">Технологи</MenuItem>
								<MenuItem value="Бусад">Бусад</MenuItem>
							</Select>
							{categoryEmpty ? (
								<Typography
									variant="body2"
									color="red"
									textAlign="center"
									sx={{ mt: 2 }}
								>
									Ангилалаа сонгоно уу.
								</Typography>
							) : (
								''
							)}
						</FormControl>
					</Box>
					<Divider sx={{ pt: 2 }}></Divider>
					<Box
						display="flex"
						alignItems="flex-end"
						justifyContent="flex-end"
						sx={{ pt: 3 }}
					>
						<Button
							variant="contained"
							onClick={() => {
								values.category !== ''
									? setPageNumber(pageNumber + 1)
									: setCategoryEmpty(true)
							}}
						>
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
	} else if (pageNumber === 1) {
		return (
			<Container>
				<Box
					sx={{ my: 6, textAlign: 'center' }}
					component="form"
					noValidate
					autoComplete="off"
					onSubmit={handleSubmit}
				>
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
								label="Төслийн нэр"
								fullWidth
								required
								onChange={handleInputChanges('title')}
							/>
							<TextField
								sx={{ mt: 5 }}
								onChange={handleInputChanges('subtitle')}
								required
								label="Богино тайлбар"
								multiline
								fullWidth
								rows={3}
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
										<Input
											id="contained-button-file"
											type="file"
											inputProps={{ multiple: true }}
											onChange={handleInputChanges('file')}
										/>
										<IconButton
											color="primary"
											aria-label="upload-picture"
											component="span"
										>
											<ImageIcon sx={{ fontSize: '45px' }} />
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
								onChange={handleInputChanges('goal')}
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
							<Input type="date" />
						</Grid>
					</Grid>
				</Box>
				<Box sx={{ mt: 5 }}>
					<Grid
						container
						direction="row"
						justifyContent="space-between"
						alignItems="center"
					>
						<Grid item>
							<Button
								variant="outlined"
								onClick={() => {
									setPageNumber(pageNumber - 1)
								}}
							>
								Буцах
							</Button>
						</Grid>
						<Grid item>
							<Button
								// href="/campaign/edit/rewards"
								onClick={() => {
									// setPageNumber(pageNumber + 1)
									console.log(values)
								}}
								variant="contained"
								sx={{ fontSize: '14px' }}
								type="submit"
							>
								Дараагийн алхам: Урамшуулал сонгох
							</Button>
						</Grid>
					</Grid>
				</Box>
				<Divider sx={{ my: 8 }} />
			</Container>
		)
	}
}
