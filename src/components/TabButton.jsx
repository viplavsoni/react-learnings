export default function TabButton({ children, isSelected, ...props }) {
    function clickHandler() {
        console.log('Hello world', children)
    }

    return <li><button className={isSelected ? "active" : ''} {...props}>{children}</button></li>
}