import {
	Autocomplete,
	Box,
	Container,
	MenuItem,
	TextField,
	Typography
} from '@mui/material'
import * as React from 'react'
import { Divider, Grid, Button } from '@mui/material'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'

interface CountryType {
	code: string
	label: string
	phone: string
	suggested?: boolean
}

const countries: readonly CountryType[] = [
	{ code: 'AU', label: 'Австрали', phone: '61' },
	{
		code: 'MN',
		label: 'Монгол Улс',
		phone: '976',
		suggested: true
	}
]

export default function Campaignlocation() {
	return (
		<Box>
			<Container disableGutters maxWidth="sm" component="main" sx={{ my: 8 }}>
				<Typography
					component="h1"
					variant="h4"
					align="center"
					gutterBottom
					sx={{ fontWeight: 'medium' }}
				>
					Төслийнхөө байршлыг сонгоно уу.
				</Typography>
				<Typography variant="body1" align="center" sx={{ mt: 3 }}>
					Хэрэв та хувь хүн хөрөнгө босгож байгаа бол хууль ёсны оршин суугаа
					улсаа сонгоно уу. Хэрэв та бизнес эсвэл ашгийн бус байгууллагад
					хөрөнгө босгож байгаа бол тухайн байгууллагын татварын ID бүртгэлтэй
					улсыг сонгоно уу.
				</Typography>
				<Autocomplete
					id="country-select-demo"
					sx={{ mt: 7 }}
					fullWidth
					options={countries}
					autoHighlight
					getOptionLabel={(option) => option.label}
					renderOption={(props, option) => (
						<Box
							component="li"
							sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
							{...props}
						>
							<img
								loading="lazy"
								width="20"
								src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
								srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
								alt=""
							/>
							{option.label} ({option.code}) +{option.phone}
						</Box>
					)}
					renderInput={(params) => (
						<TextField
							{...params}
							label="Улсаа сонгоно уу."
							inputProps={{
								...params.inputProps,
								autoComplete: 'new-password' // disable autocomplete and autofill
							}}
						/>
					)}
				/>

				<Grid>
					<Divider sx={{ pt: 10 }}></Divider>
					<Box
						display="flex"
						alignItems="flex-end"
						justifyContent="flex-end"
						sx={{ mb: 15, my: 3 }}
					>
						<Button variant="contained">Үргэжлүүлэх</Button>
					</Box>
				</Grid>
				<Grid
					container
					direction="column-reverse"
					justifyContent="space-evenly"
					alignItems="flex-start"
				>
					<KeyboardBackspaceIcon fontSize="small" />
				</Grid>
			</Container>
		</Box>
	)
}
