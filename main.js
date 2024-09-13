alert('Yo wassup! Welcome to the secret number');
let limit = 100
let secret_number = parseInt(Math.random()*limit + 1);
let guess; //chute
let guess_count=1;
while (secret_number != guess){
    guess = prompt(`Digite um numero de 1 a ${limit}`);
    if (secret_number == guess){
        //correção da concordancia numerica do ingles
        let word_attempt = guess_count > 1 ? 'attempts' : 'attempt';
            alert(`Já era hora de você acertar (: ${guess_count} ${word_tentativas}`) 
    }
    else{//errou entrou aqui
        //dica se é maior ou menor
        if(guess < secret_number){
            alert(`Você ainda está distante! O número secreto é maior que esse número ${guess}`);
        }
        else{
            alert(`Você passou do ponto! O número secreto é menor que esse número ${guess}`);
        }
        guess_count++;
    }
}