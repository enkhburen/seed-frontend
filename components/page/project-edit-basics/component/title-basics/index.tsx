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
import * as React from 'react'
import ImageIcon from '@mui/icons-material/Image'

import NumberFormat, { NumberFormatProps } from 'react-number-format'

interface CustomProps {
	onChange: (event: { target: { name: string; value: string } }) => void
	name: string
}

const NumberFormatCustom = React.forwardRef<NumberFormatProps, CustomProps>(
	function NumberFormatCustom(props, ref) {
		const { onChange, ...other } = props

		return (
			<NumberFormat
				{...other}
				getInputRef={ref}
				onValueChange={(values: { value: any }) => {
					onChange({
						target: {
							name: props.name,
							value: values.value
						}
					})
				}}
				thousandSeparator
				isNumericString
				prefix="₮"
			/>
		)
	}
)

{
	/* TItle, subtitle section */
}

export default function EditBasics() {
	return (
		<>
			<Container sx={{ my: 10, textAlign: 'center' }}>
				<Typography variant="h4">Төсөл засварлах</Typography>
				<p>Хүмүүс таны төслийн талаар сурахад хялбар болго.</p>
			</Container>
			<Divider sx={{ my: 5 }} />
			<Container>
				<Grid container spacing={4}>
					<Grid item xs={4} sx={{ pr: 5 }}>
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
					<Grid item xs={8}>
						<TextField
							sx={{ mt: 2 }}
							required
							id="outlined-campaign-title"
							label="Нэр"
							size="small"
							fullWidth
						></TextField>
						<TextField
							sx={{ mt: 5 }}
							required
							size="small"
							id="outlined-campaign-title"
							label="Тайлбар"
							fullWidth
						></TextField>
					</Grid>
				</Grid>
			</Container>
			{/* Upload Image Section */}

			<Divider sx={{ my: 6 }} />
			<Container>
				<Grid container spacing={4}>
					<Grid item xs={4} sx={{ pr: 5 }}>
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
					<Grid item xs={6} sx={{ mt: 3 }}>
						<Card sx={{ width: 730, height: 165 }}>
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
			</Container>
			<Divider sx={{ my: 6 }} />
			<Container>
				<Grid container spacing={4}>
					<Grid item xs={12} sx={{ pr: 5 }}>
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
				</Grid>
				<Grid item xs={4} sx={{ mt: 3 }}>
					<TextField
						label="₮ Зорилгын хэмжээ"
						name="numberformat"
						id="formatted-numberformat-input"
						fullWidth
						InputProps={{
							inputComponent: NumberFormatCustom as any
						}}
						variant="outlined"
					/>
				</Grid>
			</Container>
			<Divider sx={{ my: 8 }} />
			<Container>
				<Grid container spacing={4}>
					<Grid item xs={4} sx={{ pr: 5 }}>
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
					<Grid item xs={8}></Grid>
				</Grid>
			</Container>
			<Container sx={{ mt: 10 }}>
				<Grid
					container
					justifyContent="flex-end"
					display="flex"
					direction="row"
				>
					<Button
						variant="contained"
						href="/campaign/edit/story"
						sx={{ fontSize: '12px' }}
					>
						Дараагийнх: Гол сэдэв
					</Button>
				</Grid>
			</Container>
			<Divider sx={{ my: 8 }} />
		</>
	)
}
