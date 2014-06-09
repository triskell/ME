var file = require('./file');
var project = require('./project');
var console = require('./console');

function KeyBindings() {
    function set(editor) {
        
        editor.commands.addCommand({
            name: "Quick save",
            bindKey: {win: "Ctrl-S", mac: "Command-S"},
            exec: function(editor) {
                file.save(project.currentFile(), editor); //sample file for now
            }
        });
        
        editor.commands.addCommand({
            name: "Save",
            bindKey: {win: "Ctrl-W", mac: "Command-W"},
            exec: function(editor) {
                global.Query.query(editor, 'w'); 
            }
        });
        
        editor.commands.addCommand({
            name: "Open",
            bindKey: {win: "Ctrl-O", mac: "Command-O"},
            exec: function(editor) {
                global.Query.query(editor, 'o');
            }
        });
        
        editor.commands.addCommand({
            name: "Quit",
            bindKey: {win: "Ctrl-Escape", mac: "Command-Escape"},
            exec: function() {
                window.close();
            }
        });
        
        editor.commands.addCommand({
            name: "Build",
            bindKey: {win: "Ctrl-B", mac: "Command-B"},
            exec: function() {
                global.Query.query(editor, 'b');
            }
        });
        
        
        editor.commands.addCommand({
            name: "Make",
            bindKey: {win: "Ctrl-M", mac: "Command-M"},
            exec: function() {
                console.shell('make');
            }
        });
        
        editor.commands.addCommand({
            name: "Toggle head bar",
            bindKey: {win: "Ctrl-Shift-H", mac: "Command-Shift-H"},
            exec: function(editor) {
                global.DevBar.toggle(editor);
            }
        });
        
        editor.commands.addCommand({
            name: "Set root project",
            bindKey: {win: "Ctrl-Shift-R", mac: "Command-Shift-R"},
            exec: function(editor) {
                global.Query.query(editor, 'r');
            }
        });
        
    }
     
    this.set = set;
}
 
module.exports = new KeyBindings;