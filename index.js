function x(){
    return null
}
function receivesAFunction(x){
    x();
    return null
}
function returnsANamedFunction(){
    return function babbooey(){
        return null
    }
}
function returnsAnAnonymousFunction() {
    return (z)=>z
}