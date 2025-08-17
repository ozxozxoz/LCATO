import fs from 'fs'
import path from 'path'

export const metadata = { title: 'Who is LCATO' }

export default function Page(){
  const text = fs.readFileSync(path.join(process.cwd(),'app','data','whois.txt'),'utf8')
  const lines = text.split('\n').map((l,i)=> <p key={i}>{l}</p>)
  return (
    <section className="section">
      <h1>Who is LCATO</h1>
      {lines}
    </section>
  )
}
