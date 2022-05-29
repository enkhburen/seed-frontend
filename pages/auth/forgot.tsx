import PageLayout from 'layout/page-layout'
import Head from 'next/head'
import Container from '@mui/material/Container'
import ForgotForm from '../../components/page/forgot/forgotForm'

export default function forgot() {
	return (
		<PageLayout>
			<Head>
				<title>Нууц үг сэргээх | Seed.mn</title>
			</Head>
			<Container sx={{ my: 14 }}>
				<ForgotForm />
			</Container>
		</PageLayout>
	)
}
