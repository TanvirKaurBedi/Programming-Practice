let namee = "madam"
let reverse = ""

function reverseStr() {
    for (let i = namee.length-1; i >=0; i--) {
        reverse = reverse + namee[i]
    }
    return reverse
}
reverse_word = reverseStr() 
if(reverse_word == namee){
    console.log("its a palindrome")
}else{
    console.log("its not a palindrome")
}