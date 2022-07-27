import * as React from 'react'

import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { Divider, Grid, TextField, Box, Button } from '@mui/material'
import Rewards from 'components/page/project-details/rewards'
import NumberFormat, { InputAttributes } from 'react-number-format'
// import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker'
// import { LocalizationProvider } from '@mui/x-date-pickers'

// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'

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
})

interface State {
	numberformat: string
}

export default function RewardsEdit() {
	const [value, setValue] = React.useState<Date | null>(new Date('2022-06'))
	const handleDate = (newValue: Date | null) => {
		setValue(newValue)
	}
	const [values, setValues] = React.useState<State>({ numberformat: '1320' })
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValues({
			...values,
			[event.target.name]: event.target.value
		})
	}
	return (
		<Container sx={{ minHeight: '76.7vh', mt: 4 }}>
			<Box sx={{ textAlign: 'center' }}>
				<Typography variant="h4">Урамшуулал нэмэх</Typography>
				<Typography variant="body2" sx={{ mt: 2, color: '#545454' }}>
					Төсөлдөө дэмжигчдийг ойртуулж, амьдралд хэрэгжиж байгааг тэмдэглэх
					энгийн, утга учиртай аргуудыг санал болгоорой.
				</Typography>
			</Box>
			<Divider sx={{ mt: 5 }} />
			<Grid container spacing={3} sx={{ my: 5 }}>
				<Grid item xs={12} md={8}>
					<Typography variant="body1" sx={{ mb: 1 }}>
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
					<Typography variant="subtitle1" sx={{ mb: 1 }}>
						Мөнгөн дүн
					</Typography>
					<TextField
						value={values.numberformat}
						onChange={handleChange}
						label="₮"
						fullWidth
						id="formatted-numberformat-input"
						InputProps={{
							inputComponent: NumberFormatCustom as any
						}}
						variant="outlined"
						size="small"
					/>
					<Divider sx={{ my: 5 }} />
					<Typography variant="subtitle1" sx={{ mb: 1 }}>
						Тайлбар
					</Typography>
					<TextField id="rewards-description" rows={4} multiline fullWidth />
					<Divider sx={{ my: 5 }} />
					<Typography variant="subtitle1" sx={{ mb: 1 }}>
						Хүргэгдэх хугацаа
					</Typography>
					<Typography variant="body2">
						Give yourself plenty of time. It's better to deliver to backers
						ahead of schedule than behind.
					</Typography>
					<Box sx={{ mt: 4 }}>
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
					</Box>
					<Divider sx={{ my: 7 }} />
					<Typography variant="subtitle1" sx={{ mb: 1 }}>
						Тоо хэмжээ
					</Typography>
					<Typography variant="body2">
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

			<Box
				display="flex"
				alignItems="center"
				justifyContent="center"
				sx={{ my: 2 }}
			>
				<Button fullWidth variant="contained" href="/campaign/edit/story">
					Дараагийн алхам: Гол сэдэв
				</Button>
			</Box>
			<Box sx={{ my: 2 }}>
				<Button fullWidth variant="outlined">
					Буцах
				</Button>
			</Box>
		</Container>
	)
}
