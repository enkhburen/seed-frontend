import PageLayout from 'layout/page-layout'
import Head from 'next/head'
import Container from '@mui/material/Container'
import Verify from 'components/page/verify'

export default function VerifyPassword() {
	return (
		<PageLayout>
			<Head>
				<title>Батлагаажуулалт | Seed.mn</title>
			</Head>
			<Container sx={{ my: 21 }}>
				<Verify />
			</Container>
		</PageLayout>
	)
}
