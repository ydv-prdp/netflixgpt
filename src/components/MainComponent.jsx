import Header from "./Header"

const MainComponent = () => {
    return (
        <section className="bg-[url(https://assets.nflxext.com/ffe/siteui/vlv3/42a0bce6-fc59-4c1c-b335-7196a59ae9ab/web/IN-en-20250303-TRIFECTA-perspective_d5f81427-d6cf-412d-8e86-2315671b9be1_small.jpg)] bg-bottom bg-cover">
            <div className="w-full h-screen flex items-end text-center bg-gradient-to-b from-black">
                <div className="mx-auto mb-20 text-white leading-none">
                    <h1 class="text-[60px] font-bold">
                        Unlimited movies, TV <br/> shows and more
                    </h1>
                    <p class="text-2xl py-4">
                        Starts at ₹149. Cancel at any time.
                    </p>
                    <p className="text-lg py-4">
                        Ready to watch? Enter your email to create or restart your membership.
                    </p>
                    <div className="flex items-center gap-5">
                        <input type="email" placeholder="Email address" className="bg-black text-white opacity-70 py-4 px-30"/>
                        <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-16 py-4 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MainComponent