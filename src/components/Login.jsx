import { useRef, useState } from "react";
import { validPassEmail } from "../utlis/validPassEmail";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utlis/firebase";

const Login = () => {
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);
    const [isSignIn, setIsSignIn] = useState(true)
    const [errorMsg, setErrorMsg] = useState("")
    const handleButtonClick = (e) => {
        e.preventDefault();
        const message = isSignIn ? validPassEmail("Samantha", email.current.value, password.current.value) : validPassEmail(name.current.value, email.current.value, password.current.value)
        setErrorMsg(message)
        if (message) return;
        if (!isSignIn) {
            console.log(email.current.value, password.current.value)
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log(user)
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMsg(errorMessage)
                });
        }
        else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
              // Signed in 
              const user = userCredential.user;
              console.log(user)
              // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMsg(errorMessage)
            });
        }
    }
    const toggleSignIn = (e) => {
        e.preventDefault()
        setIsSignIn(!isSignIn)
    }
    return (
        <div className="pt-22 flex  items-center justify-center">
            <div className="w-100 h-150 bg-black text-white flex flex-col pt-12 px-12">
                <h2 className="text-3xl font-bold">  {isSignIn ? "Sign In" : "Sign Up"} </h2>
                <form className="flex flex-col">
                    {!isSignIn && <input type="text" ref={name} placeholder="Name" className="pt-4 border-1 rounded-sm mt-8" />}
                    <input type="email" ref={email} placeholder="Email Address" className="pt-4 border-1 rounded-sm mt-8" />
                    <input type="password" ref={password} placeholder="Password" className="pt-4 border-1 rounded-sm my-4" />
                    <p className="py-4 text-red-500">{errorMsg}</p>
                    <button onClick={handleButtonClick} type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 text-md">
                        {isSignIn ? "Sign In" : "Sign Up"}
                    </button>
                    <button onClick={toggleSignIn} className="cursor-pointer">
                        {isSignIn ? "New to Netflix? Sign Up Now" : "Already a user? Sign In Now"}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login