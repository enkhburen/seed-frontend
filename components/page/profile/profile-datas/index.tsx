import React, { useState } from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import Button from '@mui/material/Button'

function ProfileDashboard() {
	return (
		<Typography
			variant="h4"
			textAlign="center"
			sx={{ mt: 3, fontWeight: 'bold' }}
		>
			Төслүүд
		</Typography>
	)
}

function ProfileProjects() {
	return (
		<Typography
			variant="h4"
			textAlign="center"
			sx={{ mt: 3, fontWeight: 'bold' }}
		>
			Төслүүд hiij bn
		</Typography>
	)
}

export default function ProfileDatas() {
	const [showData, setShowData] = useState(false)
	const renderData = () => {
		if (showData == false) {
			return ProfileDashboard()
		} else {
			return ProfileProjects()
		}
	}

	const handleClick = (value: any) => {
		setShowData(value)
	}

	return (
		<Container>
			<Divider>
				<Button
					onClick={() => handleClick(false)}
					variant="outlined"
					sx={{ mr: 2 }}
				>
					Dashboard
				</Button>
				<Button onClick={() => handleClick(true)} variant="outlined">
					Төслүүд
				</Button>
			</Divider>

			{renderData()}
		</Container>
	)
}
