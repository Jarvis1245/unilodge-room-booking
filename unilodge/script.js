function generateBookingID() {
       return "UL-" + Math.floor(100000 + Math.random() * 900000);
   }
   
   document.getElementById("booking-form").addEventListener("submit", function(event) {
       event.preventDefault(); // Prevent default form submission
   
       let isValid = true;
       let errorMessages = document.querySelectorAll(".error-message");
       errorMessages.forEach(msg => msg.style.display = "none"); // Reset error messages
   
       const name = document.getElementById("name");
       const email = document.getElementById("email");
       const studentID = document.getElementById("student-id");
       const roomType = document.getElementById("room-type");
       const checkIn = document.getElementById("check-in");
       const checkOut = document.getElementById("check-out");
   
      
       if (name.value.trim() === "") {
           showError(name, "Full Name is required.");
           isValid = false;
       }
   
      
       if (!/\S+@\S+\.\S+/.test(email.value)) {
           showError(email, "Enter a valid email address.");
           isValid = false;
       }
   
       
       if (studentID.value.trim().length < 6) {
           showError(studentID, "Student ID must be at least 6 characters long.");
           isValid = false;
       }
   
      
       if (roomType.value === "") {
           showError(roomType, "Please select a room type.");
           isValid = false;
       }
   
      
       const today = new Date().toISOString().split("T")[0];
       if (checkIn.value < today) {
           showError(checkIn, "Check-in date cannot be in the past.");
           isValid = false;
       }
       if (checkOut.value <= checkIn.value) {
           showError(checkOut, "Check-out date must be after check-in.");
           isValid = false;
       }
   
       if (isValid) {
           let bookingID = generateBookingID();
   
           
           document.querySelector(".container").innerHTML = `
               <h2>Thank You for Booking!</h2>
               <p>Your room booking request has been received.</p>
               <p><strong>Booking ID:</strong> ${bookingID}</p>
               <p>We will process your request and notify you soon.</p>
               <a href="index.html" class="back-btn">Book Another Room</a>
           `;
       }
   });
   
   function showError(input, message) {
       const errorElement = input.nextElementSibling;
       errorElement.innerText = message;
       errorElement.style.display = "block";
   }
   