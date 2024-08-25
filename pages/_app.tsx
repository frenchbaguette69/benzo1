import type { AppProps } from 'next/app'
import type { AppType } from 'next/app';
import RootLayout from '@/components/layout';
import { trpc } from '../utils/trpc';

const MyApp: AppType = ({ Component, pageProps }: AppProps) => {
  return (
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
  )
}

export default trpc.withTRPC(MyApp);