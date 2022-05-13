import { Formik } from 'formik'
import * as yup from 'yup'
import useScriptRef from 'hooks/useScriptRef'

import {
	Box,
	Button,
	Checkbox,
	Divider,
	FormControl,
	FormControlLabel,
	FormHelperText,
	Grid,
	IconButton,
	InputAdornment,
	InputLabel,
	OutlinedInput,
	Stack,
	Typography,
	useMediaQuery
} from '@mui/material'

export default function Verify() {
	return (
		<Box
			width="40%"
			component="form"
			noValidate
			autoComplete="off"
			sx={{
				border: '1px solid rgba(0,0,0,0.1)',
				borderRadius: '2px',
				mx: 'auto',
				py: 3,
				px: 5
			}}
		>
			<Typography
				variant="h4"
				component="h1"
				textAlign="center"
				fontWeight="bold"
				sx={{
					mb: 2
				}}
			>
				Имэйлээ шалгана уу!
			</Typography>
			<Typography variant="h5" textAlign="center" sx={{ fontSize: '1rem' }}>
				example@gmail.com руу илгээсэн 6 оронтой баталгаажуулах кодыг оруулна
				уу.
			</Typography>
		</Box>
	)
}
