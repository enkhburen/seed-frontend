import { createTheme } from '@mui/material/styles'

const lightTheme = createTheme({
	palette: {
		mode: 'light',
		primary: {
			main: '#127f06',
			light: '#51af3d',
			dark: '#005100',
		},
		secondary: {
			main: '#e5e8e9',
			light: '#ffffff',
			dark: '#b3b6b7',
		}
	},
	typography: {
		h4: {
			fontSize: '1.75rem'
		},
		h5: {
			fontSize: '1.25rem'
		}, 
		h6: {
			fontSize: '1rem'
		}
	},
	shape: {
        borderRadius: 0,
    },
	components: {
        MuiButton: {
            defaultProps: {
                disableRipple: true,
            },
        },
		MuiChip: {
			defaultProps: {
                disableRipple: true,
            },
			styleOverrides: {
				root: {
					borderRadius: '0px',
					fontWeight: 'bold'
				}
			}
		}
    },
})

export default lightTheme
