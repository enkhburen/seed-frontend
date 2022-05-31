import {
	Typography,
	Container,
	Grid,
	Card,
	CardContent,
	CardHeader,
	Divider,
	TextField,
	Button,
	Box
} from '@mui/material'
import { useState } from 'react'
import * as React from 'react'

const states = [
	{
		value: 'SBD',
		label: 'Сүхбаатар дүүрэг'
	},
	{
		value: 'BZD',
		label: 'Баянзүрх дүүрэг'
	},
	{
		value: 'CHN',
		label: 'Чингэлтэй дүүрэг'
	}
]

export default function Shipping() {
	const handleChange = (event: { target: { name: any; value: any } }) => {
		setValues({
			...values,
			[event.target.name]: event.target.value
		})
	}

	const [values, setValues] = useState({
		states: 'Сүхбаатар дүүрэг',
		fullName: 'Bilguutei Enkhbold'
	})

	return (
		<Container>
			<Grid container spacing={10}>
				<Grid item md={6} xs={12}>
					<Card>
						<CardHeader title="Хүргэлтийн хаяг" />
						<Divider />
						<CardContent>
							<TextField
								fullWidth
								name="City"
								label="Дүүрэг"
								onChange={handleChange}
								required
								size="small"
								select
								value={values.states}
								SelectProps={{ native: true }}
								variant="outlined"
								sx={{ mt: 3 }}
							>
								{states.map((option) => (
									<option key={option.value} value={option.value}>
										{option.label}
									</option>
								))}
							</TextField>
							<TextField
								fullWidth
								label="Нэр"
								name="name"
								required
								size="small"
								variant="outlined"
								value={values.fullName}
								sx={{ mt: 4 }}
							/>
							<TextField
								fullWidth
								helperText="Утасны дугаар (Сонголтот)"
								name="phone"
								type="number"
								size="small"
								variant="outlined"
								sx={{ mt: 4 }}
							/>
							<TextField
								id="outlined-multiline-flexible"
								label="Дэлгэрэнгүй хаяг"
								multiline
								helperText="Та хаягаа зөв дэлгэрэнгүй, тодорхой оруулаагүйгээс үүдэн хүргэлт удаашрах, эсвэл хүргэгдэхгүй байж болзошгүйг анхаарна уу."
								rows={5}
								fullWidth
								sx={{ mt: 3 }}
							/>
						</CardContent>
					</Card>
					<Divider />
					<Box>
						<Button
							color="primary"
							variant="contained"
							fullWidth
							sx={{ mt: 2 }}
						>
							Хадгалах
						</Button>
					</Box>
				</Grid>
				<Grid item xs={4} md={6}>
					<Card>
						<CardHeader title="Хадгалагдсан хаягууд" />
						<Divider />
						<CardContent>
							<Typography variant="caption" alignItems="center">
								Та одоогоор ямар ч хаяг хадгалаагүй байна.
							</Typography>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</Container>
	)
}
