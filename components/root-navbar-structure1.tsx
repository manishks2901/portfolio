interface RootNavbarProps {
    title:string;
    MainNavbarLinks:React.FC;
    MobileNavbar:React.FC;
}
const RootNavbar:React.FC<RootNavbarProps> = ({
    title,
    MainNavbarLinks,
    MobileNavbar
}) => {
    return ( 
        <nav>
            <div className="relatve px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
                {/* Company's Name */}
                <div className="lg:text-3xl sm:text-2xl font-semibold">
                    {title}
                </div>
                <div className="hidden sm:flex flex-1 justify-center">
                    <MainNavbarLinks/>
                </div>
                
                <div className="hidden sm:flex relative">

                    <p className="font-sans text-xl font-semibold underline underline-offset-1 ">En</p>
                </div>    
                <div className="sm:hidden flex items-center">
                    <MobileNavbar/>
                </div>

            </div>
        </nav>
     );
}
 
export default RootNavbar;