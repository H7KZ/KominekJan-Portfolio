<script lang="ts">
	import { onMount } from 'svelte';

	let fillColor = '#f5f9ff';

	let svgBg: SVGSVGElement;

	onMount(() => {
		window.addEventListener('scroll', () => {
			let value = window.scrollY;
			svgBg.style.top = value * 0.6 + 'px';
		});
	});
</script>

<div class="top-0 left-0 min-h-screen h-full flex flex-col items-center gap-16 px-8">
	<h1
		class="min-w-max h-full font-ms font-bold text-xl bg-gradient-to-r from-[#EFFF3A] to-[#00ffc3d2] text-[#fff0] bg-clip-text sm:text-2xl md:text-3xl lg:text-4xl"
	>
		<span class="text-grayWhite">Hi, my name is</span>&nbsp;&nbsp;<span
			class="text-5xl bg-gradient-to-tr from-[#EFFF3A] to-[#00ffc3d2] text-[#fff0] bg-clip-text sm:text-6xl md:text-7xl lg:text-8xl"
			>Jan</span
		><br />
		<span class="text-grayWhite">I am a freelance</span><br />
		Front-end Developer <span class="text-grayWhite">&</span><br />
		Minecraft Plugin Developer<span class="text-grayWhite">.</span>
	</h1>
	<a href="/#projects">
		<div
			class="flex flex-col items-center gap-1 font-ms font-medium text-sm text-grayWhite transform transition-all md:text-base hover:translate-y-2"
		>
			<h3 class="text-center">See my projects</h3>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				enable-background="new 0 0 24 24"
				viewBox="0 0 24 24"
				fill={fillColor}
				class="h-8"
				><rect fill="none" /><path
					d="M19,15l-1.41-1.41L13,18.17V2H11v16.17l-4.59-4.59L5,15l7,7L19,15z"
				/></svg
			>
		</div>
	</a>
</div>
<div />
<svg
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 1440 560"
	class="heightAbs absolute top-0 left-0 w-full -z-10"
	id="svgBg"
	bind:this={svgBg}
>
	<g mask="url(&quot;#SvgjsMask1183&quot;)" fill="none">
		<path
			d="M -14.108717807539733,202 C 81.89,229 273.89,335 465.89128219246027,337 C 657.89,339 753.89,195.8 945.8912821924603,212 C 1137.89,228.2 1233.89,422.4 1425.8912821924603,418 C 1617.89,413.6 1903.07,205.2 1905.8912821924603,190 C 1908.71,174.8 1533.18,311.6 1440,342"
			stroke="rgba(170, 223, 30, 0.21)"
			stroke-width="2"
		/>
		<path
			d="M -708.4503114827262,165 C -612.45,201.8 -420.45,343.6 -228.4503114827262,349 C -36.45,354.4 59.55,184.8 251.5496885172738,192 C 443.55,199.2 539.55,393.2 731.5496885172738,385 C 923.55,376.8 1069.86,154 1211.5496885172738,151 C 1353.24,148 1394.31,326.2 1440,370"
			stroke="rgba(170, 223, 30, 0.21)"
			stroke-width="2"
		/>
		<path
			d="M -218.0232484682403,436 C -122.02,404 69.98,288.2 261.9767515317597,276 C 453.98,263.8 549.98,388.8 741.9767515317596,375 C 933.98,361.2 1029.98,195.4 1221.9767515317596,207 C 1413.98,218.6 1658.37,421.4 1701.9767515317596,433 C 1745.58,444.6 1492.4,298.6 1440,265"
			stroke="rgba(170, 223, 30, 0.21)"
			stroke-width="2"
		/>
		<path
			d="M -222.63440293230713,208 C -126.63,227.8 65.37,297.8 257.3655970676929,307 C 449.37,316.2 545.37,252.4 737.3655970676929,254 C 929.37,255.6 1025.37,341.6 1217.3655970676928,315 C 1409.37,288.4 1652.84,110.8 1697.3655970676928,121 C 1741.89,131.2 1491.47,317 1440,366"
			stroke="rgba(170, 223, 30, 0.21)"
			stroke-width="2"
		/>
		<path
			d="M -750.9027740014218,153 C -654.9,213 -462.9,432.2 -270.9027740014218,453 C -78.9,473.8 17.1,260 209.0972259985782,257 C 401.1,254 497.1,445.6 689.0972259985782,438 C 881.1,430.4 1018.92,230 1169.0972259985783,219 C 1319.28,208 1385.82,350.2 1440,383"
			stroke="rgba(170, 223, 30, 0.21)"
			stroke-width="2"
		/>
	</g>
	<defs>
		<mask id="SvgjsMask1183">
			<rect width="1440" height="560" fill="#ffffff" />
		</mask>
	</defs>
</svg>

<style scoped>
	.heightAbs {
		height: 70vh;
	}

	@media only screen and (min-width: 768px) {
		.heightAbs {
			height: 90vh;
		}
	}
</style>
