export function countDownTimer() {
	const countDownDate = new Date("Oct 5, 2024 20:37:35").getTime();

	const countdownFunction = setInterval(function () {
		const secondsText = document.querySelector("#js-seconds");
		const minutesText = document.querySelector("#js-minutes");
		const hoursText = document.querySelector("#js-hours");
		const daysText = document.querySelector("#js-days");

		const now = new Date().getTime();

		const distance = countDownDate - now;

		const days = Math.floor(distance / (1000 * 60 * 60 * 24));
		const hours = Math.floor(
			(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
		);
		const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		const seconds = Math.floor((distance % (1000 * 60)) / 1000);

		if (days < 10) {
			daysText.textContent = `0${days.toString()}`;
		} else {
			daysText.textContent = days.toString();
		}

		if (hours < 10) {
			hoursText.textContent = `0${hours.toString()}`;
		} else {
			hoursText.textContent = hours.toString();
		}

		if (minutes < 10) {
			minutesText.textContent = `0${minutes.toString()}`;
		} else {
			minutesText.textContent = minutes.toString();
		}

		if (seconds < 10) {
			secondsText.textContent = `0${seconds.toString()}`;
		} else {
			secondsText.textContent = seconds.toString();
		}

		if (distance < 0) {
			clearInterval(countdownFunction);
		}
	});
}
