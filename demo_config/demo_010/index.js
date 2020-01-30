// 下面代码并没有什么特别的含义，只是一个例子而已

function square(x) {
  return x * x;
};

// Objects:
const math = {
  root: Math.sqrt,
  square,
  cube: function(x) {
    return x * square(x);
  }
};

console.log(math.cube(4))
