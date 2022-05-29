import { Box, Container, Button, TextField, Typography } from '@mui/material'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'

export default function ProjectOverview() {
	return (
		<Container sx={{ my: 10 }}>
			<Typography variant="h4">Адал Явдалт Кино Төсөл</Typography>
			<Typography variant="body1" sx={{ mt: 2 }}>
				by enkh
			</Typography>
			<RemoveRedEyeIcon />
			<Button variant="text"></Button>
		</Container>
	)
}
