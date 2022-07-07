

const config = {
    headers: { 
        'content-type': 'application/json'
    }
} 





export const getDateTime =()=>{
    var date = new Date();
            var day:any = date.getDate();
            var month:any = date.getMonth() + 1;
            var year = date.getFullYear();
            
            if (month < 10) month = "0" + month;
            if (day < 10) day = "0" + day;
            
            var today = year + "-" + month + "-" + day; 
  
            return (today+' '+new Date().toLocaleTimeString()).slice(0,19);
  }

export const timeSince=(date:any) =>{

    var tdate:any = new Date();
    var seconds = Math.floor((tdate - date) / 1000);
  
    var interval = seconds / 31536000;
    if (interval > 1) {
     // return date.toISOString().slice(0,10)
      return Math.floor(interval) + " years ago";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      //return date.toISOString().slice(0,10)
      return Math.floor(interval) + " months ago";
    }
    interval = seconds / 86400;
    if (interval > 1) {
      
      //return date.toISOString().slice(0,10)
      return Math.floor(interval) + " days ago";
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + " hours ago";
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + " minutes ago";
    }
    return Math.floor(seconds) + " seconds ago";
  }




export function htmlEntities(str:any) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

export const abbreviate=(n:number,d:number)=>{
  var  x=(''+n).length,
    p=Math.pow,
    d=p(10,d)
    x-=x%3
return Math.round(n*d/p(10,x))/d+" kMGTPE"[x/3]}



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

export const convertDateTime=(date:string)=>{
    let result = ''
    if(date!=='0000-00-00 00:00:00'){
   result = new Date(date).toISOString().slice(0,19)
    }else{
      result =''
    }
    return result
  }



export const getBritishDate=(dateString:any)=>{
    var months = ['January', 'February', 'March', 
    'April', 'May', 'June', 'July', 
    'August', 'September', 'October', 'November', 'December'];
  
  var splitDate = dateString.split('-');
  var month = Number(splitDate[1])-1; //Javascript months are 0-11
  var surfix = getRank(splitDate[2]).toLowerCase()
  
  let newDate = parseInt(splitDate[2])+surfix+ ' '+ months[month]+ ', '+splitDate[0]
  
  return newDate
  }


  
  export const getRank=(i:number)=> {
    var j = i % 10,
        k = i % 100;
    if (j == 1 && k != 11) {
        return  "st";
    }
    if (j == 2 && k != 12) {
        return  "nd";
    }
    if (j == 3 && k != 13) {
        return  "rd";
    }
    return  "th";
}



    export const shortText = function(text:string, limit:number){
        if (text.length > limit){
            for (let i = limit; i > 0; i--){
                if(text.charAt(i) === ' ' && (text.charAt(i-1) !== ','||text.charAt(i-1) !== '.'||text.charAt(i-1) !== ';')) {
                    return text.substring(0, i) + '...';
                }
            }
             return text.substring(0, limit) + '...';
        }
        else
            return text;
      };

export  const getDateDifference=(from:string)=>{
  var fromDate =  new Date(from);
  var toDate =  new Date();
  var diff_time = toDate.getTime()-fromDate.getTime()
  var differ = diff_time/(1000*3600*24); 
  return Number(differ)
  }

      
export const getDays=(date:Date)=>{
    let day;
    switch (new Date(date).getDay()){
        case 0:
            day ="Sunday";
            break;
        case 1:
            day ="Monday";
            break;
        case 2:
            day ="Tuesday";
           break;
        case 3:
            day ="Wednessday";
                break;
        case 4:
            day ="Thursday";
                break;
        case 5:
            day ="Friday";
            break;
        case 6:
            day ="Saturday"
            break;
        default:
            day="Sunday"
    }
        return day
    }