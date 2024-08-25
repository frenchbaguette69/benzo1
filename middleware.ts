import { getSession, useSession } from 'next-auth/react'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export async function middleware(request: NextRequest) {

    const requestForNextAuth = {
        headers: {
          cookie: request.headers.get('cookie') ?? "",
        },
    };

    const session = await getSession({req: requestForNextAuth});

    if(!session?.user.isAdmin){
        return NextResponse.redirect(new URL('/admin/login', request.url));
    }

    return NextResponse.redirect(new URL('/', request.url));
}
 
export const config = {
  matcher: '/admin/dashboard/:path*',	
}