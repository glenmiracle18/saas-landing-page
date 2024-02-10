import React from 'react'
import Image from "next/image";
import Logo from "../../public/assets/Logo.svg"
import User from "../../public/assets/User.svg"
import Menu from "../../public/assets/Menu.svg"


const Navbar = () => {

    const navList = [
        {name: "Features", url: "/"},
        {name: "Pricing", url: "/"},
        {name: "Entreprise", url: "/"},
        {name: "Careers", url: "/"}
    ]
    return (
        <nav className='flex w-full py-[16px] px-[20px] itmes-center justify-between lg:container lg:px-[80px] lg:mx-auto'>
            <div className="flex gap-[74px]">
                <Image src={Logo} alt="Logo Image" />
                <div className="lg:flex items-center gap-[56px] text-[#36485C] hidden">
                    {
                        navList.map((item, index) => (
                            <a key={index} href={item.url}>{item.name}</a>
                        ))
                            
                    }
                </div>
            </div>

            <div className='flex gap-[20px]'>
                <div className='flex items-center justify-between gap-[56px] text-[#36485C] font-medium'>
                    <div className='hidden lg:block'>
                        Open an Account
                    </div>
                    <div className='flex gap-x-2 items-center'>
                        <Image src={User} alt="" />
                        <span className='font-medium hidden'>
                            Sign in
                        </span>
                    </div>
                </div>
                <Image src={Menu} alt="" className='lg:hidden' />
            </div>
        </nav>
    )
}

export default Navbar