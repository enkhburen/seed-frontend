import Head from 'next/head'
import Container from '@mui/material/Container'
import ForgotForm from '../../components/page/forgot/forgotForm'
import PageLayout from 'layout/page-layout'

export default function forgot() {
	return (
		<PageLayout>
			<Head>
				<title>Нууц үг сэргээх | Seed.mn</title>
			</Head>
			<ForgotForm />
		</PageLayout>
	)
}
