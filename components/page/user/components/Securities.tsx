import {
	Container,
	Grid,
	Card,
	CardHeader,
	Divider,
	CardContent,
	TextField,
	Box,
	Button,
	Paper,
	Typography
} from '@mui/material'
import { flexbox } from '@mui/system'
import { useState } from 'react'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'

export default function Securities() {
	const [values, setValues] = useState({
		password: '',
		confirm: ''
	})

	const handleChange = (event: { target: { name: any; value: any } }) => {
		setValues({
			...values,
			[event.target.name]: event.target.value
		})
	}
	return (
		<Container>
			<Grid
				container
				spacing={3}
				sx={{ justifyContent: 'center', alignItems: 'center' }}
			>
				<Grid item xs={12} md={6}>
					<Card>
						<CardHeader subheader="Нууц үг шинэчлэх" title="Нууц үг" />
						<Divider />
						<CardContent>
							<TextField
								fullWidth
								label="Нууц үг"
								margin="normal"
								name="password"
								onChange={handleChange}
								type="password"
								value={values.password}
								variant="outlined"
							/>
							<TextField
								fullWidth
								label="Нууц үг баталгаажуулах"
								margin="normal"
								name="confirm"
								onChange={handleChange}
								type="password"
								value={values.confirm}
								variant="outlined"
							/>
						</CardContent>
						<Divider />
						<Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
							<Button color="primary" variant="contained">
								Шинэчлэх
							</Button>
						</Box>
					</Card>
				</Grid>
			</Grid>
		</Container>
	)
}
