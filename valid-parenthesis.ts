// Valid Parentheses
// Problem: Given a string containing(,), {, }, [, and], determine if the string is valid.
// Required Time Complexity: 𝑂(𝑛)

function isValid(phrase: string) {
    let par = 0;
    let curly = 0;
    let square = 0
    for (let index = 0; index < phrase.length; index++) {
        const element = phrase[index];
        if (element == "(" || element == ")") {
            if (element == "(") par++;
            else par--;
        }
        if (element == "[" || element == "]") {
            if (element == "[") square++;
            else square--;
        }
        if (element == "{" || element == "}") {
            if (element == "{") curly++;
            else curly--;
        }
    }
    return (par == 0 && curly == 0 && square == 0)
}

function validateText(phrase: string) {
    const stack: string[] = []
    const map: Record<string, string> = { ')': '(', '}': '{', ']': '[' };
    for (const i in phrase as any) {
        const char = phrase[i];
        console.log('char', char)
        if (char in map) {
            if (stack.pop() !== map[char]) return false;
        } else {
            stack.push(char);
            stack.forEach((x) => { console.log(x) })
        }
    }
    return stack.length == 0;
}

let text = "({[]})[({})]([]{})([{}])"
const x = isValid(text)
const y = validateText(text)
console.log('x', x)
console.log('y', y)
