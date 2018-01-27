const exec = require('child_process').execSync;
const tellPhrase = 'tell application "System Events" to tell process "iTerm" to';

exec(`
osascript \
-e 'tell application "iTerm" to activate' \
-e '${tellPhrase} keystroke "d" using command down' \
-e '${tellPhrase} keystroke "cd ${__dirname.replace('/internals/scripts', '')}"' \
-e '${tellPhrase} key code 52' \
-e '${tellPhrase} keystroke "npm run start:dev"' \
-e '${tellPhrase} key code 52' \
-e '${tellPhrase} keystroke "d" using command down' \
-e '${tellPhrase} key code 123 using {command down, control down}' \
-e '${tellPhrase} key code 123 using {command down, control down}' \
-e '${tellPhrase} key code 123 using {command down, control down}' \
-e '${tellPhrase} key code 123 using {command down, control down}' \
-e '${tellPhrase} key code 123 using {command down, control down}' \
-e '${tellPhrase} key code 123 using {command down, control down}' \
-e '${tellPhrase} key code 123 using {command down, control down}' \
-e '${tellPhrase} key code 123 using {command down, control down}' \
-e '${tellPhrase} key code 123 using {command down, control down}' \
-e '${tellPhrase} key code 123 using {command down, control down}' \
-e '${tellPhrase} keystroke "cd ${__dirname.replace('/internals/scripts', '')}"' \
-e '${tellPhrase} key code 52' \
-e '${tellPhrase} keystroke "npm run test:watch"' \
-e '${tellPhrase} key code 52' \
-e '${tellPhrase} key code 126 using {command down, option down}' \
-e '${tellPhrase} keystroke "d" using {command down, shift down}' \
-e '${tellPhrase} keystroke "cd ${__dirname.replace('/internals/scripts', '')}"' \
-e '${tellPhrase} key code 52' \
-e '${tellPhrase} keystroke "npm run lint:watch"' \
-e '${tellPhrase} key code 52' \
-e '${tellPhrase} key code 123 using {command down, option down}' \
-e '${tellPhrase} key code 123 using {command down, option down}' \
-e '${tellPhrase} keystroke "w" using command down'
`);
