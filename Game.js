const GameState = Object.freeze({
    WELCOMING:   Symbol("welcoming"),
    FLAT:  Symbol("flat"),
    WAIT: Symbol("wait"),
    MANSION: Symbol("mansion"),
    BUTLER: Symbol("butler"),
    TOAST: Symbol("toast")
});

module.exports = class Game{
    constructor(){
        this.stateCur = GameState.WELCOMING;
    }
    
    makeAMove(sInput)
    {
        let sReply = "";
        switch(this.stateCur){
            case GameState.WELCOMING:
                sReply = "It's midnight and you are about to enter the building. Do you want to enter or leave?";
                this.stateCur = GameState.FLAT;
                break;
            case GameState.FLAT:
                if(sInput.toLowerCase().match("enter")){
                    sReply = "You are alone in the corridor and waiting for the elevator. Do you want to run into the elevator or leave?";
                    this.stateCur = GameState.MANSION;
                }else{
                    sReply ="It's midnight and you are about to enter the building. Do you want to enter or leave?";
                    this.stateCur = GameState.FLAT;
                }
                break;
            case GameState.MANSION:
                if(sInput.toLowerCase().match("run")){
                    sReply = "Stopped! the elevator stopped at the top floor and there is absolute silence in the corridor. Do you want to step outside the elevator or be in the elevator?"
                    this.stateCur = GameState.BUTLER;
                }else{
                    sReply = "You are alone in the corridor and waiting for the elevator. Do you want to run into the elevator or leave?";
                    this.stateCur = GameState.MANSION;

                }
                break;
            case GameState.BUTLER:
                if(sInput.toLowerCase().match("outside")){
                    sReply = "You are waiting in front of the last room in which you have to enter and there is a haunted story about the room. Are you brave to knock the room or not?";
                    this.stateCur = GameState.TOAST;

                }else{
                    sReply = "Stopped! the elevator stopped at the top floor and there is absolute silence in the corridor. Do you want to step outside the elevator or be in the elevator?";
                    this.stateCur = GameState.BUTLER;
    
                }
                break;
            case GameState.TOAST:
                if(sInput.toLowerCase().match("knock")){
                    sReply = "Congratulations!! You have now proved you are so brave and a happy Halloween wishes. Game Over!!";
                    this.stateCur = GameState.WELCOMING;
                }else{
                    sReply = "You are waiting in front of the last room in which you have to enter and there is a haunted story about the room. Are you brave to enter the room or not?";
                    this.stateCur = GameState.TOAST;
                }
        }
        return([sReply]);
    }
}