import { Container } from '@mui/material'
import PageLayout from 'layout/page-layout'
import RegisterForm from '../../components/page/signup/RegisterForm'

export default function Register() {
	return (
		<PageLayout>
			<Container sx={{ my: 3, mt: 7 }}>
				<RegisterForm />
			</Container>
		</PageLayout>
	)
}
