function func(x){
    console.log(typeof x, arguments.length);
}

func();                //==> "undefined", 0
func(1);               //==> "number", 1
func("1", "2", "3");   //==> "string", 3

function func2() {
    return arguments.callee;
}

func2();                // ==> func

function scope() {
    console.log(this, arguments.length);
}

scope() // window, 0
scope.call("foobar", [1,2]);  //==> "foobar", 1
scope.apply("foobar", [1,2]); //==> "foobar", 2

var myVar = "global";     // ==> Declare a global variable

function  abc ( ) {
    var myVar = "local";   // ==> Declare a local variable
    document.write(myVar); // ==> local
}

abc();