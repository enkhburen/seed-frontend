import {
	Box,
	Container,
	Button,
	TextField,
	Typography,
	Grid,
	Divider,
	Paper,
	Avatar
} from '@mui/material'
import { styled } from '@mui/material/styles'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import CheckIcon from '@mui/icons-material/Check'
import { width } from '@mui/system'

const StyledPaper = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#545454' : '#fff',
	...theme.typography.body2,
	padding: theme.spacing(2),
	maxWidth: 700,
	color: theme.palette.text.primary
}))

const message = 'sdsdsdsdsds'

export default function ProjectHeader() {
	return (
		<>
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
			</Container>
			<Divider sx={{ my: 5 }} />
			<Container>
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
									<Typography noWrap>{message}</Typography>
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
									<Typography noWrap>{message}</Typography>
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
									<Typography>{message}</Typography>
								</Grid>
							</Grid>
						</StyledPaper>
					</Box>
				</Grid>
			</Container>
		</>
	)
}
