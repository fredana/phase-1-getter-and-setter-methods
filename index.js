class Circle{
    constructor(radius){
        this.radius = radius;
    }
    get diameter(){
        return this.radius*2;
    }
    get circumference(){
        return Math.PI * this.diameter;
    }
    get area(){
        return Math.PI * this.radius * this.radius;
    }
      
        // Setter for diameter
        set diameter(value) {
          this.radius = value / 2;
        }
      
        // Setter for circumference
        set circumference(value) {
          this.radius = value / (2 * Math.PI);
        }
      
        // Setter for area
        set area(value) {
          this.radius = Math.sqrt(value / Math.PI);
        }
      
      
     
}