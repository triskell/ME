var keybindings = require('./core/keybindings');
var file = require('./core/file');
var query = require('./core/query');
var devbar = require('./core/devbar');
var cons = require('./core/console');

query.setQueryField(document.querySelector('#query'));
devbar.setDevBar(document);
cons.setConsole(document);

global.Query = query;
global.DevBar = devbar;
global.Console = cons;

keybindings.set(editor);
editor.focus();