import Link from "next/link"


export default function Nav() {
    return (
        <nav className="w-screen h-16 bg-Nav-red absolute overflow-hidden">
            <ul className="absolute right-0 p-4 text-white">
                <Link href="/dashboard/timer">
                    <li className="list-none rounded-xl bg-red-600 p-1.5">Timer</li>
                </Link>
            </ul>
        </nav>
    );
}
