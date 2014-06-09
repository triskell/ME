var exec = require('child_process').exec;

function Console() {

    var console = null;
    
    function setConsole(document){
        this.console = document.querySelector('#console');
        
        this.console.onblur = function(){
            this.console.hide();
        }
        
        document.body.onclick = function(e){
          var oElem = e ? e.target : event.srcElement;
          if( oElem !== this.console){
            hide();
          }
        }
    }

    function show(){
        global.Console.console.classList.remove('hidden');
        global.Console.console.focus();
    }
    
    function hide(){
        global.Console.console.classList.add('hidden');
    }
    
    function error(str){
        global.Console.console.innerHTML += str;
    }
    
    function warning(str){
        global.Console.console.innerHTML += str;
    }
    
    function success(str){
        global.Console.console.innerHTML += str;
    }
    
    function shell(cmd){
        show();
        exec(cmd, function(err, stdout, stderr){
            if(err) error(err);
            if(stdout) success(stdout);
            if(stderr) warning(stderr);
        });
        
    }
    
    this.setConsole = setConsole;
    this.console = console;
    this.shell = shell;
}
 
module.exports = new Console;