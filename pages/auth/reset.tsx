import { Container } from '@mui/material'
import PageLayout from 'layout/page-layout'
import Head from 'next/head'
import ResetForm from '../../components/page/reset/resetform'

export default function reset() {
	return (
		<PageLayout>
			<Head>
				<title>Нууц үг шинэчлэх</title>
			</Head>
			<Container sx={{ my: 4, mt: 14, minHeight: '56.5vh' }}>
				<ResetForm />
			</Container>
		</PageLayout>
	)
}
