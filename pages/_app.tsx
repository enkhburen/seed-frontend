import React from 'react'
import { CacheProvider } from '@emotion/react'
import { ThemeProvider, CssBaseline } from '@mui/material'

import createEmotionCache from '../utils/createEmotionCache'
import lightTheme from '../styles/theme/lightTheme'
import '../styles/globals.css'

import Menu from '../components/common/menu'
import Footer from '../components/common/footer'

const clientSideEmotionCache = createEmotionCache()

const MyApp = (props: any) => {
	const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

	return (
		<CacheProvider value={emotionCache}>
			<ThemeProvider theme={lightTheme}>
				<CssBaseline />
				<Menu />
				<Component {...pageProps} />
				<Footer />
			</ThemeProvider>
		</CacheProvider>
	)
}

export default MyApp
