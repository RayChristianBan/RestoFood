import React from 'react';


const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-40 mx-auto mt-[-3rem] pt-6' src='./images/burger.jpg' alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Burger</h2>
              <p className='text-center text-4xl font-bold'>₱50-150</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Regular</p>
                  <p className='py-2 border-b mx-8'>Double-Cheese</p>
                  <p className='py-2 border-b mx-8'>Premium</p>
              </div>
              <button className='bg-rose-500 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Order Now</button>
          </div>
          <div className='w-full shadow-xl  flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
              <img className='w-40 mx-auto mt-[-3rem] pt-10' src='./images/chicken.jpg' alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Chicken Fillet</h2>
              <p className='text-center text-4xl font-bold'>₱120</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Classic</p>
                  <p className='py-2 border-b mx-8'>Ala King</p>
                  <p className='py-2 border-b mx-8'>Salted Egg</p>
              </div>
              <button className='bg-rose-500 text-black w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Order Now</button>
          </div>
          <div className='w-full shadow-xl  flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-40 mx-auto mt-[-3rem]' src='./images/pizza.jpg' alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Pizza</h2>
              <p className='text-center text-4xl font-bold'>₱150 - 250</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Classic</p>
                  <p className='py-2 border-b mx-8'>Four Kind Of Cheese</p>
                  <p className='py-2 border-b mx-8'>Overload</p>
              </div>
              <button className='bg-rose-500 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Order Now</button>
          </div>
      </div>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-40 mx-auto mt-[-3rem] pt-16 ' src='./images/fries.jpg' alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Fries</h2>
              <p className='text-center text-4xl font-bold'>₱100</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Cheese</p>
                  <p className='py-2 border-b mx-8'>Sour and Cream</p>
                  <p className='py-2 border-b mx-8'>OverLoad</p>
              </div>
              <button className='bg-rose-500 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Order Now</button>
          </div>
          <div className='w-full shadow-xl  flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
              <img className='w-40 mx-auto mt-[-3rem] pt-10 bg-transparent' src='./images/bbq.png' alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Pork Barbeque</h2>
              <p className='text-center text-4xl font-bold'>₱180</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Classic Barbaque</p>
                  <p className='py-2 border-b mx-8'>Sweet and Spicy</p>
                  <p className='py-2 border-b mx-8'>Honey Mustard</p>
              </div>
              <button className='bg-rose-500 text-black w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Order Now</button>
          </div>
          <div className='w-full shadow-xl  flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-40 mx-auto mt-[-3rem] pt-10' src='./images/chicken_bbq.png' alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Chicken Barbeque</h2>
              <p className='text-center text-4xl font-bold'>₱160</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Classic barbeque</p>
                  <p className='py-2 border-b mx-8'>Extra Hot</p>
                  <p className='py-2 border-b mx-8'>Honey Mustard</p>
              </div>
              <button className='bg-rose-500 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Order Now</button>
          </div>
      </div>
      
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-40 mx-auto mt-[-3rem] pt-20 ' src='./images/bread.png' alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Bread</h2>
              <p className='text-center text-4xl font-bold'>₱100-120</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Ube</p>
                  <p className='py-2 border-b mx-8'>Ube-Cheese</p>
                  <p className='py-2 border-b mx-8'>Strawberry</p>
              </div>
              <button className='bg-rose-500 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Order Now</button>
          </div>
          <div className='w-full shadow-xl  flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
              <img className='w-40 mx-auto mt-[-3rem] pt-20' src='./images/waffle.jpg' alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Waffle</h2>
              <p className='text-center text-4xl font-bold'>₱100</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Classic</p>
                  <p className='py-2 border-b mx-8'>Chocolate Syrups</p>
                  <p className='py-2 border-b mx-8'>Strawberry Syrup</p>
              </div>
              <button className='bg-rose-500 text-black w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Order Now</button>
          </div>
          <div className='w-full shadow-xl  flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-40 mx-auto mt-[-3rem] pt-10' src='./images/icecream.jpg' alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Ice Cream</h2>
              <p className='text-center text-4xl font-bold'>₱285</p>
              <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>Choco Fudge</p>
                  <p className='py-2 border-b mx-8'>Cookies and Cream</p>
                  <p className='py-2 border-b mx-8'>Ube Keso</p>
              </div>
              <button className='bg-rose-500 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Order Now</button>
          </div>
      </div>
      
    </div>
  );
};

export default Cards;