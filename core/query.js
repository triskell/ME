var file = require('./file');
var project = require('./project');

function Query() {
    
    var queryfield = null;
    
    function setQueryField(queryfield){
        this.queryfield = queryfield;
    }
    
    function query(editor, prepend){
        //set prepend field
        global.Query.queryfield.value = prepend + ':';
        //show query field
        global.Query.queryfield.classList.remove('hidden');
        //focus query
        global.Query.queryfield.focus();
        
        //lost focus
        global.Query.queryfield.onblur = function(e){
            e.preventDefault()
            back(editor);
        }
        
        //handle keyboard events
        global.Query.queryfield.onkeypress = function(e){
            var keyCode = e ? (e.which ? e.which : e.keyCode) : e.keyCode;
            if (keyCode == 13) {
                //Enter
                e.preventDefault();
                parseQuery(editor, global.Query.queryfield.value);
                back(editor);
            }
        }

        
    }
    
    function back(editor){
        global.Query.queryfield.value = '';
        global.Query.queryfield.classList.add('hidden');
        editor.focus();
    }
    
    function parseQuery(editor, value){
        var part = value.split(':');
        switch(part[0]){
            case 'w' :
                file.save(part[1], editor);
                break;
            case 'o' :
                file.open(part[1], editor);
                break;
            case 'r' :
                project.root(part[1]);
                break;
            case 'b' :
                global.Console.shell(part[1]);
                break;
        }
    }
     
    this.setQueryField = setQueryField;
    this.query = query;
}
 
module.exports = new Query;