document.addEventListener("DOMContentLoaded", function () {
    let userInput = document.getElementById("date");
    userInput.max = new Date().toISOString().split("T")[0];
    let result = document.getElementById("result");
    let additionalresults = document.getElementById("additionalresults");

    function calculateAge() {
        let birthDate = new Date(userInput.value);

        let d1 = birthDate.getDate();
        let m1 = birthDate.getMonth() + 1;
        let y1 = birthDate.getFullYear();

        let today = new Date();

        let d2 = today.getDate();
        let m2 = today.getMonth() + 1;
        let y2 = today.getFullYear();

        let d3, m3, y3;

        y3 = y2 - y1;

        if (m2 >= m1) {
            m3 = m2 - m1;
        } else {
            y3--;
            m3 = 12 + m2 - m1;
        }

        if (d2 >= d1) {
            d3 = d2 - d1;
        } else {
            m3--;
            d3 = getDaysInMonth(y1, m1) + d2 - d1;
        }
        if (m3 < 0) {
            m3 = 11;
            y3--;
        }
        result.innerHTML = `You are <span>${y3}</span> years, <span>${m3}</span> months and <span>${d3}</span> days old`;

        let years = y3;
        let months = (y3 * 12) + m3;
        let days = Math.floor(30.44 * months) + d3;
        let weeks = Math.floor(days / 7);
        let weekday = days -(weeks * 7);
        let hours = Math.floor(24 * days);
        let minutes = Math.floor(60 * hours);
        let seconds = Math.floor(60 * minutes);

        additionalresults.innerHTML =  `<p>or ${months} months ${d3} days</p>
                                        <p>or ${weeks} weeks and ${ weekday} days</p>
                                        <p>or ${days} days</p>
                                        <p>or ${hours} hours</p>
                                        <p>or ${minutes} minutes</p>
                                        <p>or ${seconds} seconds</p>`;

    }

    function getDaysInMonth(year, month) {
        return new Date(year, month, 0).getDate();
    }

    window.calculateAge = calculateAge; // Make the function globally accessible
});
