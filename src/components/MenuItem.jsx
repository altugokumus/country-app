import Link from 'next/link'
import React from 'react'

function MenuItem({Item}) {
  return (
    <Link href={Item.url}>{Item.name}</Link> 
  )
}

export default MenuItem