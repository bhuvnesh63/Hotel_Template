// document.addEventListener("DOMContentLoaded", () => {
//     function counter(id, start, end, duration) {
//         let object = Document.getElementById(id),
//             current = start,
//             range = end - start,
//             increment = end > start ? 1 : -1,
//             step = Math.abs(Math.floor(duration / range)),
//             timer = setInterval(() => {
//                 current += increment;
//                 obj.textcontent = current;
//                 if (current == end) {
//                     clearInterval(timer);
//                 }
//             }, step);
//     }
//     counter("count1", 0, 1234, 3000);
//     counter("count2", 100, 1245, 2500);
//     counter("count3", 0, 1765, 3000);
//     counter("count4", 0, 7110, 3000);
// });



// counter design
document.addEventListener("DOMContentLoaded", () => {
   function counter(id, start, end, duration){
       let obj = document.getElementById(id),
       current = start,
       range = end - start,
       increment = end > start ? 1 : -1,
       step = Math.abs(Math.floor(duration /  range)),
       timer = setInterval(() => {
           current += increment;
           obj.textContent = current;
           if(current == end){
               clearInterval(timer);
           }
       }, step);
   }
   counter("count1", 0, 5678, 3000);
   counter("count2", 100, 5786, 2500);
   counter("count3", 0, 7658, 3000);
   counter("count4", 0, 7110, 3000);
});
  
  

