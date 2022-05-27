import { Typography } from '@mui/material'
import { useRouter } from 'next/router'

export default function project() {
	const router = useRouter()
	return <Typography>{router.query.name} Төсөл</Typography>
}
