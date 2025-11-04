import React from 'react'
import MyContainer from '../MyContainer.jsx/MyContainer'

function Aboutus() {
  return (
      <MyContainer className="mt-8">
          <div className='text-3xl font-extrabold text-amber-300 gradient-text'>
              Welcome to ToyTopia – Where Play Comes Alive!
          </div>
          <div className='text-xl font-semibold text-base-400 mt-5'>
              At ToyTopia, we believe that toys are not just playthings—they
              are gateways to imagination, creativity, and joy. Our mission is to bring
              a world of fun,
              learning, and excitement to children of all ages.
              Founded with the goal of making high-quality toys
              accessible to everyone, ToyTopia offers a wide variety of toys ranging from
              educational games and puzzles to action figures, dolls, and collectibles.
              We carefully curate our
              selection to ensure every toy meets our standards for safety, quality,
              and fun.
          </div>
          <div>
              <div className='text-3xl font-bold mt-5'>Why Choose ToyTopia?</div>
              <div>
                  <ul className='mt-6'>
                      <li><span className='text-xl font-medium text-base-400'>Diverse Selection:</span>
                          From classic favorites to the latest trends, we have
                          toys for every interest and age.</li>
                      <li className='mt-3'><span className='text-xl font-medium text-base-400 '>Safe & Trusted:</span>We prioritize the safety and quality of all our products.</li>
                      <li className='mt-3'><span className='text-xl font-medium text-base-400 '>Easy Shopping:</span>Our platform is designed for a smooth, enjoyable shopping experience.</li>
                      <li className='mt-3'><span className='text-xl font-medium text-base-400 '>Community & Fun:</span>Join a community of toy lovers and discover recommendations, reviews, and inspiration.</li>
                  </ul>
              </div>
          </div>
          <div className='mt-8 text-xl font-semibold'>At ToyTopia, we’re more than just a toy store—we’re a destination where imagination takes flight. Whether it’s a birthday surprise, a learning game, or just a little fun, we’re here to make playtime memorable.</div>
    </MyContainer>
  )
}

export default Aboutus