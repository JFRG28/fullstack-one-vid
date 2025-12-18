function sendMessage() {
    // Get the button element
    const button = document.getElementById('submitButton');
    
    // Replace the button with a paragraph
    button.outerHTML = `
        <div id="announce" aria-live="polite">
            <p 
                id="submitMessage" class="submit-message">Message sent! ✅
            </p>
        </div>
        `
    
    // Get the home link element and add focus to it
    
}

// Here's your challenge:
// 1. Update the code so that pressing the submit button 'politely' announces the new revealed sumbit message.