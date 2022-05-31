import { CheckBox } from '@mui/icons-material'
import {
	Box,
	Button,
	Card,
	CardContent,
	CardHeader,
	Checkbox,
	Divider,
	FormControl,
	FormControlLabel,
	Grid,
	Typography
} from '@mui/material'

export default function Notifications() {
	return (
		<Card>
			<CardHeader title="Мэдэгдэлүүд" />
			<Divider />
			<CardContent>
				<Grid container spacing={4} wrap="wrap">
					<Grid
						item
						md={4}
						sm={6}
						xs={12}
						sx={{ display: 'flex', flexDirection: 'column' }}
					>
						<Typography color="primary" gutterBottom variant="h6">
							Төслүүдийн мэдэгдэлүүд
						</Typography>
						<FormControlLabel
							control={<Checkbox color="primary" defaultChecked />}
							label="Имэйл"
						/>
						<FormControlLabel
							control={<Checkbox color="primary" defaultChecked />}
							label="Сэтгэгдэл"
						/>
						<FormControlLabel
							control={<Checkbox color="primary" />}
							label="Шинэ мессеж"
						/>
					</Grid>
					<Grid
						item
						md={4}
						sm={6}
						xs={12}
						sx={{
							display: 'flex',
							flexDirection: 'column'
						}}
					>
						<Typography color="textPrimary" gutterBottom variant="h6">
							Төслүүдийн талаарх мэдэгдлүүд
						</Typography>
						<FormControlLabel
							control={<Checkbox color="primary" defaultChecked />}
							label="Email"
						/>
						<FormControlLabel control={<Checkbox />} label="Email" />
						<FormControlLabel control={<Checkbox />} label="Email" />
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
	)
}
