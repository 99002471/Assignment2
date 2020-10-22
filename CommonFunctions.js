const $get=function(id)
{
    return document.getElementById(id);
}
const addin=function(v1)
{
    const items=[];
    
        let processing=true;
        const list= document.getElementById("lsData");
        do{
            const cart=[];
           items.push(v1);
           //list.innerHTML="";//remove old items..
           for(const item of items)
           {
               list.innerHTML += "<li>" + item +"</li>";
           }

           processing=confirm("Do you want to add one more?");
        }while(!processing);
        return items
}
