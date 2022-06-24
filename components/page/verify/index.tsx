import React from 'react'
import { useRouter } from 'next/router'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import {
	Box,
	Button,
	FormControl,
	Typography,
	Container,
	OutlinedInput
} from '@mui/material'

export default function Verify() {
	const router = useRouter()
	const formik = useFormik({
		initialValues: {
			OTP: ''
		},
		validationSchema: Yup.object({
			OTP: Yup.string().required(
				'Имэйл дээр тань ирсэн 6 оронтой тоог оруулна уу'
			)
		}),
		onSubmit: () => {
			router.push('/user/profile')
		}
	})
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
				onSubmit={formik.handleSubmit}
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
							placeholder="-"
							value={value}
							onChange={(event) => handleChange(event, index)}
							inputRef={inputRefs[index]}
							sx={{
								maxHeight: '42px',
								maxWidth: '42px',
								display: 'inline-block',
								mr: 1,
								overflow: 'hidden',
								mt: 2
							}}
						/>
					))}
				</FormControl>
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
