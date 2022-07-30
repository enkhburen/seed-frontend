import React, { useState } from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import Button from '@mui/material/Button'
import Skeleton from '@mui/material/Skeleton'
import Stack from '@mui/material/Stack'
import Grid from '@mui/material/Grid'

import ProjectList from 'components/page/projects/projects-list/'

function ProfileDashboard() {
	const array = Array(9).fill(undefined)
	return (
		<Box>
			<Typography
				variant="h4"
				textAlign="center"
				sx={{ my: 3, fontWeight: 'bold' }}
			>
				Хянах самбар
			</Typography>
			<Grid container justifyContent="center">
				{array.map((_, index) => (
					<Grid
						item
						key={index}
						lg={3}
						md={3}
						sx={{ display: 'inline-block', m: 2 }}
					>
						<Stack spacing={1}>
							<Skeleton variant="text" width={210} />
							<Skeleton variant="circular" width={40} height={40} />
							<Skeleton variant="rectangular" width={210} height={118} />
						</Stack>
					</Grid>
				))}
			</Grid>
		</Box>
	)
}

function ProfileProjects() {
	return (
		<Box>
			<Typography
				variant="h4"
				textAlign="center"
				sx={{ mt: 3, fontWeight: 'bold' }}
			>
				Төслүүд
			</Typography>
			<ProjectList />
		</Box>
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
					Хянах самбар
				</Button>
				<Button onClick={() => handleClick(true)} variant="outlined">
					Төслүүд
				</Button>
			</Divider>

			{renderData()}
		</Container>
	)
}
