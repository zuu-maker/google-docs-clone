import Button from '@material-tailwind/react/Button'
import Image from 'next/image'
import { signIn } from 'next-auth/client'

function Login() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <Image 
             objectFit="contain"
             height="300"
             width="550"
             src="https://i.pinimg.com/564x/c4/b7/e9/c4b7e910d6116073f9efd0e343342920.jpg"
            />
           
           <Button
            color="blue"
            buttonType="filled"
            ripple="light"
            className="w-44 mt-10"
            onClick={signIn}
            >
             Login
            </Button> 
        </div>
    )
}

export default Login
