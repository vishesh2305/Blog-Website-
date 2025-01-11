import React from 'react'
import Layout from '../../components/layout/Layout'
import { Typography } from '@material-tailwind/react';
function Blog() {
  return (
    <Layout>
      <main className='my-10'>

<section className="image-section  w-full">
<img
        src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
        alt="card-image"
      />
</section>

<section className="blog-title  my-10 w-max">
<Typography variant="h5" color="blue-gray" className="mb-2">
        Blog Name
      </Typography>
</section>

<section className='blog-content-container w-full '>
  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, vel? Sunt rerum fugit id suscipit corrupti vitae cum veritatis? Excepturi necessitatibus provident quibusdam itaque. Possimus, in velit. Non, nesciunt dignissimos! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime fugiat nostrum quia quae eum libero ducimus. Minima eum omnis est voluptatum consequuntur voluptas corporis, quod ad iure fuga quae quasi.</p>
</section>

      </main>
    </Layout>
  )
}

export default Blog;