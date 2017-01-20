function area(shape: string, width:number, height: number){
    
    let area = width*height;

    return "The shape is " + shape + "having an area of "+area+" cm squared.";

}

document.body.innerHTML = area("rectangle", 20, 15);