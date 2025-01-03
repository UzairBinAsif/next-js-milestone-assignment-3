import React from 'react'
import RecentPosts from './RecentPosts'

const CardList = () => {
  return (
    <div className='w-full sm:w-[70%]'>
      <h1 className='ml-4 font-bold text-xl md:text-2xl'>Recent Posts</h1>
      <RecentPosts />
      <RecentPosts />
      <RecentPosts />
      <RecentPosts />
      <RecentPosts />
      <RecentPosts />
    </div>
  )
}

export default CardList
