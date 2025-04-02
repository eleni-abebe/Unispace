const zcontainer = document.querySelector(".container");
const userR = document.querySelector(".img1");
const cpuR = document.querySelector(".img2");
const result = document.querySelector(".result");
const optionimg = document.querySelectorAll(".option_img");

// Loop through each image element
optionimg.forEach((image, index) => {
    image.addEventListener("click", (e) => {
        // Remove active class from all options before adding to the clicked one
        optionimg.forEach((img) => img.classList.remove("active"));
        image.classList.add("active");

        // Let CPU create random option
        let randomnum = Math.floor(Math.random() * 3);
        // Create array of the options
        let cpuimg = ["images/rock.png", "images/paper.png", "images/scissors.png"];
        cpuR.src = cpuimg[randomnum];

        let cpuvalue = ["R", "P", "S"][randomnum];
        let uservalue = ["R", "P", "S"][index];
        let outcomes = {
            RR: "DRAW",
            RP: "CPU",
            RS: "USER",
            PP: "DRAW",
            PR: "USER",
            PS: "CPU",
            SS: "DRAW",
            SR: "CPU",
            SP: "USER",
        };

        // Check the outcome with user and cpu value as a pair
        let outcomevalue = outcomes[uservalue + cpuvalue];

        // Display the result in text
        result.textContent = uservalue === cpuvalue ? "It's a Draw" : `${outcomevalue} won!!`;
    });
});