'use client';

import { signOut } from 'next-auth/react'
import Link from 'next/link';
import { useSession } from 'next-auth/react';

function SignOutBtn() {
    const { data } = useSession()
    return (
        <div className="container flex items-center content-center text-center">
            <Link prefetch={false} href={'/dashboard'} className="mail ml-3 mr-2 text-xs text-white hover:text-gray-300">{data?.user?.email}</Link>
            <button
                className="mt-1 w-full mx-2 block px-2 py-3 text-white font-bold rounded-full bg-transparent border-solid border-2 hover:bg-white hover:text-gray-900 mb-1 sm:ml-2 dm:mt-5 text-center"
                onClick={() => { signOut({ callbackUrl: '/', redirect: true }) }}>Sign out</button>
        </div>
    )
}

export default SignOutBtn