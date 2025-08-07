import {
    Home, HandHeart, ReceiptText
} from "lucide-react";

export default function NavbarMobile() {
    return (
        <div>
            <nav className="bg-white p-3">
                <ul className="space-x-3 flex items-center">
                    <li className="flex flex-col text-orange-500">
                        <Home/>
                        <a href="">Beranda</a>
                    </li>
                    <li className="flex flex-col text-orange-500">
                        <HandHeart/>
                        <a href="">Donatur</a>
                    </li>
                    <li className="flex flex-col text-orange-500">
                        <ReceiptText/>
                        <a href="">Transaksi</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}