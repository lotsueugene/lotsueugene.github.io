document.addEventListener("DOMContentLoaded", () => {
    // Vovlunteer Button functionality
    const volunteerBtn = document.getElementById("volunteerBtn");

    if (volunteerBtn) {
        volunteerBtn.addEventListener("click", function() {
            const formId = "volunteerForm";
            const formContainer = volunteerBtn.parentElement; 

            if (!document.getElementById(formId)) {
                const form = document.createElement("form");
                form.id = formId;
                form.innerHTML = `
                    <h3>Volunteer Sign-Up</h3>
                    <label for="name">Full Name:</label>
                    <input type="text" id="name" name="name" required>
                    <label for="email">Email Address:</label>
                    <input type="email" id="email" name="email" required>
                    <button type="submit">Submit</button>
                `;

                formContainer.appendChild(form);


                form.addEventListener("submit", function(e) {
                    e.preventDefault();
                    alert("Thank you for signing up to volunteer!");
                    form.reset();
                    form.remove(); 
                });
            } else {
                alert("Volunteer form is already open!");
            }
        });
    }

    // Hover effect - Profile 1
    const charityLogo1 = document.getElementById("charityLogo1");

    if (charityLogo1) {
        charityLogo1.addEventListener("mouseenter", function() {
            const infoBox1 = document.createElement("div");
            infoBox1.id = "charityInfo1"; 
            infoBox1.style.position = "absolute";
            infoBox1.style.top = `${charityLogo1.getBoundingClientRect().bottom + 10}px`; 
            infoBox1.style.left = `${charityLogo1.getBoundingClientRect().left}px`; 
            infoBox1.style.padding = "10px";
            infoBox1.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
            infoBox1.style.color = "white";
            infoBox1.style.borderRadius = "5px";
            infoBox1.style.maxWidth = "300px";
            infoBox1.style.zIndex = "1000";
            infoBox1.innerHTML = `
                <h4>The Signatry</h4>
                <p>Biblical Generosity through Donor Advised Funds</p>
            `;
            document.body.appendChild(infoBox1);
        });

        charityLogo1.addEventListener("mouseleave", function() {
            const infoBox1 = document.getElementById("charityInfo1");
            if (infoBox1) {
                infoBox1.remove();
            }
        });
    }

    // Hover effect - Profile 2
    const charityLogo2 = document.getElementById("charityLogo2");

    if (charityLogo2) {
        charityLogo2.addEventListener("mouseenter", function() {
            const infoBox2 = document.createElement("div");
            infoBox2.id = "charityInfo2"; 
            infoBox2.style.position = "absolute";
            infoBox2.style.top = `${charityLogo2.getBoundingClientRect().bottom + 10}px`; 
            infoBox2.style.left = `${charityLogo2.getBoundingClientRect().left}px`; 
            infoBox2.style.padding = "10px";
            infoBox2.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
            infoBox2.style.color = "white";
            infoBox2.style.borderRadius = "5px";
            infoBox2.style.maxWidth = "300px";
            infoBox2.style.zIndex = "1000";
            infoBox2.innerHTML = `
                <h4>Our Location/h4>
                <p>2401 Gillham Road, Kansas City, MO 64.</p>
            `;
            document.body.appendChild(infoBox2);
        });

        charityLogo2.addEventListener("mouseleave", function() {
            const infoBox2 = document.getElementById("charityInfo2");
            if (infoBox2) {
                infoBox2.remove();
            }
        });
    }

    // Hover effect - Profile 3
    const charityLogo3 = document.getElementById("charityLogo3");

    if (charityLogo3) {
        charityLogo3.addEventListener("mouseenter", function() {
            const infoBox3 = document.createElement("div");
            infoBox3.id = "charityInfo3"; 
            infoBox3.style.position = "absolute";
            infoBox3.style.top = `${charityLogo3.getBoundingClientRect().bottom + 10}px`; 
            infoBox3.style.left = `${charityLogo3.getBoundingClientRect().left}px`; 
            infoBox3.style.padding = "10px";
            infoBox3.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
            infoBox3.style.color = "white";
            infoBox3.style.borderRadius = "5px";
            infoBox3.style.maxWidth = "300px";
            infoBox3.style.zIndex = "1000";
            infoBox3.innerHTML = `
                <h4>About us</h4>
                <p>What we do and how we do it is covered in other areas of the site. Find out more about AMF here.</p>
            `;
            document.body.appendChild(infoBox3);
        });

        charityLogo3.addEventListener("mouseleave", function() {
            const infoBox3 = document.getElementById("charityInfo3");
            if (infoBox3) {
                infoBox3.remove();
            }
        });
    }

    // Hover effect - Profile 4
    const charityLogo4 = document.getElementById("charityLogo4");

    if (charityLogo4) {
        charityLogo4.addEventListener("mouseenter", function() {
            const infoBox4 = document.createElement("div");
            infoBox4.id = "charityInfo4"; 
            infoBox4.style.position = "absolute";
            infoBox4.style.top = `${charityLogo4.getBoundingClientRect().bottom + 10}px`; 
            infoBox4.style.left = `${charityLogo4.getBoundingClientRect().left}px`; 
            infoBox4.style.padding = "10px";
            infoBox4.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
            infoBox4.style.color = "white";
            infoBox4.style.borderRadius = "5px";
            infoBox4.style.maxWidth = "300px";
            infoBox4.style.zIndex = "1000";
            infoBox4.innerHTML = `
                <h4>Our Location</h4>
                <p>2000 E Red Bridge Rd, Kansas City, MO 64131</p>
            `;
            document.body.appendChild(infoBox4);
        });

        charityLogo4.addEventListener("mouseleave", function() {
            const infoBox4 = document.getElementById("charityInfo4");
            if (infoBox4) {
                infoBox4.remove();
            }
        });
    }
});
