import { SignUp } from '@clerk/nextjs';
import Image from 'next/image';

export default function Page() {
  return (
    <div className="min-h-screen min-w-screen bg-black flex items-center justify-center overflow-hidden">
      <div className="grid grid-cols-3 w-full h-full px-4 sm:px-8 md:px-12 lg:px-16">
        {/* SignIn Section */}
        <div className="col-span-1 flex items-center justify-start">
          <SignUp />
        </div>

        {/* Image Section */}
        <div className="col-span-2 flex justify-end ">
          <Image
            src={'/bear.jpg'}
            height={800}
            width={400}
            alt=""
            className="rounded-lg h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
