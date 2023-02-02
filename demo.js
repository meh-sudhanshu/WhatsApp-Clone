

var arr1 =[1,2,3,4,5]

var arr2 = [6,7,8,9,10]

var data =[]

// 1,6,3,2,7,3,9,5,10
turn = "i"
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

console.log(data)