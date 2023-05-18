import './home.css'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div className='home'>Home pages
    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde similique magni omnis earum corrupti, labore soluta hic pariatur adipisci. Minus blanditiis magni quos ipsa atque? Aliquid voluptatum incidunt officiis quo, atque, pariatur dolore laudantium autem fugiat praesentium animi fuga. Necessitatibus architecto sunt temporibus neque, tempora laudantium mollitia ducimus praesentium ullam?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur dolore odit, laborum eveniet ducimus ullam iure unde provident! Aspernatur, odit.</p>
    <button >
      <Link to="./blogs">read more</Link>
    </button>
    </div>
  )
}

export default Home