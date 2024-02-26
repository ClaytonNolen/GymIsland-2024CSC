<script>
	import Tabs from './shared/tabs.svelte';
	import LogIn from './Log-in/+page.svelte';
	import SignUp from './Sign-up/+page.svelte';
	import user from './user';

	// Tabs with the following labels
	let items = ['Home', 'Log-In', 'Sign-Up'];
	// default tab is Home
	let activeItem = 'Home';
	// tabChange = the event from tabs.svelte
	const tabChange = (e) => {
		// set activeItem to tab that was clicked
		activeItem = e.detail;
	}

	// toggle for whether a user is logged in or not
	$: isLoggedIn = $user === null? false : true;

	// Used for loggin a user out
	const logout = ()=>{
		user.update(val => val = null);
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
	<!--Display content from tabs.svelte-->
	<Tabs {activeItem} {items} on:tabChange={tabChange} />
	<!--if tab clicked = Home-->
	{#if activeItem === 'Home'}
		Home
	<!--if tab clicked = Log-In-->
	{:else if activeItem === 'Log-In'}
		<!--Display contents from Log-In page-->
		<LogIn />
	<!--if tab clicked = Sign-Up-->
	{:else if activeItem === 'Sign-Up'}
		<!--Display content from Sign-Up page-->
		<SignUp />
	{/if}
</main>

<!--All content on page is aligned center-->
<style>
	h1 {
		text-align: center;
		font-size: 4em;
	}

</style>
