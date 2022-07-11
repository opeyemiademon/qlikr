export const FormatNumber = (num:Number)=>{
    let newNumber = Number(num)
    return  newNumber.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

export const getTime =(value:String)=>{
  var timeString = String(value)
 var hourEnd = timeString.indexOf(":");
 var H:string | Number = Number(timeString.substr(0,2));
 var h: string | Number = Number(H) % 12 || 12;
 var ampm =  (Number(H)<12 || Number(H)===24)?"AM":"PM";
  if (h < 10) 
  h = "0" + h
 var result = h + timeString.substr(hourEnd, 3)+" "+ampm

return result;
}


export const convertDateTime=(date:any)=>{
 
  return new Date(date).toISOString().slice(0,19)
}


 export  const longDate=(conv:string)=>{
    if(conv!==''&&conv!=='0000-00-00'){
    var options  = {year:'numeric', month:'long', day:'numeric'}
    return new Date(conv).toLocaleDateString("en-US", {month: "long"})
    }else{
      return ''
    }
  }  