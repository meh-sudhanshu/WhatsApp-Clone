

import classes from './chat_details.module.css'
import logo from '../../pages/Homepage/my_pic.jpg'

const ChatDetails =(props)=>{

    var arr1 = [...props.data[0]]
    var arr2 =[...props.data[1]]
    var data =[]

    var turn = "i"
    for(var i =0 , j =0 ; i<arr1.length || j<arr2.length ; ){
    if(i>=arr1.length){
        while(j<arr2.length){
            data.push(arr2[j])
            j++
        }
    }else if(j>=arr2.length){
        while(i<arr1.length){
            data.push(arr1[i])
            i++
        }
    }else{
        if(turn ==="i"){
            data.push(arr1[i])
            i++
            turn="j"
        }else{
            data.push(arr2[j])
            j++
            turn="i"
        }
    }
}











    // console.log(arr1)
    // console.log(arr2)
    console.log(data)
    return(
        <div className={classes.ctn}>
            <div className={classes.header}>
                <img src={logo} className={classes.logo}/>
                <h2 className={classes.name_}>Sudhanshu</h2>
            </div>
            <div className={classes.text_ctn}>
                {data.map(item=>
                    <div className={classes.chat_ctn} >
                        <h2 className={classes.chat_text}>{item}</h2>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ChatDetails