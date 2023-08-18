import AboutBtn from './AboutBtn'

export default function Header() {
    return (
        <header className="my-1 ml-2 text-blue-600 flex items-center font-semibold">
            <p> TSLox Ast Explorer</p>
            <AboutBtn />
        </header>
    )
}
