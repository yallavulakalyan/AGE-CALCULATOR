// Function to calculate age details
function calculateAge() {
    const name = document.getElementById("name").value;
    const dob = new Date(document.getElementById("dob").value);

    if (!name || !dob) {
        alert("Please enter both your name and date of birth!");
        return;
    }

    const today = new Date();
    const ageInMilliseconds = today - dob;
    
    // Calculate years, months, days, hours, minutes, and seconds
    const ageDate = new Date(ageInMilliseconds);
    const years = ageDate.getUTCFullYear() - 1970;
    const months = ageDate.getUTCMonth();
    const days = ageDate.getUTCDate() - 1;
    
    const weeks = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 7));
    const hours = Math.floor((ageInMilliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((ageInMilliseconds % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((ageInMilliseconds % (1000 * 60)) / 1000);

    // Display age details
    document.getElementById("result-name").textContent = `Hello, ${name}!`;
    document.getElementById("age-years").textContent = `Age: ${years} years`;
    document.getElementById("age-months").textContent = `Months: ${months} months`;
    document.getElementById("age-weeks").textContent = `Weeks: ${weeks} weeks`;
    document.getElementById("age-days").textContent = `Days: ${days} days`;
    document.getElementById("age-hours").textContent = `Hours: ${hours} hours`;
    document.getElementById("age-minutes").textContent = `Minutes: ${minutes} minutes`;
    document.getElementById("age-seconds").textContent = `Seconds: ${seconds} seconds`;

    // Calculate the next birthday
    const nextBirthday = new Date(dob);
    nextBirthday.setFullYear(today.getFullYear());

    if (today > nextBirthday) {
        nextBirthday.setFullYear(today.getFullYear() + 1);
    }

    const nextBirthdayTime = nextBirthday.getTime();
    const timeUntilNextBirthday = nextBirthdayTime - today.getTime();

    const nextBirthdayDays = Math.floor(timeUntilNextBirthday / (1000 * 60 * 60 * 24));
    const nextBirthdayHours = Math.floor((timeUntilNextBirthday % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const nextBirthdayMinutes = Math.floor((timeUntilNextBirthday % (1000 * 60 * 60)) / (1000 * 60));
    const nextBirthdaySeconds = Math.floor((timeUntilNextBirthday % (1000 * 60)) / 1000);

    document.getElementById("next-birthday").textContent =
        `Your next birthday is in: ${nextBirthdayDays} days, ${nextBirthdayHours} hours, ${nextBirthdayMinutes} minutes, ${nextBirthdaySeconds} seconds.`;
}
