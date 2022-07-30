// undsen page
import * as React from 'react'
import Router from 'next/router'
import axios, { AxiosError } from 'axios'
import { styled } from '@mui/material/styles'
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
	Paper,
	FormControl
} from '@mui/material'
import Rewards from 'components/page/project-details/rewards'
import NumberFormat, { InputAttributes } from 'react-number-format'

import ImageIcon from '@mui/icons-material/Image'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import CheckIcon from '@mui/icons-material/Check'

import Cookies from 'universal-cookie'

const host = 'http://localhost:8000'

interface State {
	category: string
	title: string
	subtitle: string
	file: any
	goal: number
	date: any
	pledges: any
	money: string
}

const StyledPaper = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#545454' : '#fff',
	...theme.typography.body2,
	padding: theme.spacing(2),
	maxWidth: 700,
	color: theme.palette.text.primary
}))

export default function CategoryPage(): any {
	const cookies = new Cookies()
	const [name, setName] = React.useState()

	const token = cookies.get('access_token')

	React.useEffect(() => {
		getUserData()
		if (cookies.get('access_token') === undefined) {
			Router.push('/auth/login')
		}
	})

	const getUserData = async function () {
		try {
			await axios.get(host + '/user/profile/' + token).then((res) => {
				setName(res.data.first_name)
			})
		} catch (error) {
			axios.isAxiosError(error)
			const err = error as AxiosError
			const errStatus = err.response?.status
		}
	}

	const [values, setValues] = React.useState<State>({
		category: '',
		title: '',
		subtitle: '',
		file: null,
		goal: 0,
		date: '',
		pledges: [],
		money: ''
	})
	const [pageNumber, setPageNumber] = React.useState(0)

	const handleInputChanges = (prop: keyof State) => (event: any) => {
		if (prop === 'file') {
			console.log(event.target.files[0].size)
			if (event.target.files[0].size > 2097152) {
				alert('File is too big!')
			} else setValues({ ...values, ['file']: event.target.files[0] })
		} else if (prop === 'date') {
			let compDate = event.target.value.toString('YYYY-MM-DD')
			setValues({ ...values, ['date']: compDate })
		} else setValues({ ...values, [prop]: event.target.value as string })
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
							<InputLabel
								id="demo-simple-select-label"
								sx={{ fontSize: '14px', fontWeight: 'bold' }}
							>
								Ангилал
							</InputLabel>
							<Select
								labelId="outlined-select-category"
								label="Ангилал"
								onChange={handleInputChanges('category')}
								value={values.category}
								inputProps={{ MenuProps: { disableScrollLock: true } }}
								sx={{ fontSize: '14px' }}
							>
								<MenuItem value="Дуу" sx={{ fontSize: '14px' }}>
									Дуу
								</MenuItem>
								<MenuItem value="Кино" sx={{ fontSize: '14px' }}>
									Кино
								</MenuItem>
								<MenuItem value="Технологи" sx={{ fontSize: '14px' }}>
									Технологи
								</MenuItem>
								<MenuItem value="Бусад" sx={{ fontSize: '14px' }}>
									Бусад
								</MenuItem>
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
						<Button
							sx={{ fontSize: '12px' }}
							variant="contained"
							onClick={() => {
								values.category !== '' ? setPageNumber(pageNumber + 1) : ''
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
				>
					<Typography variant="h4" sx={{ fontSize: '24px' }}>
						Төсөл засварлах
					</Typography>
					<Typography variant="body2">
						Хүмүүс таны төслийн талаар сурахад хялбар болго.
					</Typography>
				</Box>
				<Divider sx={{ my: 5 }} />
				<Box>
					<Grid container spacing={4}>
						<Grid item xs={12} md={4} sm={12} sx={{ pr: 5 }}>
							<Typography
								variant="body1"
								sx={{ textAlign: 'justify', fontWeight: 'bold' }}
							>
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
								InputLabelProps={{ shrink: true }}
								sx={{ mt: 2 }}
								label="Төслийн нэр"
								fullWidth
								required
								onChange={handleInputChanges('title')}
							/>
							<TextField
								InputLabelProps={{ shrink: true }}
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
							<Typography
								variant="body1"
								sx={{ textAlign: 'justify', fontWeight: 'bold' }}
							>
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
											// inputProps={{ multiple: true }}
											onChange={handleInputChanges('file')}
										/>
										<IconButton
											color="primary"
											aria-label="upload-picture"
											component="span"
										>
											<ImageIcon sx={{ fontSize: '45px' }} />
										</IconButton>
										<Typography>Энд зургаа сонгоно уу.</Typography>
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
							<Typography
								variant="body1"
								sx={{ textAlign: 'justify', fontWeight: 'bold' }}
							>
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
								InputLabelProps={{ shrink: true }}
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
							<Typography
								variant="body1"
								sx={{ textAlign: 'justify', fontWeight: 'bold' }}
							>
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
						<Grid item xs={12} md={8} sx={{ mt: 3 }} textAlign={'center'}>
							<Input
								type="date"
								value={values.date}
								onChange={handleInputChanges('date')}
							/>
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
								sx={{ fontSize: '12px' }}
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
								sx={{ fontSize: '12px' }}
								onClick={() => {
									setPageNumber(pageNumber + 1)
									console.log(values)
								}}
								variant="contained"
							>
								Дараагийн алхам: Урамшуулал сонгох
							</Button>
						</Grid>
					</Grid>
				</Box>
				<Divider sx={{ my: 8 }} />
			</Container>
		)
	} else if (pageNumber === 2) {
		return (
			<Container sx={{ minHeight: '76.7vh', mt: 4 }}>
				<Box sx={{ textAlign: 'center' }}>
					<Typography variant="h4" sx={{ fontSize: '24px' }}>
						Урамшуулал нэмэх
					</Typography>
					<Typography variant="body2" sx={{ mt: 2, color: '#545454' }}>
						Төсөлдөө дэмжигчдийг ойртуулж, амьдралд хэрэгжиж байгааг тэмдэглэх
						энгийн, утга учиртай аргуудыг санал болгоорой.
					</Typography>
				</Box>
				<Divider sx={{ mt: 5 }} />
				<Grid container spacing={3} sx={{ my: 5 }}>
					<Grid item xs={12} md={8}>
						<Typography
							variant="body2"
							sx={{ mb: 1, fontSize: '14px', fontWeight: 'bold' }}
						>
							Гарчиг
						</Typography>
						<TextField
							id="rewards-title"
							variant="outlined"
							fullWidth
							required
							size="small"
						/>
						<Divider sx={{ my: 5 }} />
						<Typography
							variant="body2"
							sx={{ mb: 1, fontSize: '14px', fontWeight: 'bold' }}
						>
							Мөнгөн дүн
						</Typography>
						<TextField
							InputLabelProps={{ shrink: true }}
							value={values.money}
							label="₮"
							fullWidth
							id="formatted-numberformat-input"
							variant="outlined"
							size="small"
						/>
						<Divider sx={{ my: 5 }} />
						<Typography
							variant="body2"
							sx={{ mb: 1, fontSize: '14px', fontWeight: 'bold' }}
						>
							Тайлбар
						</Typography>
						<TextField id="rewards-description" rows={4} multiline fullWidth />
						<Divider sx={{ my: 5 }} />
						<Typography
							variant="body2"
							sx={{ mb: 1, fontSize: '14px', fontWeight: 'bold' }}
						>
							Хүргэгдэх хугацаа
						</Typography>
						<Typography variant="caption">
							Give yourself plenty of time. It's better to deliver to backers
							ahead of schedule than behind.
						</Typography>
						<Box sx={{ mt: 4 }}></Box>
						<Divider sx={{ my: 7 }} />
						<Typography
							variant="body2"
							sx={{ mb: 1, fontSize: '14px', fontWeight: 'bold' }}
						>
							Тоо хэмжээ
						</Typography>
						<Typography variant="caption">
							Хэрэв бөөнөөр үйлдвэрлэх эсвэл тээвэрлэх боломжгүй бол бүх
							дэмжигчдэд олгох хэмжээг хязгаарлаарай. Та зөвхөн эхлүүлсний дараа
							тогтоосон хэмжээг нэмэгдүүлэх боломжтой.
						</Typography>
						<TextField
							sx={{ mt: 3 }}
							variant="outlined"
							type="number"
							size="small"
							fullWidth
						/>
					</Grid>
					<Grid item xs={12} md={4} sx={{ mt: 4 }}>
						<Rewards />
					</Grid>
				</Grid>

				<Box sx={{ mt: 5 }}>
					<Grid
						container
						direction="row"
						justifyContent="space-between"
						alignItems="center"
					>
						<Grid item>
							<Button
								sx={{ fontSize: '12px' }}
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
								sx={{ fontSize: '12px' }}
								onClick={() => {
									setPageNumber(pageNumber + 1)
									console.log(values)
								}}
								variant="contained"
							>
								Дараагийн алхам: Гол сэдэв
							</Button>
						</Grid>
					</Grid>
				</Box>
				<Divider sx={{ my: 8 }} />
			</Container>
		)
	} else if (pageNumber === 3) {
		return (
			<Container>
				<Box sx={{ my: 4, textAlign: 'center' }}>
					<Typography variant="h4" sx={{ fontSize: '24px' }}>
						Гол сэдэв
					</Typography>
					<Typography variant="body2" sx={{ mt: 2 }}>
						Хүмүүс яагаад таны төсөлд сэтгэл догдлох ёстойг илэрхийлнэ үү.
						Энгийн бөгөөд товч байгаарай.
					</Typography>
				</Box>
				<Divider sx={{ my: 5, mb: 2.3 }} />
				<Box sx={{ mt: 5 }}>
					<Grid container spacing={2}>
						<Grid item xs={12} md={12} sm={4} sx={{ mb: 3 }}>
							<Typography variant="body1" sx={{ fontWeight: ' bold' }}>
								Төслийн тайлбар
							</Typography>
							<Typography
								variant="body2"
								sx={{ mt: 2, color: '#545454', textAlign: 'justify' }}
							>
								Та юу хийхээр хөрөнгө босгож байгаа, яагаад үүнд санаа тавьдаг,
								үүнийг хэрхэн хэрэгжүүлхээр төлөвлөж байгаа, мөн өөрийгөө хэн бэ
								гэдгээ тайлбарла. Таны тодорхойлолт дэмжигчдэд мэдэх ёстой бүх
								зүлийг хэлэх ёстой. Боломжтой бол таны төсөл юу болохыг, ямар
								шагнал урамшуулалтай болохыг харуулахын тулд зураг оруулаарай.
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
				<Box sx={{ mt: 5 }}>
					<Grid
						container
						direction="row"
						justifyContent="space-between"
						alignItems="center"
					>
						<Grid item>
							<Button
								sx={{ fontSize: '12px' }}
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
								sx={{ fontSize: '12px' }}
								onClick={() => {
									setPageNumber(pageNumber + 1)
									console.log(values)
								}}
								variant="contained"
								type="submit"
							>
								Төслөө хянах
							</Button>
						</Grid>
					</Grid>
				</Box>
				<Divider sx={{ my: 8 }} />
			</Container>
		)
	} else if (pageNumber === 4) {
		return (
			<Container fixed sx={{ my: 10 }}>
				<Typography variant="h5" sx={{ fontWeight: ' bold' }}>
					{values.title}
				</Typography>
				<Typography variant="body2" sx={{ mt: 2 }}>
					Зохиогч: {name || 'username'}
				</Typography>

				<Divider sx={{ my: 5 }} />
				<Typography variant="h5" sx={{ pb: 2 }}>
					Төсөл байршуулах үйл явц
				</Typography>
				<Grid
					container
					display="flex"
					justifyContent="flex-start"
					alignItems="flex=start"
				>
					<Box sx={{ overflow: 'hidden', px: 3 }}>
						<StyledPaper
							sx={{
								my: 1,
								mx: 'auto',
								p: 2,
								width: 700
							}}
						>
							<Grid container wrap="nowrap" spacing={2}>
								<Grid item>
									<CheckIcon fontSize="large" />
								</Grid>
								<Grid item xs zeroMinWidth>
									<Typography noWrap>Sample Text</Typography>
								</Grid>
							</Grid>
						</StyledPaper>
						<StyledPaper
							sx={{
								my: 1,
								mx: 'auto',
								p: 2
							}}
						>
							<Grid container wrap="nowrap" spacing={2}>
								<Grid item>
									<CheckIcon fontSize="large" />
								</Grid>
								<Grid item xs>
									<Typography noWrap>Sample Text</Typography>
								</Grid>
							</Grid>
						</StyledPaper>
						<StyledPaper
							sx={{
								my: 1,
								mx: 'auto',
								p: 2
							}}
						>
							<Grid container wrap="nowrap" spacing={2}>
								<Grid item>
									<CheckIcon fontSize="large" />
								</Grid>
								<Grid item xs>
									<Typography>Sample Text</Typography>
								</Grid>
							</Grid>
						</StyledPaper>
					</Box>
				</Grid>
				<Box sx={{ mt: 5 }}>
					<Grid
						container
						direction="row"
						justifyContent="space-between"
						alignItems="center"
					>
						<Grid item>
							<Button
								sx={{ fontSize: '12px' }}
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
								sx={{ fontSize: '12px' }}
								onClick={() => {
									console.log(values)
								}}
								variant="contained"
								type="submit"
							>
								Шалгуулах
							</Button>
						</Grid>
					</Grid>
				</Box>
			</Container>
		)
	}
}
