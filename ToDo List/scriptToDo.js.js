let ul = document.getElementById('list');
let li;

let addButton = document.getElementById('add');
addButton.addEventListener('click',addItem);
let removeButton = document.getElementById('remove');
removeButton.addEventListener('click',removeItem);

function addItem()
{
    let input = document.getElementById('input');
    let Item = input.Value;
    let ul = document.getElementById('list');
    let textNode = document.createTextNode(input.value)
    if(input.value === "")
        {
            alert("Enter Item");
        }
    else
    {
        // create li
        li=document.createElement('li');
        
        //create checkbox
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.setAttribute('id','check');
        
        //create label
        let label = document.createElement('label')
        label.setAttribute('for','Item');   //Optional line
        
        //add these Item to webpage
        
        ul.appendChild(label);
        li.appendChild(checkbox);
        label.appendChild(textNode);
        li.appendChild(label);
        ul.insertBefore(li, ul.childNodes[0]);
        setTimeout(()=>{
            li.className="visual";
        }, 10)
        
        input.value='';
        
    }
}
function removeItem()
{
    li = ul.children
    for(let index=0; index< li.length; index++)
        {
            while(li[index] && li[index].children[0].checked)
                {
                    ul.removeChild(li[index])
                }
        }
   
}