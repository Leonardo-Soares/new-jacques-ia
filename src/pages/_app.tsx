import 'swiper/css/bundle'
import Head from 'next/head'
import '../styles/index.scss'
import Script from 'next/script'
import { DefaultSeo } from 'next-seo'
import type { AppProps } from 'next/app'
import { GlobalContextProvider } from '../context/GlobalContextProvider'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no"
        />
      </Head>
      <DefaultSeo
        title="Jacques IA"
        description="ChatBot integrado com IA para facilitar a comunicação entre o Gabinete e Caaleiros Ativos"
        canonical="https://pwa-chat-jacques-ia.vercel.app/"
        openGraph={{
          url: 'https://pwa-chat-jacques-ia.vercel.app/',
          title: 'Jacques IA',
          description: 'ChatBot integrado com IA para facilitar a comunicação entre o Gabinete e Caaleiros Ativos',
          images: [
            {
              url: '/img/seo.png',
              width: 1200,
              height: 627,
              alt: '_____SiteName_____',
              type: 'image/png',
            },
          ],
          siteName: 'siteurl.com.br',
        }}
        twitter={{
          handle: '@redesocialaqui',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js"
        crossOrigin="anonymous"
      />
      <GlobalContextProvider>
        <Component {...pageProps} />
      </GlobalContextProvider>
    </>
  )
}
