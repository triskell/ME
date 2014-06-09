var path = require('path');

var _root = './';
var _currentFile = '';

function Project() {
    
    function root(rootpath){
        if(rootpath){
            _root = path.normalize(rootpath);
            if(_root.indexOf('/', _root.length - 1) === -1){
                _root = _root + '/'; //always end with '/'
            }
        }
        return _root;
    }
    
    function currentFile(filepath){
        if(filepath){
            _currentFile = path.normalize(filepath);
        }
        return _currentFile;
    }
    
    this.root = root;
    this.currentFile = currentFile;
}
 
module.exports = new Project;