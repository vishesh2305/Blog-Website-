import React from 'react';
import Layout from '../../../components/layout/Layout'

function Dashboard() {
  return (
    <Layout>

<div className='dashboard-main-content-container py-5 my-10 h-full flex flex-col  justify-center mx-auto items-center'>


<section className='profiledetails-container w-3/5 flex justify-between items-center mx-auto'>

<div className='profileimage-dashboard flex justify-center self-start'>
  <figure>
    <img className="border border-gray-900 p-0.1" src="https://pics.craiyon.com/2023-07-05/fc5f288ac75d46d99a3cf1d77175504f.webp" alt="profile-pic" />
  </figure>
</div>

<div className='profiledetails-dashboard w-3/5 flex flex-col items-center justify-center'>
<span id='profiledetails-content-container'>
  <h2 className='text-2xl font-bold text-black-700'>Profile Name</h2>
  <h6 className='text-lg font-bold text-black-700'>Profile Role</h6>
  <p className='text-base text-gray-600'>Email</p>
  <h2 >Total Blogs</h2>
</span>
</div>
</section>

<section className='buttons-container h-20 my-10 w-full flex items-center justify-evenly'>
  <button className='buttons-inside-dashboard-container w-32'>Create Blog</button>
  <button className='buttons-inside-dashboard-container w-32'>Logout</button>
</section>



</div>

    </Layout>
  );
}

export default Dashboard;