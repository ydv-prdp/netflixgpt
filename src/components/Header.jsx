import { useDispatch, useSelector } from "react-redux"
import { netflixLogoUrl, svgUrl } from "../utlis/constants"
import { useNavigate } from "react-router-dom"
import { auth } from "../utlis/firebase"
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useLocation } from 'react-router-dom';
import { addUser, removeUser } from "../utlis/userSlice";
import { useEffect } from "react";



const Header = () => {
    const user = useSelector((state) => state.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation();
    const handleSignOut = ()=>{
        signOut(auth).then(() => {
        }).catch((error) => {
          // An error happened.
        });
    }
    useEffect(()=>{
        const unsubscibe = onAuthStateChanged(auth, (user) => {
            console.log("heelo")
            if (user) {
                const {uid, email, displayName} = auth.currentUser;
                dispatch(addUser({uid:uid, email:email, displayName:displayName}))
                navigate("/browse")

            } else {
                dispatch(removeUser())
                navigate("/login")
            }
          })
          return ()=>unsubscibe();
    },[])
    return (
        <header className="py-4 px-22 left-0 right-0 fixed z-10 bg-gradient-to-b from-black">
            <nav className="mx-auto flex max-w-7xl items-center justify-between lg:px-8">
                <div>
                    <img className="w-40" src={netflixLogoUrl} alt="logo" />
                </div>
                
                {user?.email &&
                    ( 
                        <button onClick={handleSignOut} type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 cursor-pointer">
                               Sign Out
                        </button>
                    )
                }

            </nav>
        </header>
    )
}

export default Header