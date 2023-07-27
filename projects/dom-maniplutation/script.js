console.log("hello");

let title = document.getElementById("title");
console.log(title.innerText);
title.innerText = "Good Morning";

let message = "One law one way, he who never sleeps never dies!";

title.innerHTML = `<p>${message}</p>`;

title.style.color = "red";
