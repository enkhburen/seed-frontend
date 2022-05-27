import { Container } from '@mui/material'
import Head from 'next/head'
import CategoryPage from 'components/page/upload-project/campaign/category'
import PageLayout from 'layout/page-layout'

export default function category() {
	return (
		<PageLayout>
			<Head>
				<title>Төсөл бүтээх - Seed.mn</title>
			</Head>
			<Container>
				<CategoryPage />
			</Container>
		</PageLayout>
	)
}
