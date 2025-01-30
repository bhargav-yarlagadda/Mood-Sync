import UserWrapper from "@/components/UserWrapper";

import Navbar from "@/components/Navbar";
import { EditorProvider } from "@/context/EditorContext";


export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
      <div>
        <EditorProvider>

          <UserWrapper>
            <div className="w-full">
            
            {children}
            </div>
            </UserWrapper>
        </EditorProvider>
      
      </div>
   
  );
}
