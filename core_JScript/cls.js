class car{
    constructor(brand){
        this.carname = brand;
    }
    present(){
        return "I have a " + this.carname;
}

}
mycar = new car("Ford");
console.log(mycar.carname)
console.log(mycar.present());
