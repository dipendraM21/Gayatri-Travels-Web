'use client'
import { useEffect } from 'react'

export function Bootstrap() {
    useEffect(() => {
        // @ts-expect-error loads bootstrap
        import('bootstrap/dist/js/bootstrap.bundle.min.js')
    }, [])
    return <></>
}
