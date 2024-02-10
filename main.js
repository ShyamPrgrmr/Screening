function show_size($event){
    let id = new String($event.target.id).split("_")[1]; 
    setAllDiselect(); 

    if(id==2){
        document.getElementById("float-menu").classList.add("additional--helper") 
    }else{
        document.getElementById("float-menu").classList.remove("additional--helper") 
    }

    show_table(("size_table_" + id));
    highlightContainer(("container-box_"+id));
    document.getElementById("amount").innerHTML = document.getElementById(("price_"+id)).innerHTML;
    
}

function highlightContainer(id){
    let element = document.getElementById(id);
    element.classList.add("selected_container");
}

function show_table(id){
    let element = document.getElementById(id);
    element.classList.remove("hide");
}

function setAllDiselect(){
    let ele = document.getElementsByName("size_table");
    ele.forEach((element)=>{
        element.classList.add("hide"); 
    }); 
    
    ele = document.getElementsByName("container-box");
    ele.forEach((element)=>{
        element.classList.remove("selected_container"); 
    });
}
