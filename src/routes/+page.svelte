<script>
	import Tabs from './shared/tabs.svelte';
	import LogIn from './Log-in/+page.svelte';
	import SignUp from './Sign-up/+page.svelte';
	// Tabs
	let items = ['Home', 'Log-In', 'Sign-Up'];
	let activeItem = 'Home';
	const tabChange = (e) => {
		activeItem = e.detail;
	}
</script>

<svelte:head>
	<title>Log-in/Sign-up</title>
	<meta name="Log-in" content="Log-in/Sign-up page" />
</svelte:head>

<h1>
	<!--Page header-->
	Gym Island
</h1>

<main>
	<Tabs {activeItem} {items} on:tabChange={tabChange} />
	{#if activeItem === 'Home'}
		Home
	{:else if activeItem === 'Log-In'}
		<LogIn />
	{:else if activeItem === 'Sign-Up'}
		<SignUp />
	{/if}
</main>

<!--All content on page is aligned center-->
<style>
	h1 {
		text-align: center;
		font-size: 4em;
	}
	section {
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
		font-size: 2em;
	}

</style>
