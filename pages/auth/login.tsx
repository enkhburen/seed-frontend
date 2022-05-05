import PageLayout from 'layout/page-layout'
import Head from 'next/head'
import Container from '@mui/material/Container'
import LoginForm from '../../components/page/login/loginForm'

export default function Login() {
	return (
		<PageLayout>
			<Head>
				<title>Нэвтрэх - Seed.mn</title>
			</Head>
			<Container sx={{ my: 5 }}>
				<LoginForm />
			</Container>
		</PageLayout>
	)
}
