import type { AppProps } from 'next/app'
import type { AppType } from 'next/app';
import RootLayout from '@/components/layout';

const MyApp: AppType = ({ Component, pageProps }: AppProps) => {
  return (
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
  )
}

export default MyApp;