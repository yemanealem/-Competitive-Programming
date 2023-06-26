var reverseParentheses = function (s) {
    let stack = [];
    let str = "";
  
    for (let i = 0; i < s.length; i++) {
      if (s[i] === "(") {
        stack.push(str);
        str = "";
      } else if (s[i] === ")") {
        str = stack.pop() + str.split("").reverse().join("");
      } else {
        str += s[i];
      }
    }
  
    return str;
  };

  console.log(reverseParentheses("(u(love)i)"))