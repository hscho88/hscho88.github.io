    const name=document.getElementById("name");
    const form = document.getElementById('personalForm');
    const courseContainer = document.getElementById('courseContainer');
    const addCourseBtn = document.getElementById('addCourseBtn');
    const submitBtn = document.getElementById('submitbtn');
    const outputDiv=document.getElementById("div-output");
    // 🔹 Add course fields
    addCourseBtn.addEventListener('click', () => {
        const courseDiv = document.createElement('div');
        courseDiv.classList.add('course');
        courseDiv.innerHTML = `
            <label>Course Title:</label>
            <input type="text" name="courseTitle" required>

            <label>Course Description:</label>
            <input type="text" name="courseDesc" required>

            <button type="button" class="deleteBtn">Delete</button>
        `;

        // Delete button functionality
        courseDiv.querySelector('.deleteBtn').addEventListener('click', () => {
            courseDiv.remove();
        });

        courseContainer.appendChild(courseDiv);
    });

    // 🔹 Handle form submission
    submitBtn.addEventListener("click", (e) => {
        e.preventDefault();
    
        if (!form.checkValidity()) {
            form.reportValidity();
            alert("Please fill out all required fields.");
            return;
        }
    
        // Gather form data
        const name = document.getElementById("name").value;
        const mascot = document.getElementById("mascot").value;
        const image = document.getElementById("image").files[0]; // this is a File object
        const imageCaption = document.getElementById("imageCaption").value;
        const personalBackground = document.getElementById("personalBackground").value;
        const professionalBackground = document.getElementById("professionalBackground").value;
        const academicBackground = document.getElementById("academicBackground").value;
        const webDevBackground = document.getElementById("webDevelopmentBackground").value;
        const platform = document.getElementById("platform").value;
        const funnyThing = document.getElementById("funnyThing").value;
        const anythingElse = document.getElementById("anythingElse").value;
    
        // Collect course info
        const courseDivs = document.querySelectorAll("#courseContainer .course");
        let courseList = "";
        courseDivs.forEach(course => {
            const title = course.querySelector('[name="courseTitle"]').value;
            const desc = course.querySelector('[name="courseDesc"]').value;
            courseList += `<li><strong>${title}</strong>: ${desc}</li>`;
        });
    
        // Display info
        outputDiv.innerHTML = `
            <h2>${name} - "${mascot}"</h2>
            ${image ? `<img src="${URL.createObjectURL(image)}" alt="Uploaded Image" style="max-width: 300px;"><p style="text-align: center; font-style: italic;">${imageCaption}</p>` : ''}
            <p><strong>Personal Background:</strong> ${personalBackground}</p>
            <p><strong>Professional Background:</strong> ${professionalBackground}</p>
            <p><strong>Academic Background:</strong> ${academicBackground}</p>
            <p><strong>Web Dev Background:</strong> ${webDevBackground}</p>
            <p><strong>Primary Platform:</strong> ${platform}</p>
            <p><strong>Courses:</strong></p>
            <ul>${courseList}</ul>
            <p><strong>Funny/Interesting Thing:</strong> ${funnyThing}</p>
            <p><strong>Anything Else:</strong> ${anythingElse}</p>
        `;
        form.style.display = "none";

    });

    const resetBtn = document.getElementById("resetBtn");

resetBtn.addEventListener("click", () => {
    form.reset();                        // Clear all fields
    form.style.display = "block";       // Show the form again
    outputDiv.innerHTML = "";           // Clear the output

    // Remove any extra course inputs except the first one
    const courseDivs = document.querySelectorAll("#courseContainer .course");
    courseDivs.forEach((div, index) => {
        if (index > 0) div.remove(); // keep the first one, remove extras
    });
});

    

    

   

