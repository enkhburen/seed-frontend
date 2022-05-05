import Head from 'next/head'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import PageLayout from 'layout/page-layout'
import Button from '@mui/material/Button'
import ProjectsList from 'components/page/projects/projects-list'

export default function ProjectsPage() {
	return (
		<PageLayout>
			<Head>
				<title>Төслүүд - Seed.mn</title>
			</Head>
			<Box sx={{ backgroundColor: '#edf9f3' }}>
				{/* <Container>
					<Box sx={{ textAlign: 'center', pt: 5 }}>
						<Button href="/projects/movies">Кино</Button>
						<Button href="/projects/songs">Дуу</Button>
						<Button href="/projects/clips">Клип</Button>
						<Button href="/projects/events">Эвент</Button>
						<Button href="/projects/other">Бусад</Button>
					</Box>
				</Container> */}
				<ProjectsList />
			</Box>
		</PageLayout>
	)
}
