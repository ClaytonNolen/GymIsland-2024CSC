<script>
   
</script>

<section>
    
    <h1>Log-in</h1>

    <form>
        <div>
            <label for="email">SU Email</label>
            <input
                type="text"
                id="email"
                name="email"
                value=""
            />
        </div>
        <div>
            <label for="password">Password</label>
            <input
                type="password"
                id="password"
                name="password"
                value=""
            />
        </div>
        <button type="submit">Log-in</button>
    </form>

</section>

<style>
    section {
        text-align: center;
    }
    form {
        display: inline-block;
        width: 300px;
    }

    :global(input[type='text']) {
        margin-bottom: 1em;
    }

    :global(input[type='password']) {
        margin-bottom: 1em;
    }
</style>