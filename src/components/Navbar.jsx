import React , {useState} from 'react'
import { AiFillEdit } from "react-icons/ai";
import { TiTimes } from "react-icons/ti";


 const Navbar = () => {

    const [nav , setNav] = useState(false);

    const handleNav = () => {
      setNav(!nav);
    };
  return (
    <div className='flex justify-between items-center h-24 max-w-[1300px] mx-auto  px-3  text-amber-400'>
     <h1 className='w-full text-4xl font-bold text-rose-500'>RestoFood</h1>
     <ul className='hidden md:flex uppercase p-2'>
      <li className='p-6 font-bold hover:text-green-400 cursor-pointer' >Home</li>
      <li className='p-6 font-bold hover:text-green-400 cursor-pointer' >Delivery</li>
      <li className='p-6 font-bold hover:text-green-400 cursor-pointer' >AboutUs</li>
      <li className='p-6 font-bold hover:text-green-400 cursor-pointer' >FeedBack</li>
      <li className='p-6 font-bold hover:text-green-400 cursor-pointer' >Promotion</li>
      <li className='p-6 font-bold hover:text-green-400 cursor-pointer' >Contact</li>
      <li className='p-6 font-bold hover:text-green-400 cursor-pointer' >Menu</li>
     </ul>
      
     <div onClick={handleNav} className='block md:hidden text-amber-400'>
        {nav ? <TiTimes size={40}/> : <AiFillEdit size={30}/>}
      
     </div>
     <div className={nav ?' fixed left-0 top-0 w-[50%] border-r   bg-[#F0F8FF] ease-in-out duration-300' : 'ease-in-out duration-300 fixed right-[-100%]'}>
     <h1 className='w-full text-4xl font-bold text-rose-600'>RestoFood</h1>
     <ul className='uppercase p-2'>
      <li className='p-8 font-bold  hover:text-green-400'>Home</li>
      <li className='p-8 font-bold  hover:text-green-400'>Delivery</li>
      <li className='p-8 font-bold  hover:text-green-400'>Product</li>
      <li className='p-8 font-bold  hover:text-green-400'>AboutUs</li>
      <li className='p-8 font-bold  hover:text-green-400'>FeedBack</li>
      <li className='p-8 font-bold  hover:text-green-400'>Promotion</li>
      <li className='p-8 font-bold  hover:text-green-400'>Contact</li>
      <li className='p-8 font-bold  hover:text-green-400'>Menu</li>
     </ul>
     </div>
    </div>
  );
}

export default Navbar;