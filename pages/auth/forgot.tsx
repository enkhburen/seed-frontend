import PageLayout from 'layout/page-layout'
import Head from 'next/head'
import Container from '@mui/material/Container'
// import ForgotForm from '../../components/page/forgot/forgotForm'

export default function Forgot() {
	return (
		<PageLayout>
			<Head>
				<title>Нууц үг сэргээх - Seed.mn</title>
			</Head>
			<Container sx={{ my: 5 }}>{/* <ForgotForm /> */}</Container>
		</PageLayout>
	)
}
