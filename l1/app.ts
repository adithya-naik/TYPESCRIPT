// number,string,boolean
// error fount at run time only
// ts converts to js by tsc command


function add(n1 : number,n2 : number , showInConsole : boolean , headerText : string){
  if(showInConsole){
    console.log(`${headerText}`, (n1+n2))
  }
  else{
    console.log("Not performed")
  }
}
// function call
add(100,360,true,"The sum of 2 numbers : ")


// ## Interview Bit :
// unary plus + : operator converts string to number in short hand