//your JS code here. If required.

    function updateTimer() {
      const timerElement = document.getElementById('timer');
      const now = new Date();

      const options = {
        month: 'numeric',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
      };

      const formattedDate = now.toLocaleString('en-US', options);
      timerElement.textContent = formattedDate;
    }

    // Update the timer every second
    setInterval(updateTimer, 1000);

    // Initial call to set the timer immediately
    updateTimer();