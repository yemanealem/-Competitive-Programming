const gradingStuent=(grades)=> {
      
             var output=[]

             for(var i=0;i<grades.length;i++)
               {

               if(grades[i]>=38)
                 {
                    if(grades[i]%5===3)
                      {
                        output.push(grades[i]+2)
                      }
                     else if(grades[i]%5===4)
                       {
                         output.push(grades[i]+1)
                       }
                       else
                         {
                            output.push(grades[i])
                         }

                 }
              else
                 {
             output.push(grades[i])

                 }

               }

   return output
           }


     console.log(gradingStuent([83,38,67,71,49]))      