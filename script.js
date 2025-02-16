/* script.js */
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        document.querySelector('.message').style.display = 'block';
        document.querySelector('.buttons').style.display = 'block';
    }, 3000);
});

function respond(answer) {
    document.body.innerHTML = "";
    let responseMessage = document.createElement("h1");
    responseMessage.style.textAlign = "center";
    responseMessage.style.marginTop = "20vh";
    responseMessage.style.fontSize = "2rem";
    responseMessage.style.animation = "fadeIn 2s forwards";

    if (answer === 'yes') {
        responseMessage.innerHTML = "<span style='color:green;'>Thank you for forgiving me! ❤️ Will you be mine forever? 💍</span><br><br>\"Love is not about how many days, months, or years you have been together. Love is about how much you love each other every single day.\"";
    } else {
        responseMessage.innerHTML = "<span style='color:red;'>I understand... I truly regret my actions and never wanted to hurt you. You mean so much to me, and I will do anything to make it up to you. Every moment without your forgiveness feels like a storm in my heart. Please give me another chance to prove how much I care for you. 😔</span><br><br>\"A simple sorry could never be enough to undo the pain I've caused, but I promise to do everything to make things right.\"";
    }

    document.body.appendChild(responseMessage);
}
