export default function SquareCard() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
            <div>
                <div className="bg-orange-500 p-3 mx-3 text-center md: rounded-tr-xl rounded-tl-xl">
                    <h1 className="text-4xl font-bold text-white">ZAMS</h1>
                </div>
                <div className="bg-white border-2 border-gray-300 shadow-lg rounded-xl p-8 aspect-square w-100 flex flex-col items-center justify-between">
                    <div>
                        <h1 className="text-xl font-bold text-center mb-6">Login Dengan SSO</h1>
                        <a className="border-2 border-gray-400 py-3 px-4 font-bold text-orange-500 rounded-full hover:bg-orange-500 hover:text-white hover:cursor-pointer transition-all">G Continue with Google</a>
                    </div>
                    <div className="flex space-x-3 items-center">
                        <p className="font-bold text-[12px]">Powered By</p>
                        <img src="images/logoRZ.png" className="h-10" />
                    </div>
                </div>
            </div>
        </div>
    );
}
