import React from 'react'
import Image from "next/image";
import Logo from "../../public/assets/Logo.svg"
import User from "../../public/assets/User.svg"
import Menu from "../../public/assets/Menu.svg"


const Navbar = () => {
    return (
        <nav className='flex w-full py-[16px] px-[20px] itmes-center justify-between lg:container lg:px-[80px] lg:mx-auto'>
            <div>
                <Image src={Logo} alt="Logo Image" />
            </div>

            <div className='flex gap-[20px]'>
                <div className='flex gap-x-2 items-center'>
                    <Image src={User} alt="" />
                    <span className='font-medium text-[#36485C]'>
                        Sign in
                    </span>
                </div>
                <Image src={Menu} alt="" className='lg:hidden' />
            </div>
        </nav>
    )
}

export default Navbar