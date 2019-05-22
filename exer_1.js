function Vector(x, y) {
    this.x = x;
    this.y = y;
  }
  
  Vector.prototype.plus = (other) => {
      return new Vector(this.x + other.x, this.y + other.y);
  }
  
  function testVector() {
    const p1 = new Vector (10, 20);
    const p2 = new Vector (-10, 5);
    const p3 = p1.plus(p2);
  
     switch(true) {
      case p1.x !== 10:
        return "fail: x property";
        break;
      case p1.y !== 20:
        return "fail: y property";
        break;
      case p2.x !== -10:
        return "fail: negative x property";
        break;
      case p3.x !== 0:
        return "fail: x from plus";
        break;
      case p3.y !== 25:
        return "fail: y from plus";
        break;
      default: "everything ok";
    }
    }
    console.log(testVector());
  