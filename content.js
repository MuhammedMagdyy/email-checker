document.addEventListener('DOMContentLoaded', function () {
	chrome.runtime.onMessage.addListener(function (message) {
		const checker = document.getElementById('checker');
		checker.textContent = message.message;
	});
	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
		// Send a message to the content script to trigger the color change
		chrome.scripting.executeScript({
			target: { tabId: tabs[0].id },
			function: () => {
				// Define the changeEmailColors function in the content script
				function changeEmailColors() {
					const emails = document.querySelector('.aiL'); // Adjust the selector to match Gmail's email elements
					const content = emails.textContent.toLowerCase();
					const background = document.querySelector('.gs');
					rejectionKeywords.forEach((keyword) => {
						if (content.includes(keyword.toLowerCase())) {
							chrome.runtime.sendMessage({ message: 'huh, you thought you were good! huh' });
							background.style.backgroundColor = '#FDA4AF';
							background.style.border = '2px solid #E11D48';
							background.style.borderRadius = '5px';
							background.style.padding = '10px';
						}
					});

					acceptanceKeywords.forEach((keyword) => {
						if (content.includes(keyword.toLowerCase())) {
							chrome.runtime.sendMessage({ message: "that's why you are the GOAT!!" });
							background.style.backgroundColor = '#5EEAD4';
							background.style.border = '2px solid #14B8A6';
							background.style.borderRadius = '5px';
							background.style.padding = '10px';
						}
					});
				}
				// Call the changeEmailColors function
				changeEmailColors();
			},
		});
	});
});

const rejectionKeywords = [
	'another applicant',
	'Regret',
	"We're sorry",
	'We cannot',
	'forward with another',
	'We regret to inform you',
	'Unfortunately',
	'It is not possible',
	'We are unable to',
	'We must decline',
	"We won't be able to",
	'We appreciate your effort, but...',
	'While we value your application, ...',
	'Your request has not been approved.',
	'Your proposal does not meet our requirements.',
	'We cannot move forward with...',
	'We have decided to go in a different direction.',
	'After careful consideration, we have decided...',
	'Unfortunately, your request has been denied.',
	'Although we would have liked to...',
	'We understand your situation, but...',
	'We regretfully must decline...',
	'We wish we could, but...',
	'Thank you for considering us, but...',
	'We appreciate your interest, however...',
	'While your proposal is interesting, we have decided...',
	'We found some issues with...',
	'We have concerns about...',
	'Unfortunately, there are some problems with...',
	'We are not satisfied with...',
	'Instead, we suggest...',
	'You might consider...',
	'An alternative approach could be...',
	'Have you thought about...',
	'It may be challenging to...',
	'We are unsure if...',
	'We are hesitant to...',
	'We are cautious about...',
	'If certain conditions were met, we might reconsider.',
	'We would be open to discussing this further if...',
	'not to proceed',
	'decided to move ahead with another candidate',
	'decided to move ahead with another',
	'move ahead with another',
	'not been selected',
	'we have received a large number of applications, despite our urgent need for candidates',
	'we have received a large number of applications',
];

const acceptanceKeywords = [
	'Accepted',
	'Approved',
	'Confirmed',
	"You're in",
	'Welcome aboard',
	'Congratulations',
	'You made it',
	'Successful',
	'Offer extended',
	'Offer letter',
	"You're hired",
	"You're selected",
	'We are pleased to inform you',
	"You're accepted into the program",
	"You're in the team",
	"You're admitted",
	'Enrollment successful',
	'Your application has been accepted',
	"You've been chosen",
	'Admission granted',
	'we are glad to inform you',
	'you have been shortlisted',
];
