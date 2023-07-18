import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const Layout:any = (props:any)=>{
    return (
        <div className="layout-box">
            <Navbar />
            <main>主体{props.children}</main>
            <Footer />
        </div>
    )
}

export default Layout;