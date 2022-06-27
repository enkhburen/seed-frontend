import React from 'react'
import {
	Box,
	Button,
	FormControl,
	OutlinedInput,
	Typography,
	Container
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
		<Container maxWidth="sm" sx={{ minHeight: '58.5vh' }}>
			<Box
				component="form"
				noValidate
				autoComplete="off"
				sx={{
					border: '1px solid rgba(0,0,0,0.1)',
					mx: 'auto',
					py: 3,
					px: 2
				}}
			>
				<Typography
					variant="h4"
					textAlign="center"
					fontWeight="bold"
					sx={{
						mb: 2
					}}
				>
					Имэйлээ шалгана уу!
				</Typography>
				<Typography
					variant="body2"
					textAlign="center"
					sx={{ fontSize: '1rem' }}
				>
					email state руу илгээсэн 6 оронтой баталгаажуулах кодыг оруулна уу.
				</Typography>
				<Box
					sx={{
						textAlign: 'center',
						display: 'flex',
						py: 2,
						alignItems: 'center',
						justifyContent: 'center'
					}}
				>
					{values.map((value: string, index: number) => (
						<FormControl
							key={index}
							sx={{
								display: 'inline-block',
								mr: 1,
								mt: 2
							}}
							variant="outlined"
						>
							<OutlinedInput
								sx={{
									maxHeight: '48px',
									maxWidth: '48px',
									textAlign: 'center'
								}}
								placeholder="-"
								value={value}
								onChange={(event) => handleChange(event, index)}
								inputRef={inputRefs[index]}
							/>
						</FormControl>
					))}
				</Box>
			</Box>
			<Button
				variant="contained"
				fullWidth
				type="submit"
				size="medium"
				sx={{ mb: 2, mt: 1 }}
			>
				Баталгаажуулах
			</Button>
		</Container>
	)
}
