import UserWrapper from "@/components/UserWrapper";

import Navbar from "@/components/Navbar";



export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
      <div>
          <UserWrapper>
            <div className="w-full">
            
            {children}
            </div>
            </UserWrapper>
      
      </div>
   
  );
}
