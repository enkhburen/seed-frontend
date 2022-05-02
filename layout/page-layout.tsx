import Box from '@mui/material/Box'

interface PageLayoutProps {
    children: any
}

export default function PageLayout(props: PageLayoutProps) {
    return (
        <Box sx={{ pt: 12 }}>
            {props.children}
        </Box>
    )
}