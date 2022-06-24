import { useRouter } from 'next/router'
import * as React from 'react'
import { useState, useEffect } from 'react'
import NumberFormat, { InputAttributes } from 'react-number-format'

import {
	Divider,
	Typography,
	Grid,
	Box,
	TextField,
	Card,
	CardContent,
	IconButton,
	Input,
	InputAdornment
} from '@mui/material'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import ImageIcon from '@mui/icons-material/Image'

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'

import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker'

interface State {
	numberformat: string
}

interface CustomProps {
	onChange: (event: { target: { name: string; value: string } }) => void
	name: string
}

const NumberFormatCustom = React.forwardRef<
	NumberFormat<InputAttributes>,
	CustomProps
>(function NumberFormatCustom(props, ref) {
	const { onChange, ...other } = props

	return (
		<NumberFormat
			{...other}
			getInputRef={ref}
			onValueChange={(values) => {
				onChange({
					target: {
						name: props.name,
						value: values.value
					}
				})
			}}
			thousandSeparator
			isNumericString
		/>
	)
})
export default function EditBasics() {
	const [value, setValue] = React.useState<Date | null>(new Date('2022-06'))
	const handleDate = (newValue: Date | null) => {
		setValue(newValue)
	}

	const router = useRouter()

	const [title, setTitle] = useState('')
	const [subtitle, setSubtitle] = useState('')
	const [titleError, setTitleError] = useState('false')
	const [subtitleError, setSubtitleError] = useState('false')

	const handleSubmit = (e: { preventDefault: () => void }) => {
		e.preventDefault()
		setTitleError
		setSubtitleError

		if (title == '') {
			setTitleError
		}
		if (subtitle == '') {
			setSubtitleError
		}
	}

	const [values, setValues] = React.useState<State>({
		numberformat: ''
	})

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValues({
			...values,
			[event.target.name]: event.target.value
		})
	}

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

			{/* Project form section  */}

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
							onChange={(e) => setTitle(e.target.value)}
						/>
						<TextField
							sx={{ mt: 5 }}
							onChange={(e) => setSubtitle(e.target.value)}
							required
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

			{/* Upload Image Section End */}

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
							label="Зорилгын хэмжээ"
							name="numberformat"
							InputProps={{
								inputComponent: NumberFormatCustom as any,
								startAdornment: (
									<InputAdornment position="start">₮</InputAdornment>
								)
							}}
							value={values.numberformat}
							onChange={handleChange}
							id="formatted-numberformat-input"
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
					<Grid item xs={8}>
						<LocalizationProvider dateAdapter={AdapterDateFns}>
							<DesktopDatePicker
								label="Он | Сар"
								views={['year', 'month']}
								value={value}
								onChange={handleDate}
								minDate={new Date('2022-06-01')}
								maxDate={new Date('2023-12-31')}
								renderInput={(params) => (
									<TextField fullWidth required {...params} />
								)}
							/>
						</LocalizationProvider>
					</Grid>
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
						href="/campaign/edit/rewards"
						sx={{ fontSize: '14px' }}
						type="submit"
					>
						Дараагийн алхам: Урамшуулал сонгох
					</Button>
				</Grid>
			</Box>
			<Divider sx={{ my: 8 }} />
		</Container>
	)
}
