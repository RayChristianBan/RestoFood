import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#df0038f8] font-bold p-2 text-xl'>
          Discover more of our Foods!!!
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 text-yellow-400'>
          Welcome Our Beloved Costumers
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-4 text-yellow-400'>
            Enjoy Delicious Foods
          </p>
          <Typed className='text-lg pl-2 font-bold text-black'
                    strings={['Here you can find anything!']}
                    typeSpeed={50}
                />
                <br/>
 
                <Typed className='text-lg pl-2 font-bold text-black'
                    strings={['What are you wating For!']}
                    typeSpeed={50}
                />
                <br/>
                <Typed className='font-bold text-black'
                strings={[
                    'Freshly Made',
                    'Quality Meat',
                    'Delicious Combination Of Flavor']}
                    typeSpeed={150}
                    backSpeed={150}
                    loop >
                </Typed>
        </div>
        <p className='md:text-2xl text-xl font-bold text-green-950'>Order now to avail are best product with discount.</p>
        <button className='bg-rose-500 w-[200px] rounded-xl font-medium my-6 mx-auto py-3 text-black'>Order Now</button>
      </div>
    </div>
  );
};

export default Hero;