// function([string1, string2],target id,[color1,color2])
 terminalText(['Hello World 👋🏾, My name is Samuel Abatekoue Klutse,', 
 'I am a software developer from Togo 🇹🇬, residing 📍 somewhere in the US  🇺🇸.', 
 'I have a Bachelor\'s degree in Computer Science, a Master\'s in Software Engineering and currently pursuing a degree in Cyber Engineerring.',
 'You might have noticed by now, I drink coffee and sometimes code.',
'I also write some articles on Medium or try some Deep Learning algorithms with my friends.',
'Let\'s Connect:',
'Github: @sparksam',
'Twitter: @im_samk',
'LinkedIn: @samuelklutse',
'Email: klutse.samuel@gmail.com'], 'text',['orange','lightblue']);

function consoleText(line, id, color) {
  if (color === undefined) color = '#fff';
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + color)
  console.log(line)
  window.setInterval(function() {
    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = line.substring(0, letterCount)
      window.setTimeout(function() {
        x = 1;
        letterCount += x;
        waiting = false;
      }, letterCount*20)
    }else if (line.length < letterCount){
      waiting = true
    }
     else if (waiting === false) {
      target.innerHTML = line.substring(0, letterCount)
      letterCount += x;
    }
  }, letterCount *25)
}

function  terminalText(lines, id, colors){
  var target = document.getElementById(id)
  for (var x = 0; x < lines.length; x++) {

    setTimeout(function(y) {    
      id = generateUUID()
      const node = document.createElement("div")
      node.setAttribute("class","editor__line line")
      const  lineNumber = document.createTextNode(y+1)
      node.appendChild(lineNumber)

      const editorElement = document.createElement("span")
      editorElement.setAttribute("class","editor__element")
      editorElement.setAttribute("id",id)
      editorElement.innerHTML = "_"
      node.appendChild(editorElement)
      target.appendChild(node)
      consoleText(lines[y], id, colors[y])
    }, (x+1)*2000, x);
}
}

const generateUUID = () => {
  let
    d = new Date().getTime(),
    d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now() * 1000)) || 0;
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    let r = Math.random() * 16;
    if (d > 0) {
      r = (d + r) % 16 | 0;
      d = Math.floor(d / 16);
    } else {
      r = (d2 + r) % 16 | 0;
      d2 = Math.floor(d2 / 16);
    }
    return (c == 'x' ? r : (r & 0x7 | 0x8)).toString(16);
  });
};
