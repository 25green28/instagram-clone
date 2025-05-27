import { Navbar } from '@/components/navBar';

interface Props {
    children: React.ReactNode;
}

const Layout = ({ children } : Props) => {
    return (
        <div className='flex bg-[#f4f4fa]'>
            <Navbar />
            {children}
        </div>
    )
}

export default Layout;