const textWrite = document.getElementById("myTextarea")
const wordCount = document.getElementById("counter")



textWrite.addEventListener("input", function() {
  countWords( );
});

// need to know about bowser event name
function countWords() { 
wordCount.textContent = textWrite.value.length + " / 200"
  
  if (textWrite.value.length < 100) {
  return textWrite.style.color = "green" 
  }
  if (textWrite.value.length < 150) {
    return textWrite.style.color = "yellow"
  }
  else {
    return textWrite.style.color = "red"
  }

}