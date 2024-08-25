import type { AppProps } from 'next/app'
import type { AppType } from 'next/app';
import RootLayout from '@/components/layout';
import { trpc } from '../utils/trpc';
import { SessionProvider } from "next-auth/react";

const MyApp: AppType = ({ Component, pageProps }: AppProps) => {
    return (
        <SessionProvider session={pageProps.session}>
            <RootLayout>
                <Component {...pageProps} />
            </RootLayout>
        </SessionProvider>
    )
}

export default trpc.withTRPC(MyApp);