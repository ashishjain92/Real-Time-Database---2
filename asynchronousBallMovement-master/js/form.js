class Form {
    constructor () {

    }
    display(){
       var title = createElement('h2')
       title.html("Car Racing Game PRO");
       title.position(130,0);
       var input = createInput("NAME");
       var button = createButton("PLAY");
       var greeting = createElement('h2');
       input.position(130,100);
       button.position(250,200);
       button.mousePressed(function() {
           input.hide();
           button.hide();
       var Name = input.value();
       playerCount = playerCount + 1;
       player.update(Name);
           player.updateCount(playerCount);
           greeting.html("Hello" + Name);
           greeting.position(130,160);
       })
    }
}