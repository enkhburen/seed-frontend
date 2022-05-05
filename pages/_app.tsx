import React from 'react'
import { CacheProvider } from '@emotion/react'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import createEmotionCache from '../utils/createEmotionCache'
import lightTheme from '../styles/theme/lightTheme'
import '../styles/globals.css'

import Menu from '../components/common/menu'
import Footer from '../components/common/footer'
import BounceLoader from 'react-spinners/BounceLoader'

const clientSideEmotionCache = createEmotionCache()

// function Loading(): any {
// 	const router = useRouter()
// 	const [loading, setLoading] = useState(false)

// 	useEffect(() => {
// 		const handleStart = (url: any) => url !== router.asPath && setLoading(true)
// 		const handleComplete = (url: any) =>
// 			url === router.asPath &&
// 			setTimeout(() => {
// 				setLoading(false)
// 			}, 3000)
// 		router.events.on('routeChangeStart', handleStart)
// 		router.events.on('routeChangeComplete', handleComplete)
// 		router.events.on('routeChangeError', handleComplete)

// 		return () => {
// 			router.events.off('routeChangeStart', handleStart)
// 			router.events.off('routeChangeComplete', handleComplete)
// 			router.events.off('routeChangeError', handleComplete)
// 		}
// 	})

// 	return (
// 		loading && (
// 			<div className="spinner-wrapper">
// 				<BounceLoader color={'#127F0C'} size={100} />
// 			</div>
// 		)
// 	)
// }

const MyApp = (props: any) => {
	const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

	return (
		<>
			{/* <Loading /> */}
			<CacheProvider value={emotionCache}>
				<ThemeProvider theme={lightTheme}>
					<CssBaseline />
					<Menu />
					<Component {...pageProps} />
					<Footer />
				</ThemeProvider>
			</CacheProvider>
		</>
	)
}

export default MyApp
