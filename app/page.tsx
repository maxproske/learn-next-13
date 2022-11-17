import { cookies, headers } from 'next/headers'

interface Time {
  unixtime: number
}

async function getCurrentTime() {
  const nextCookies = cookies()
  const language = nextCookies.get('language')?.value

  const nextHeaders = headers()
  const referer = nextHeaders.get('referer')

  console.log({ language, referer })

  // This request should be refetched on every request.
  // Similar to `getServerSideProps`
  const res = await fetch('https://worldtimeapi.org/api/timezone/America/Vancouver', {
    cache: 'no-store',
    headers: {
      'x-language': `${language}`,
    },
  })

  const time: Promise<Time> = await res.json()

  return time
}

// Everything here happens on the server!!
export default async function HomePage() {
  // No Next.js API
  // No serialization
  const time = await getCurrentTime()

  console.log('hi from the server')

  return (
    <div>
      <p>Date: {new Date(time.unixtime * 1000).toString()}</p>
    </div>
  )
}
