import React from 'react'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { CacheProvider } from '@emotion/react'
import Script from 'next/script'
import { ThemeProvider, CssBaseline } from '@mui/material'

import createEmotionCache from '../utils/createEmotionCache'
import lightTheme from '../styles/theme/lightTheme'
import '../styles/globals.css'

import Menu from '../components/common/menu'
import Footer from '../components/common/footer'
import BounceLoader from 'react-spinners/BounceLoader'

const clientSideEmotionCache = createEmotionCache()

function Loading(): any {
	const router = useRouter()
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		const handleStart = (url: any) => url !== router.asPath && setLoading(true)
		const handleComplete = (url: any) =>
			url === router.asPath &&
			setTimeout(() => {
				setLoading(false)
			}, 3000)
		router.events.on('routeChangeStart', handleStart)
		router.events.on('routeChangeComplete', handleComplete)
		router.events.on('routeChangeError', handleComplete)

		return () => {
			router.events.off('routeChangeStart', handleStart)
			router.events.off('routeChangeComplete', handleComplete)
			router.events.off('routeChangeError', handleComplete)
		}
	})

	return (
		loading && (
			<div className="spinner-wrapper">
				<BounceLoader color={'#127F0C'} size={100} />
			</div>
		)
	)
}

const MyApp = (props: any) => {
	const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

	return (
		<>
			<Script
				strategy="lazyOnload"
				src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
			/>

			<Script strategy="lazyOnload">
				{`
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());
		gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
		page_path: window.location.pathname,
		});
	`}
			</Script>
			<Loading />
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
