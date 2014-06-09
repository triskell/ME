function DevBar() {

    var devbar = null;
    
    function setDevBar(document){
        this.devbar = document.querySelector('#devbar');
        
        document.querySelector('#devbar #devtools').onclick = function(){
            global.window.nwDispatcher.requireNwGui().Window.get().showDevTools();
            toggle();
        }
    }

    function toggle(){
        global.DevBar.devbar.classList.toggle('hidden');
    }
    
    
    this.setDevBar = setDevBar;
    this.toggle = toggle;
    this.devbar = devbar;
    
}
 
module.exports = new DevBar;