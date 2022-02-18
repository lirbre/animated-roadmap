import { Card, Roadmap } from '@/components'
import { useTheme } from 'next-themes'

const Home = () => {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <div>
      {/* <button
        onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      >
        click here to change the theme
      </button> */}

      <div className="container mt-10 text-center max-w-[90ch]">
        <h2 className='text-orange-400 max-w-4xl'>ROADMAP</h2>
        <Roadmap/>
      </div>
    </div>
  )
}

export default Home
