var i=0; 

 function timedCount(){ 
     for(var j=0,sum=0;j<100;j++){ 
         for(var i=0;i<100000000;i++){ 
             sum+=i; 
         } 
     } 
     document.write(sum);
     // 调用 postMessage 向主线程发送消息
 } 
document.write("Before computing,"+new Date()); 
 timedCount(); 
 document.write("After computing,"+new Date());