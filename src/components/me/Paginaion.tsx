import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Pagination() {
    const router = useRouter();
    console.log(router, 'router')
  return (
    <div>
        <Link href={`/products?offset=10&limit=10`}>
          <Button variant={'outline'} >Prev</Button>
          </Link>
          <Button variant={'outline'}>Next</Button>
        </div>
  )
}
