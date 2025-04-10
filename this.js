// Problem 1
this.name = "Alex"
function introduce() {
    console.log(this.name);
  }
  introduce();
 
// Task:
// Replace the name reference inside the function with this.name. 
// Then assign this.name = "Alex" in the global scope before calling the function (ignore the parameter when testing this).

// Q: What is printed? Why does this.name work (or not) in this context?
// Alex. It works because this is global scope.

// Problem 2

this.greeting = "Hello!"

function runArrow() {
    const arrowFunc = () => {
      console.log(this.greeting);
    };
    arrowFunc();
  }
  runArrow();

  
//   Task:
//   Replace greeting with this.greeting and assign this.greeting = "Hello!"; before calling the outer function.
  
//   Q: What does this.greeting refer to here? Why doesn't it refer to the parameter anymore? 
// This.greeting refers to the this in global scope. By saying this.greeting instead of greeting it specifically grabs the data from this.greeting

// Problem 3

const display = {
    message: "This is from the object",
    show: function () {
      console.log(this.message);
    }
  };
  display.show("Passed argument");

//   Task:
// Replace param with this.message inside the function.

// Q: What is printed now? Why does this refer to the object? What happened to the argument?
// "This is from the object" is printed. It refers to the object because you call a method from the object. The argument is not used but still passed to the method.

// Problem 4

  function handleClick() {
    console.log(this.text);
  }

  document.getElementById("myBtn").onclick = () => {
      this.text = "Clicked"
    handleClick("Clicked!");
  };

// Task:
// Instead of passing "Clicked!", change handleClick() to use this.text, and assign this.text = "Clicked!"; inside the event function. Also try the same with an arrow function.

// Q: What does this.text refer to in each case? Why does the arrow function behave differently?
//In the function it was undefined and in the arrow it is "Clicked". The arrow function behaves differently because it has lexical scope.