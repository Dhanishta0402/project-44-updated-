class System{

    constructor(){}

    // Add code to authenticate the given code and the access codes.
autheticate(actualCode,enteredCode){
    textSize(30);
    fill("black");
    text(code,300,300);
    if(actualCode===enteredCode){
        
        return true
        score=score+1;
    }
    else false
}
    

}