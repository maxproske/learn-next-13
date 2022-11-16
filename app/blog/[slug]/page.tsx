export async function generateStaticParams() {
    return [
        {
            slug: 'stream'
        }
    ]
  }

export default function BlogPost() {
    return <div>
        <h2>A Live Stream</h2>
        <p>Lorem ipsum</p>
    </div>
}