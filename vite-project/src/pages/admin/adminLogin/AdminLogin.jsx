// import React from 'react';
// import {
//   Card,
//   Input,
//   Button,
//   CardBody,
//   CardHeader,
//   Typography,
// } from "@material-tailwind/react";
// import myContext from "../../../context/data/myContext";

// import { CpuChipIcon } from "@heroicons/react/24/solid";


// function AdminLogin() {
//   return(
//     <div className='w-full flex justify-center'>
//   <Card
//   shadow={false}
//   className="md:px-24 md:py-14 py-8 border border-gray-300 w-1/2 h-full mx-auto"
// >

//   <CardHeader shadow={false} floated={false} className="text-center ">
//     <Typography
//       variant="h1"
//       color="blue-gray"
//       className="mb-4 !text-3xl lg:text-4xl"
//     >
//       Blog Spot
//     </Typography>
//     <Typography className="!text-gray-600 text-[18px] font-normal md:max-w-sm m-auto">
//       Enter your admin credentials to access the dashboard
//     </Typography>
//   </CardHeader>
//   <CardBody>
//     <form
//       action="#"
//       className="flex flex-col gap-4 md:mt-12"
//     >
//       <div>
//         <label htmlFor="email">
//           <Typography
//             variant="small"
//             color="blue-gray"
//             className="block font-medium mb-2"
//           >
//             Your Email
//           </Typography>
//         </label>
//         <Input
//           id="email"
//           color="gray"
//           size="lg"
//           type="email"
//           name="email"
//           placeholder="name@mail.com"
//           className="!w-full placeholder:!opacity-100 focus:!border-t-primary !border-t-blue-gray-200"
//           labelProps={{
//             className: "hidden",
//           }}
//         />
//       </div>
//       <Button size="lg" color="gray" fullWidth>
//         continue
//       </Button>
//       <Button
//         variant="outlined"
//         size="lg"
//         className="flex h-12 border-blue-gray-200 items-center justify-center gap-2"
//         fullWidth
//       >
//         <img
//           src={`https://www.material-tailwind.com/logos/logo-google.png`}
//           alt="google"
//           className="h-6 w-6"
//         />{" "}
//         sign in with google
//       </Button>
//       <Button
//         variant="outlined"
//         size="lg"
//         className="flex h-12 border-blue-gray-200 items-center justify-center gap-2"
//         fullWidth
//       >
//         <CpuChipIcon className="h-6 w-6" />
//         Wallet Authentication
//       </Button>
//       <Typography
//         variant="small"
//         className="text-center mx-auto max-w-[19rem] !font-medium !text-gray-600"
//       >
//         Upon signing in, you consent to abide by our{" "}
//         <a href="#" className="text-gray-900">
//           Terms of Service
//         </a>{" "}
//         &{" "}
//         <a href="#" className="text-gray-900">
//           Privacy Policy.
//         </a>
//       </Typography>
//     </form>
//   </CardBody>
// </Card>
// </div>
//   )

// }

// export default AdminLogin;






import { toast } from 'react-toastify';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase/FirebaseConfig';

import React, { useContext, useState } from 'react';
import {
  Card,
  Input,
  Button,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import myContext from "../../../context/data/myContext";

import { CpuChipIcon } from "@heroicons/react/24/solid";
import { useNavigate } from 'react-router-dom';

function AdminLogin() {

  // const context = useContext(myContext);
  // const {mode} = context;

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //* Login Function

  const login = async () => {
    if(!email || !password) {
      return toast.error("fill all required fields")
    }
    try {
      const result = await signInWithEmailAndPassword(auth, email,password);
      toast.success('Login Success')
      localStorage.setItem('admin', JSON.stringify(result));
      navigate('/dashboard');
    } catch (error) {
      toast.error('Login Failed')
      console.log(error)
    }
  }

  return(
    <div className='w-full flex justify-center'>
      <Card
        shadow={false}
        className="md:px-24 md:py-14 py-8 border border-gray-300 w-1/2 h-full mx-auto"
      >
        <CardHeader shadow={false} floated={false} className="text-center ">
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-4 !text-3xl lg:text-4xl"
          >
            Blog Spot
          </Typography>
          <Typography className="!text-gray-600 text-[18px] font-normal md:max-w-sm m-auto">
            Enter your admin credentials to access the dashboard
          </Typography>
        </CardHeader>
        <CardBody>
          <form
            action="#"
            className="flex flex-col gap-4 md:mt-12"
            onSubmit={(e) => {
              e.preventDefault();
              login();
            }}
          >
            {/* Email Input */}
            <div>
              <label htmlFor="email">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="block font-medium mb-2"
                >
                  Your Email
                </Typography>
              </label>
              <Input
                id="email"
                color="gray"
                size="lg"
                type="email"
                name="email"
                placeholder="name@mail.com"
                className="!w-full placeholder:!opacity-100 focus:!border-t-primary !border-t-blue-gray-200"
                labelProps={{
                  className: "hidden",
                }}
                value = {email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="password">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="block font-medium mb-2"
                >
                  Your Password
                </Typography>
              </label>
              <Input
                id="password"
                color="gray"
                size="lg"
                type="password"
                name="password"
                placeholder="********"
                className="!w-full placeholder:!opacity-100 focus:!border-t-primary !border-t-blue-gray-200"
                labelProps={{
                  className: "hidden",
                }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Continue Button */}
            <Button size="lg" color="gray" fullWidth onClick={login}>
              continue
            </Button>

            {/* Google Sign-In Button */}
            <Button
              variant="outlined"
              size="lg"
              className="flex h-12 border-blue-gray-200 items-center justify-center gap-2"
              fullWidth
            >
              <img
                src={`https://www.material-tailwind.com/logos/logo-google.png`}
                alt="google"
                className="h-6 w-6"
              />{" "}
              sign in with google
            </Button>

            {/* Wallet Authentication Button */}
            <Button
              variant="outlined"
              size="lg"
              className="flex h-12 border-blue-gray-200 items-center justify-center gap-2"
              fullWidth
            >
              <CpuChipIcon className="h-6 w-6" />
              Wallet Authentication
            </Button>

            {/* Terms and Privacy Policy */}
            <Typography
              variant="small"
              className="text-center mx-auto max-w-[19rem] !font-medium !text-gray-600"
            >
              Upon signing in, you consent to abide by our{" "}
              <a href="#" className="text-gray-900">
                Terms of Service
              </a>{" "}
              &{" "}
              <a href="#" className="text-gray-900">
                Privacy Policy.
              </a>
            </Typography>
          </form>
        </CardBody>
      </Card>
    </div>
  )
}

export default AdminLogin;