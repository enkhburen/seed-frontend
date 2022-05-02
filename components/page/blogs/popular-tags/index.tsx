import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

export default function PopularTags() {
    return (
        <Box sx={{ backgroundColor: 'white', p: 2 }}>
            <Typography variant='h6'>
                Эрэлттэй Тагууд
            </Typography>
            <Divider sx={{ my: 3 }} />
            <Grid container spacing={2}>
                <Grid item>
                    <Chip label='Кино' clickable />
                </Grid>
                <Grid item>
                    <Chip label='Дуу' clickable />
                </Grid>
                <Grid item>
                    <Chip label='Хөгжим' clickable />
                </Grid>
                <Grid item>
                    <Chip label='Бусад' clickable />
                </Grid>
            </Grid>
        </Box>
    )
}