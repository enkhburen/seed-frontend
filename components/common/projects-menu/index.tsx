import { AppBar, Container, Grid, Typography } from '@mui/material'
import SeedLogoBlack from 'public/assets/logo/seed_logo_black.svg'

export default function ProjectsMenu() {
	return (
		<AppBar
			position="fixed"
			color="default"
			sx={{
				display: {
					xs: 'none',
					md: 'block',
					background: 'fff',
					boxShadow: 'None'
				},
				zIndex: 10
			}}
		>
			<Container>
				<Grid
					container
					justifyContent="Space-between"
					alignItems="center"
					spacing={3}
				>
					<Link>
						<a>
							<Image width="160" src={SeedLogoBlack} alt="Seedlogoblack" />
						</a>
					</Link>
				</Grid>
			</Container>
		</AppBar>
	)
}
