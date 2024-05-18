'use client'

import { trpc } from '../../shared/trpc'

const TrpcPage = async () => {
  const response = await trpc.user.hello.query({ name: 'trpc server component test' })

  return (
    <div>
      <p>Server side - {response.greeting}</p>
    </div>
  )
}

export default TrpcPage
