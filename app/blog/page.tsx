import Link from 'next/link'
import Counter from './counter'

export default function BlogPage() {
  return (
    <div>
      <h1>Blog Page</h1>
      <Link href="/blog/stream">Post 1</Link>
      <Counter />
    </div>
  )
}
