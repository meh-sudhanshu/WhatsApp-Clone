

import classes from './homepage.module.css'
import profile_pic from '../Homepage/my_pic.jpg'
import search_icon from '../Homepage/search_icon.png'
import ChatItem from '../../components/ChatItem/ChatItem'
import { useState } from 'react'
import ChatDetails from '../../components/ChatDetails/ChatDetails'
const Homepage =()=>{

    const chats =[
        {
            id_:0,
            name_:"sudhanshu",
            time_:"08:24"
        },
        {
            id_:1,
            name_:"Manisha",
            time_:"01:24"
        },
        {
            id_:2,
            name_:"Suraj",
            time_:"10:24"
        }
    ]

    const [currentData , setCurrentData] = useState([
        [
            "Hi",
            'How are you?',
        ],
        [
            "Hello",
            "Fine , wbu?"
        ]
    ])

    const toggleChatData =(data)=>{
        setCurrentData(data)
    }
 
    return(
        <div className={classes.ctn}>
            <div className={classes.left}>
                <div className={classes.top}>
                    <div className={classes.t_left}>
                        <img src={profile_pic} className={classes.pic}></img>
                        <h2 className={classes.heading}>Chats</h2>
                    </div>
                    <div className={classes.t_right}>
                        <button className={classes.filter}>Filter</button>
                    </div>
                </div>
                <div className={classes.i_ctn}>
                    <input type="text" className={classes.i_field} placeholder="look for chats"/>
                    <img src={search_icon} alt="icon not found" className={classes.icn}></img>
                </div>
                <div className={classes.bottom}>
                    {chats.map(item=><ChatItem props={item} toggleChatData={toggleChatData}/>)}
                </div>
            </div>
            <div className={classes.right}>
                <ChatDetails data={currentData}/>
            </div>
        </div>
    )
}


export default Homepage