import PageLayout from 'layout/page-layout'
import Head from 'next/head'
import UserEdit from 'components/page/user/edit-profile/'
import { Divider } from '@mui/material'

export default function ProfileEdit() {
	return (
		<PageLayout>
			<Head>
				<title>Хэрэглэгчийн Тохиргоо - Seed.mn</title>
			</Head>
			<Divider sx={{ my: 1 }} />
			<UserEdit />
		</PageLayout>
	)
}
