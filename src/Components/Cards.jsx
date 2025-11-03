import React, { useContext } from 'react'
import { ToysContext } from '../Context/Context'
import Card from './Card'
import MyContainer from '../MyContainer.jsx/MyContainer'
function Cards() {
    const { toys, loading } = useContext(ToysContext)
    if (loading) return <p>loading Toys..</p>
    const popularToys = toys.filter(toy => toy.category === "popular")
    const bestSelling = toys.filter(toy => toy.category === "best selling")
    const featuredToys = toys.filter(toy => toy.category === "featured");
  return (
      <MyContainer className='my-8 flex flex-col items-center '>
          <section>
              <h2 className='text-2xl font-bold text-center mb-5'>Popular
                  <span className='text-yellow-400'>Toys</span></h2>
              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2
               lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                  {popularToys.map(toy=><Card key={toy.toyId} toy={toy}></Card>)}
              </div>
          </section>
          <p className='text-3xl py-3.5 mt-5 font-bold'>More Products You Will Love To See</p>
          <section className='py-6'>
              <h2 className='text-2xl font-bold text-center mb-5'>Best
                  <span className='text-yellow-400'> Selling</span></h2>
              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2
               lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                  {bestSelling.map(toy=><Card key={toy.toyId} toy={toy}></Card>)}
              </div>
          </section>
          <p className='text-3xl py-3.5 mt-5 font-bold'>Our Most Hot Toys</p>
          <section>
             
              <h2 className='text-2xl font-bold text-center mb-5'>Featured
                  <span className='text-yellow-400'> Toys</span></h2>
              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2
               lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                  {featuredToys.map(toy=><Card key={toy.toyId} toy={toy}></Card>)}
              </div>
          </section>
    </MyContainer>
  )
}

export default Cards