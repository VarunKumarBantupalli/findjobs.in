import React from 'react'
import { assets } from '../assets/assets'
import {Link} from 'react-router-dom'

import { useClerk, useUser ,UserButton} from '@clerk/clerk-react'


const Navbar = () => {

   const {openSignIn} = useClerk()
   const {user} = useUser()



    return (
        <>
            <div className='shadow py-4'>
                <div className='container px-4 2xl:px-20 mx-auto flex justify-between items-center'>
                    <img src={assets.logo} alt="" />
                    {
                        user
                        ?
                        <div className='flex items-center gap-3 '  >
                            <Link to="/applications">Applied Jobs</Link>
                            <p> | </p>
                            <p className='max-sm:hidden'>Hi ! {user.firstName +" "+ user.lastName}</p>
                            <UserButton/>
                        </div>
                        :
                        <div className='flex gap-4 max-sm:text-xs'>
                        <button onClick={e => openSignIn()} className='text-gray-500'>Recruiter login</button>
                        <button onClick={e => openSignIn()}  className='text-white bg-blue-500 py-2 rounded-full hover:bg-gray-500 px-6 sm:px-9 '>login</button>
                    </div>
                    }

                </div>
            </div>

        </>
    )
}

export default Navbar
