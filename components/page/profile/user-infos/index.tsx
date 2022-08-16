import * as React from 'react'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Cookies from 'universal-cookie'
import axios, { AxiosError } from 'axios'
import Router from 'next/router'

const host = 'http://localhost:8000'

export default function ProfileInfo() {
	const cookies = new Cookies()
	const [name, setName] = React.useState()
	const [imgSrc, setImgSrc] = React.useState()

	const token = cookies.get('access_token')

	let text1 = '12 төсөл дэмжсэн'
	let text2 = 'Sample text'

	const getUserData = async function () {
		try {
			await axios.get(host + '/user/profile/' + token).then((res) => {
				if (res.data.message !== 'jwt expired') {
					setName(res.data.first_name)
					res.data.profile_pic !== null ? setImgSrc(res.data.profile_pic) : ''
				} else {
					cookies.remove('access_token', { path: '/' })
					console.log('expired', cookies.get('access_token'))
				}
			})
		} catch (error) {
			axios.isAxiosError(error)
			const err = error as AxiosError
			const errStatus = err.response?.status
			console.log(err)
		}
	}

	getUserData()

	React.useEffect(() => {
		if (cookies.get('access_token') === undefined) {
			Router.push('/auth/login')
		}
	})

	return (
		<Box sx={{ textAlign: 'center' }}>
			{/* Show user datas */}
			<Grid
				container
				justifyContent="center"
				alignItems="center"
				columnSpacing={2}
			>
				<Grid item xs={12} md={12} lg={12} xl={12}>
					<Avatar
						alt="userName"
						src={imgSrc}
						sx={{ height: '128px', width: '128px', margin: '0 auto' }}
					/>
				</Grid>
				<Grid item xs={12} md={12} lg={12} xl={12}>
					<Typography variant="h4" sx={{ fontWeight: 'bold', my: 3 }}>
						{name}
					</Typography>
				</Grid>
				<Grid item xs={12} sx={{ textAlign: 'center' }}>
					<Typography variant="body2">
						{text1} · {text2}
					</Typography>
				</Grid>
			</Grid>
			<Box sx={{ width: '300px', margin: '0 auto', my: 3 }}>
				<Typography variant="body2" sx={{ textAlign: 'justify' }}>
					I used to spend hours writing creative copy, but now all I do is tell
					Rytr what I need and it writes everything for me. It's the ultimate AI
					content writer, and a must-have tool for bloggers, marketers, &
					entrepreneurs.
				</Typography>
			</Box>
		</Box>
	)
}
