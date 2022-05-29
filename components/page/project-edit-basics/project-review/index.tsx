import {
	Box,
	Container,
	Button,
	TextField,
	Typography,
	Grid,
	Divider,
	List,
	ListItem,
	ListItemAvatar,
	Avatar
} from '@mui/material'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'

export default function ProjectHeader() {
	return (
		<Container fixed sx={{ my: 10 }}>
			<Typography variant="h4">Адал Явдалт Кино Төсөл</Typography>
			<Typography variant="body1" sx={{ mt: 2 }}>
				by enkh
			</Typography>
			<Grid sx={{ mt: 5 }}>
				<Button variant="text" startIcon={<RemoveRedEyeIcon />} href="#">
					Урьдчилж харах
				</Button>
			</Grid>
			<Grid sx={{ mt: 15 }}>
				<Divider />
			</Grid>
		</Container>
	)
}
