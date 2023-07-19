'use client'
import style from './index.module.scss';
import type { NextPage } from "next";
import { useState } from "react";
const HeadPic:NextPage = ()=>{
    const [flag, setFlag] = useState(true);
    const [oldX, setOldX] = useState(0);
    const [notList, setNotList]:any[] = useState([]);
    const [notLeftList, setNotLeftList]:any[] = useState([]);
    const mouseMove = (e:any)=>{
        if(flag){
            setOldX(e.screenX);
            setFlag(false);
            let k = Array.from(document.querySelectorAll('.banitem'));
            setNotList([...k]);
            let g:any[] = []
            k.map((e:any)=>{
                g.push(e.offsetLeft)
            });
            setNotLeftList([...g]);
        }else if(Math.abs(e.screenX - oldX) < 10){
            return;
        }else {
            
            let minOffsetX;
            if(oldX - e.screenX > 0){
                minOffsetX = Math.abs((oldX - e.screenX) / 100) > 10 ? 10 : (oldX - e.screenX) / 100;
            }else{
                minOffsetX = Math.abs((oldX - e.screenX) / 100) > 10 ? -10 : (oldX - e.screenX) / 100;
            }
            notList[1].style.left = notLeftList[1] + minOffsetX + 'px';
            notList[2].style.left = notLeftList[2] + minOffsetX + 'px';
            notList[3].style.left = notLeftList[3] + minOffsetX + 'px';
            notList[4].style.left = notLeftList[4] + minOffsetX + 'px';
            notList[6].style.left = notLeftList[6] + minOffsetX * 5 + 'px';
            notList[7].style.left = notLeftList[7] + minOffsetX * 5 + 'px';
            notList[8].style.left = notLeftList[8] + minOffsetX * 5 + 'px';
            notList[9].style.left = notLeftList[9] + minOffsetX * 5 + 'px';
            notList[10].style.left = notLeftList[10] + minOffsetX * 10 + 'px';
            notList[11].style.left = notLeftList[11] + minOffsetX * 5 + 'px';
            notList[5].style.opacity = Math.abs(minOffsetX) / 10;
            notList[13].style.opacity = Math.abs(minOffsetX) / 10;
            notList[9].style.transform = `rotate(${minOffsetX / 1000}turn)`;
            notList[10].style.transform = `rotate(${minOffsetX / 1000}turn)`;
        }
    }
    const mouseLeave = () =>{
        setFlag(true);
        setOldX(0);
        notList.map((not:any,index:number)=>{
            not.style.left = notLeftList[index] + 'px'
        });
        notList[9].style.transform = `rotate(0turn)`;
        notList[10].style.transform = `rotate(0turn)`;
        notList[5].style.opacity = 1;
        notList[13].style.opacity = 1;
    }
    return(
            <div className={style.headBanner} onMouseMove={mouseMove} onMouseLeave={mouseLeave}>
                {
                    Array.from(Array(14)).map((_,index)=>{
                        return(
                            <div key={index} className={[style.banner,'banitem'].join(' ')}>
                                <img src={`/head/${index+1}.webp`} />
                            </div>
                        )
                    })
                }
            </div>
    )
}
export default HeadPic;