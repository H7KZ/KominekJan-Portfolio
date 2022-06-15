const aboutListRaw = [
	{
		icon: 'icons/me.svg',
		text: 'Hello, I am a *freelance Front-end Developer*, *Minecraft Plugin Developer* and *student of Cyber Security* at SSPŠ.'
	},
	{
		icon: 'icons/code.svg',
		text: 'As a *Front-end Developer* I have *~2 year experience* in *HTML, CSS, JS*. And then *~1 year experience* in *tailwindCSS, TypeScript and framework Svelte* I am *able to create any website* the client has in mind & I do like when client have ideas that they want to digitalize.'
	},
	{
		icon: 'icons/java.svg',
		text: "In my *Minecraft Plugin Developer* career I have *~1 year experience* of *Java and Spigot API*. I like to work on *smaller / medium size plugins* that aren't much complicated and so they can be *completed quickly to satisfy the customer play*."
	},
	{
		icon: 'icons/book.svg',
		text: 'Currently I am studying a *2nd year* of *IT/Cyber Security* at high school in the Czech Republic. Here I have gained *knowledge of programming language C#, Hardware, Linux, Bash...*'
	}
];

let aboutList = [];

for (let i = 0; i < aboutListRaw.length; i++) {
    let aboutRaw = aboutListRaw[i];

	// @ts-ignore
	aboutRaw.text = aboutRaw.text.split('*');

	aboutList.push(aboutRaw);
}

export default aboutList;
