import * as React from 'react'
import {
	Avatar,
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	Divider,
	Typography,
	Container,
	Grid,
	CardHeader,
	TextField
} from '@mui/material'
import { useState } from 'react'

const states = [
	{
		value: 'ulaanbaatar',
		label: 'Улаанбаатар'
	},
	{
		value: 'USA',
		label: 'Америк'
	},
	{
		value: 'Germany',
		label: 'Герман'
	}
]

export default function UserInfo() {
	const user = {
		avatar: '/assets/author-thumbs/post-author.jpg',
		name: 'Билгүүтэй Энхболд'
	}

	const handleChange = (event: { target: { name: any; value: any } }) => {
		setValues({
			...values,
			[event.target.name]: event.target.value
		})
	}
	const [values, setValues] = useState({
		firstName: 'Билгүүтэй',
		lastName: 'Энхболд',
		email: 'bilguutei@dev.io',
		phone: '88888888',
		state: 'Улаанбаатар'
	})

	return (
		<Container sx={{ my: 3 }}>
			<Grid container spacing={4}>
				<Grid item xs={4}>
					<Card>
						<CardContent>
							<Box
								sx={{
									alignItems: 'center',
									display: 'flex',
									flexDirection: 'column'
								}}
							>
								<Avatar
									src={user.avatar}
									sx={{
										height: 92,
										mb: 2,
										width: 92
									}}
								/>
								<Typography color="textPrimary" gutterBottom variant="h5">
									{user.name}
								</Typography>
							</Box>
						</CardContent>
						<Divider />
						<CardActions>
							<Button color="primary" fullWidth variant="text">
								Зураг оруулах
							</Button>
						</CardActions>
					</Card>
				</Grid>
				<Grid item xs={8}>
					<form autoComplete="off" noValidate>
						<Card>
							<CardHeader
								subheader="Хувийн мэдээллээ шинэчлэх"
								title="Профайл"
							/>
							<Divider />
							<CardContent>
								<Grid container spacing={3}>
									<Grid item md={6} xs={12}>
										<TextField
											fullWidth
											helperText="Нэрээ оруулна уу."
											label="First name"
											name="Нэр"
											onChange={handleChange}
											required
											size="small"
											value={values.firstName}
											variant="outlined"
										/>
									</Grid>
									<Grid item md={6} xs={12}>
										<TextField
											fullWidth
											helperText="Овогоо оруулна уу"
											label="Овог"
											onChange={handleChange}
											size="small"
											required
											value={values.lastName}
											variant="outlined"
										/>
									</Grid>
									<Grid item md={6} xs={12}>
										<TextField
											fullWidth
											helperText="Имэйлээ оруулна уу."
											label="Имэйл"
											name="email"
											onChange={handleChange}
											size="small"
											required
											value={values.email}
											variant="outlined"
										/>
									</Grid>
									<Grid item md={6} xs={12}>
										<TextField
											fullWidth
											label="Утасны дугаар"
											name="phone"
											onChange={handleChange}
											type="number"
											size="small"
											value={values.phone}
											variant="outlined"
										/>
									</Grid>
									<Grid item md={6} xs={12}>
										<TextField
											fullWidth
											label="Улс"
											name="country"
											onChange={handleChange}
											size="small"
											value={values.state}
											variant="outlined"
										/>
									</Grid>
									<Grid item md={6} xs={12}>
										<TextField
											fullWidth
											label="Байршилаа сонгоно уу."
											name="location"
											onChange={handleChange}
											required
											select
											size="small"
											SelectProps={{ native: true }}
											value={values.state}
											variant="outlined"
										>
											{states.map((option) => (
												<option key={option.value} value={option.value}>
													{option.label}
												</option>
											))}
										</TextField>
									</Grid>
								</Grid>
							</CardContent>
							<Divider />
							<Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
								<Button color="primary" variant="contained">
									Хадгалах
								</Button>
							</Box>
						</Card>
					</form>
				</Grid>
			</Grid>
		</Container>
	)
}
