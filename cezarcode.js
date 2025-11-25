function caesarCipher(text, shift, action = 'encrypt') {
    if (action === 'decrypt') {
        shift = -shift;
    }

    return text
        .split('') 
        .map(char => {
            if (char.match(/[a-z]/i)) {
                
                const code = char.charCodeAt(0);
                
            
                const start = (code >= 65 && code <= 90) ? 65 : 97;

               
                
                
                 const newCode = ((code - start + shift) % 26 + 26) % 26 + start;

                
                return String.fromCharCode(newCode);
            }
            
            
            return char;
        })
        .join(''); 
}


const message = "Hello, JavaScript!";
const shiftKey = 3;

const encrypted = caesarCipher(message, shiftKey, 'encrypt');
console.log("Зашифровано:", encrypted); 

const decrypted = caesarCipher(encrypted, shiftKey, 'decrypt');
console.log("Розшифровано:", decrypted);
