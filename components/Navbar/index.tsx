'use client'
import type { NextPage } from "next";
import navs from './config';
import Link from "next/link";
import style from './index.module.scss';
import HeadPic from "../headPic";
import { usePathname } from "next/navigation";

const Navbar:NextPage = ()=>{
    let pathname = usePathname();
    return (
        <div className={style.navbarBox}>
            <div className={style.navbarLink}>
                <section className={style.logArea}>
                    <img src='/head/4.webp' alt="logo" />
                </section>
                <section className={style.navbarItem}>
                    {
                        navs?.map(nav => {
                            return (
                                <Link className={pathname === nav.value ? style.active : ''} key={nav.label} href={nav.value}>
                                    <p>{nav.label}</p>
                                </Link>
                            )
                        })
                    }
                </section>
            </div>
            <HeadPic />
        </div>
    )
}

export default Navbar;