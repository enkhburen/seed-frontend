import React from 'react'
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
	TextField,
	Typography,
	useMediaQuery
} from '@mui/material'

export default function Verify() {
	const [inputRefs, setInputRefs] = React.useState<any[]>([])
	const [values, setValues] = React.useState<string[]>([])
	const inputLength: number = 6

	const handleChange = (event: any, index: number) => {
		event.preventDefault()

		if (event.target.value.length > 1) return

		let updatedValue = [...values]
		updatedValue[index] = event.target.value

		setValues(updatedValue)

		if (inputLength > index + 1 && event.target.value !== '')
			inputRefs[index + 1].current.focus()
	}

	const handleVerify = () => {
		const value: string = values.join('')
	}

	React.useEffect(() => {
		setInputRefs((inputRef) =>
			Array(inputLength)
				.fill(null)
				.map((_, i) => inputRef[i] || React.createRef())
		)

		setValues((value) => Array(inputLength).fill(''))
	}, [])

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
			<FormControl
				sx={{ widht: '300px', display: 'block', textAlign: 'center', py: 2 }}
			>
				{values.map((value: string, index: number) => (
					<OutlinedInput
						key={index}
						placeholder=" - "
						value={value}
						onChange={(event) => handleChange(event, index)}
						inputRef={inputRefs[index]}
						sx={{
							maxHeight: '48px',
							maxWidth: '48px',
							display: 'inline-block',
							mr: 1,
							overflow: 'hidden'
						}}
					/>
				))}
			</FormControl>
			<Button
				variant="contained"
				fullWidth
				type="submit"
				size="small"
				sx={{ backgroundColor: '#127f06', py: 2 }}
				onClick={(e) => handleVerify()}
			>
				Баталгаажуулах
			</Button>
		</Box>
	)
}
