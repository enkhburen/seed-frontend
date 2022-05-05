import PageLayout from 'layout/page-layout'
import Head from 'next/head'
import RegisterForm from '../../components/page/signup/RegisterForm'
import Container from '@mui/material/Container'

export default function Register() {
	return (
		<PageLayout>
			<Head>
				<title>Бүртгүүлэх - Seed.mn</title>
			</Head>
			<Container sx={{ my: 5 }}>
				<RegisterForm />
			</Container>
		</PageLayout>
	)
}
