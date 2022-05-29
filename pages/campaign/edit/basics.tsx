import PageLayout from 'layout/page-layout'
import Head from 'next/head'
import EditBasics from 'components/page/project-edit-basics/component/title-basics'
import { Container } from '@mui/material'

export default function ProjectBasics() {
	return (
		<PageLayout>
			<Head>
				<title>Төсөл засварлах - Seed.mn</title>
			</Head>
			<EditBasics />
		</PageLayout>
	)
}
