import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const Layout:any = (props:any)=>{
    return (
        <div className="layout-box">
            <Navbar />
            <main>{props.children}</main>
            <Footer />
        </div>
    )
}

export default Layout;