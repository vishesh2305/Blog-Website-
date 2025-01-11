


import React from 'react';
import { useLocation } from 'react-router-dom';
import Layout from '../../components/layout/Layout';


function BlogInfo() {
  const location = useLocation();
  const { blog, thumbnail } = location.state || {};

  if (!blog || !thumbnail) {
    return <div>No blog data found.</div>;
  }

  return (
    // <div className="container mx-auto max-w-5xl py-6 my-10">
    //   <h1 className="text-3xl font-bold mb-5">{blog.title}</h1>
    //   <p className="text-gray-600 mb-3">Category: {blog.category}</p>
    //   <img
    //     src={URL.createObjectURL(thumbnail)}
    //     alt="Blog Thumbnail"
    //     className="w-full rounded-md mb-5"
    //   />
    //   <div
    //     className="content"
    //     dangerouslySetInnerHTML={{ __html: blog.content }}
    //   />
    // </div>
<Layout>
<main className='my-10 p-10'>
    
<section className="image-section  w-full border border-black">

<img
    src={URL.createObjectURL(thumbnail)}
    alt="card-image"
      />

</section>

<section className="blog-title  my-10 w-max">
<h1 className="text-3xl font-bold mb-5">{blog.title}</h1>

</section>

<section className='blog-category '>

</section>

<section className='blog-content-container w-full '>
    <p className="text-gray-600 mb-3">Category: {blog.category}</p>

</section>

<section className='blog-content-container w-full '>
  <p     dangerouslySetInnerHTML={{ __html: blog.content }}
  ></p>
</section>

  </main>
</Layout>


  );
}

export default BlogInfo;