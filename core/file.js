var fs = require('fs');
var project = require('./project');
 
function File() {
    function open(path, editor) {
        fs.readFile(getPath(path), 'utf-8', function (error, contents) {
            project.currentFile(path);
            editor.getSession().setValue(contents);
        });
    }
     
    function save(path, editor) {
        var text = editor.getSession().getValue();
        fs.writeFile(getPath(path), text);
    }
    
    function getPath(path){
        if(path.charAt(0)==='/'){
            return path; //is an absolute path, not using project root
        }
        return (project.root() + path);
    }
     
    this.open = open;
    this.save = save;
}
 
module.exports = new File;