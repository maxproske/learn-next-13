interface Time {
  unixtime: number
}

async function getCurrentTime() {
  // This request should be refetched on every request.
  // Similar to `getServerSideProps`
  const res = await fetch('https://worldtimeapi.org/api/timezone/America/Vancouver', {
    cache: 'no-store',
  })

  const time: Promise<Time> = await res.json()

  return time
}

// Everything here happens on the server!!
export default async function HomePage() {
  // No Next.js API
  // No serialization
  const time = await getCurrentTime()

  return (
    <div>
      <h1>Time in Vancouver (SSR)</h1>
      <p>{new Date(time.unixtime * 1000).toString()}</p>
    </div>
  )
}
