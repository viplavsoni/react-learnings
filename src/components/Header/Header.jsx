import newImageReact from '../../assets/react-core-concepts.png'
import "./Header.css"
const reactEssentials = ['fundamentals', 'deep', 'core'];

function getRandom(max) {
    return (Math.floor(Math.random() * (max + 1)))
}

export default function Header() {
    const desc = reactEssentials[getRandom(1)]
    return (
        <header>
            <img src={newImageReact} alt="Stylized atom" />
            <h1>React Essentials</h1>
            <p>{desc} React concepts you will need for almost</p>
        </header>
    )
}