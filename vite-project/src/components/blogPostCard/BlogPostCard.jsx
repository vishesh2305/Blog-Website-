import React, { useContext } from 'react'
import myContext from '../../context/data/myContext';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button} from "@material-tailwind/react";

function BlogPostCard() {
  return(
    <section className='cards-section flex justify-evenly items-center flex-wrap '>
 {/*Card 1  */}
    <Card className="mt-6 w-96 cards">  
    <CardHeader color="blue-gray" className="relative card-image-part">
      <img
        src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
        alt="card-image"
      />
    </CardHeader>
    <CardBody className='card-body'>
      <Typography variant="h5" color="blue-gray" className="mb-2">
        Blog Name
      </Typography>
      <Typography>
        Blog Content Upto 100 Words 
      </Typography>
    </CardBody>
    <CardFooter className="pt-0">
      <Button>Read More</Button>
    </CardFooter>
  </Card>

  {/* Card 2 */}
    <Card className="mt-6 w-96 cards">  
    <CardHeader color="blue-gray" className="relative card-image-part">
      <img
        src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
        alt="card-image"
      />
    </CardHeader>
    <CardBody className='card-body'>
      <Typography variant="h5" color="blue-gray" className="mb-2">
        Blog Name
      </Typography>
      <Typography>
        Blog Content Upto 100 Words 
      </Typography>
    </CardBody>
    <CardFooter className="pt-0">
      <Button>Read More</Button>
    </CardFooter>
  </Card>

  {/* Card 3 */}
    <Card className="mt-6 w-96 cards">  
    <CardHeader color="blue-gray" className="relative card-image-part">
      <img
        src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
        alt="card-image"
      />
    </CardHeader>
    <CardBody className='card-body'>
      <Typography variant="h5" color="blue-gray" className="mb-2">
        Blog Name
      </Typography>
      <Typography>
        Blog Content Upto 100 Words 
      </Typography>
    </CardBody>
    <CardFooter className="pt-0">
      <Button>Read More</Button>
    </CardFooter>
  </Card>

  {/* Card 4 */}
    <Card className="mt-6 w-96 cards">  
    <CardHeader color="blue-gray" className="relative card-image-part">
      <img
        src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
        alt="card-image"
      />
    </CardHeader>
    <CardBody className='card-body'>
      <Typography variant="h5" color="blue-gray" className="mb-2">
        Blog Name
      </Typography>
      <Typography>
        Blog Content Upto 100 Words 
      </Typography>
    </CardBody>
    <CardFooter className="pt-0">
      <Button>Read More</Button>
    </CardFooter>
  </Card>

  {/* Card 5 */}
    <Card className="mt-6 w-96 cards">  
    <CardHeader color="blue-gray" className="relative card-image-part">
      <img
        src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
        alt="card-image"
      />
    </CardHeader>
    <CardBody className='card-body'>
      <Typography variant="h5" color="blue-gray" className="mb-2">
        Blog Name
      </Typography>
      <Typography>
        Blog Content Upto 100 Words 
      </Typography>
    </CardBody>
    <CardFooter className="pt-0">
      <Button>Read More</Button>
    </CardFooter>
  </Card>

  {/* Card 6 */}
    <Card className="mt-6 w-96 cards">  
    <CardHeader color="blue-gray" className="relative card-image-part">
      <img
        src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
        alt="card-image"
      />
    </CardHeader>
    <CardBody className='card-body'>
      <Typography variant="h5" color="blue-gray" className="mb-2">
        Blog Name
      </Typography>
      <Typography>
        Blog Content Upto 100 Words 
      </Typography>
    </CardBody>
    <CardFooter className="pt-0">
      <Button>Read More</Button>
    </CardFooter>
  </Card>


  </section>
  )
}

export default BlogPostCard