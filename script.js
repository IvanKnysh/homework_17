let firstName = prompt("Введіть своє ім'я").trim();
let lastName = prompt("Введіть своє прізвище").trim();
let email = prompt("Введіть свій email").trim();
let year = prompt("Введіть свій рік народження").trim();

firstName = firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();
lastName = lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();
email = email.split(" ").join("").toLowerCase();

if (firstName.split(" ")[1]) {
	firstName = firstName.split(" ");
	firstName =
		firstName[0] +
		" " +
		firstName[1][0].toUpperCase() +
		firstName[1].slice(1).toLowerCase();
}

// valid email
!email.includes("@")
	? (email = `not valid email <b>${email}</b> (symbol @ not exist)`)
	: email;
email[0] == "@"
	? (email = `not valid email <b>${email}</b> (symbol @ find in first place)`)
	: email;
email.at(-1) == "@"
	? (email = `not valid email <b>${email}</b> (symbol @ find in last place)`)
	: email;

// valid year
year = new Date().getFullYear() - new Date(year).getFullYear();

// append data in HTML
document.body.innerHTML = `
	<ul>
		<li>Full name: ${firstName} ${lastName}</li>
		<li>Email: ${email}</li>
		<li>Age: ${year}</li>
	</ul>
`;
