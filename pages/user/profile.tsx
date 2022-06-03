import Head from 'next/head'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import ProfileInfo from 'components/page/profile/user-infos'
import ProfileDatas from 'components/page/profile/profile-datas'
import PageLayout from 'layout/page-layout'

export default function Profile() {
	const username = 'Guest SEED User Profile'
	return (
		<PageLayout>
			<Head>
				<title>{username}</title>
			</Head>
			<Container sx={{ py: 4 }}>
				<Box sx={{ minHeight: '100vh' }}>
					<ProfileInfo />
					<ProfileDatas />
				</Box>
			</Container>
		</PageLayout>
	)
}
