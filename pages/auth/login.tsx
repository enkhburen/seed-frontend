import PageLayout from 'layout/page-layout'
import LoginForm from '../../components/page/login/loginForm'

import Container from '@mui/material/Container'

export default function Login() {
	return (
		<PageLayout>
			<Container sx={{ my: 5 }}>
				<LoginForm />
			</Container>
		</PageLayout>
	)
}
