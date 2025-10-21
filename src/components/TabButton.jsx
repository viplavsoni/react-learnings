export default function TabButton({ children, onSelect }) {
    function clickHandler() {
        console.log('Hello world', children)
    }

    return <li><button onClick={onSelect}>{children}</button></li>
}