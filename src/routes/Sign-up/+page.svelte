<script>
    let email = '';
    let username = '';
    let password = '';
    let confirm = '';
</script>

<section>
    
    <h1>Sign-up</h1>

    <h2>
        <input bind:value={email} placeholder="Southwestern Email" />
    </h2>

    <h3>
        <input bind:value={username} placeholder="Username" />
    </h3>

    <h4>
        <input bind:value={password} placeholder="Password" />
    </h4>

    <h5>
        <input bind:value={confirm} placeholder="Confirm Password" />
    </h5>
	<!-- User input, text fields, and place holders from https://svelte.dev/examples/text-inputs-->

</section>

<style>
    section {
        text-align: center;
    }
</style>