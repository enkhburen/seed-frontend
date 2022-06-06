import {
	Card,
	CardContent,
	Container,
	CardHeader,
	TextField,
	Grid,
	Button
} from '@mui/material'
import {
	CardCvcElement,
	CardNumberElement,
	CardExpiryElement
} from '@stripe/react-stripe-js'

const caption = [
	'Таны Seed-д хадгалсан аливаа төлбөрийн хэрэгслийг танд тав тухтай байлгах үүднээс энд (аюулгүй) жагсаах болно. Ирээдүйн хөрөнгө оруулалтад зориулж картаа хадгалахын тулд картынхаа мэдээллээ оруулаад "Хадгалах" дээр дарна уу.'
]

export default function PaymentMethod() {
	return (
		<Container sx={{ my: 3 }}>
			<Card>
				<CardHeader title="Төлбөрийн сонголтууд" subheader={caption} />
				<CardContent>
					<Grid item xs={12} md={6}>
						<TextField
							fullWidth
							variant="outlined"
							label="Картын дугаар"
							name="ccnumber"
							required
						/>
					</Grid>
					<Grid item xs={12} md={6} sx={{ mt: 3 }}>
						<TextField
							fullWidth
							variant="outlined"
							label="Картын эзэмшигчийн нэр"
							name="card holder name"
							required
						/>
					</Grid>
					<Grid
						container
						rowSpacing={1}
						columnSpacing={{ xs: 1, sm: 2, md: 3 }}
						sx={{ mt: 2 }}
					>
						<Grid item xs={6} md={6}>
							<TextField
								fullWidth
								label="Хүчинтэй хугацаа"
								variant="outlined"
								name="expiration date"
								required
							/>
						</Grid>
						<Grid item xs={6} md={6}>
							<TextField
								fullWidth
								label="CVC код"
								variant="outlined"
								name="cvc code"
								required
								InputProps={{
									inputProps: {
										component: CardCvcElement
									}
								}}
								InputLabelProps={{ shrink: true }}
							/>
						</Grid>
					</Grid>
					<Grid item xs={12} md={6} sx={{ mt: 2 }}>
						<TextField
							fullWidth
							label="Зип код"
							variant="outlined"
							name="zip postal code"
							required
						/>
					</Grid>
				</CardContent>
			</Card>
			<Button fullWidth variant="contained">
				Хадгалах
			</Button>
		</Container>
	)
}
