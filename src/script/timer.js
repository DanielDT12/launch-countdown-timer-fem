export function countDownTimer() {
	const countDownDate = new Date("Oct 5, 2024 20:37:35").getTime();

	console.log(countDownDate);

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

		daysText.textContent = days.toString();
		hoursText.textContent = hours.toString();
		minutesText.textContent = minutes.toString();
		secondsText.textContent = seconds.toString();
	});
}
