import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Input from '@mui/material/Input'
import Stack from '@mui/material/Stack'

import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

export default function Form() {
	return (
		/* Default Map */
		<Box sx={{ my: 4 }}>
			<Grid container alignItems="center">
				<Grid item xs={12} md={6}>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2675.188540309885!2d106.90404931599491!3d47.8940359792048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3c4700548aac03!2zNDfCsDUzJzM4LjUiTiAxMDbCsDU0JzIyLjUiRQ!5e0!3m2!1sen!2smn!4v1650267273768!5m2!1sen!2smn"
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
						style={{ width: '100%', height: '695px', border: 'none' }}
					></iframe>
				</Grid>
				{/* Input Section */}

				<Grid item xs={12} md={6} sx={{ bgcolor: '#ecf9f3', p: 5 }}>
					<Grid container>
						<Typography variant="h4" fontWeight="bold" sx={{ mb: 4 }}>
							Бидэнд санал хүсэлтээ бичиж илгээгээрэй
						</Typography>
						<Grid item xs={12} md={6} sx={{ my: 2, px: 1 }}>
							<Typography variant="h6" fontWeight="bold">
								Нэр
							</Typography>
							<Input
								placeholder="Нэр"
								required={true}
								type="text"
								name="name"
								fullWidth={true}
								sx={{
									py: 1,
									px: 2,
									mt: 2,
									color: '#222',
									bgcolor: 'white',
									'&:focus': {
										border: '1px solid #127F06'
									}
								}}
							/>
						</Grid>
						<Grid item xs={12} md={6} sx={{ px: 1, my: 2 }}>
							<Typography variant="h6" fontWeight="bold">
								Утасны дугаар
							</Typography>
							<Input
								placeholder="Утасны дугаар"
								required={true}
								type="phone"
								name="phone"
								inputProps={{ pattern: '[0-9]{3}-[0-9]{3}-[0-9]{4}' }}
								fullWidth={true}
								sx={{
									py: 1,
									px: 2,
									mt: 2,
									color: '#222',
									bgcolor: 'white'
									// border: '1px solid #127F06'
								}}
							/>
						</Grid>
						<Grid item xs={12} sx={{ px: 1, mb: 2 }}>
							<Typography variant="h6" fontWeight="bold">
								И-мэйл хаяг
							</Typography>
							<Input
								placeholder="И-мэйл"
								required={true}
								type="email"
								name="email"
								fullWidth={true}
								sx={{
									py: 1,
									px: 2,
									mt: 2,
									color: '#222',
									bgcolor: 'white'
									// border: '1px solid #127F06'
								}}
							/>
						</Grid>
						<Grid item xs={12} sx={{ px: 1, mb: 2 }}>
							<Typography variant="h6" fontWeight="bold">
								Санал хүсэлт
							</Typography>
							<Input
								required={true}
								type="text"
								name="text"
								fullWidth={true}
								multiline={true}
								rows="5"
								sx={{
									p: 3,
									my: 2,
									color: '#222',
									bgcolor: 'white'
									// border: '1px solid #127F06'
								}}
							/>
							<Stack
								sx={{
									display: 'flex',
									justifyContent: 'flex-end',
									alignItems: 'flex-end',
									pt: 2
								}}
							>
								<Button
									fullWidth
									variant="contained"
									endIcon={<ArrowForwardIcon />}
								>
									Илгээх
								</Button>
							</Stack>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Box>
	)
}
