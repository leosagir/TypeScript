import logo from './logo192.png'
import './header.css'

const now = new Date()

export default function Header(){
    return (
  <header>
    <img src={logo} alt={'result'} />
        { <h3>Главное меню</h3> }          
          <span>time: {now.toLocaleTimeString()}</span>
        </header>
    )
  }