function area(shape) {
    var area = shape.width * shape.height;
    return "The shape is " + shape.name + " having an area of " + area + " cm square ";
}
console.log(area({ name: 'rectangle', width: 20, height: 15 }));
console.log(area({ name: 'square', width: 20, height: 25, color: 'blue' }));
