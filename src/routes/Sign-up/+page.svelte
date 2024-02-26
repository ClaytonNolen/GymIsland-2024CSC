<script>
    import user from '../user'
</script>

<section>
    <!--Page header-->
    <h1>Sign-up</h1>

    <!--Form for signing up. Values remain empty until user input-->
    <form>
        <div>
            <label for="email">Southwestern Email</label>
            <input
                type="text"
                id="email"
                name="email"
                value=""
                required
            />
        </div>
        <div>
            <label for="username">Username</label>
            <input
                type="text"
                id="username"
                name="username"
                value=""
                required
            />
        </div>
        <div>
            <label for="password">Password</label>
            <input
                type="password"
                id="password" 
                name="password" 
                value="" 
                required
            />
        </div>
        <div>
            <label for="Confirm">Confirm Password</label>
            <input
                type="password" 
                id="confirm" 
                name="confirm" 
                value="" 
                required
            />
        </div>
        <button type="submit">Sign-up</button>
    </form>
</section>

<!--All text on page is aligned center. The form is inline-block, meaning each input field will be laid out vertically.
    A 1em margin is added to the bottom of each input field.-->
<style>
    section {
        text-align: center;
    }

    form {
        display: inline-block;
        width: 400px;
    }

    :global(input[type='text']) {
        margin-bottom: 1em;
    }

    :global(input[type='password']) {
        margin-bottom: 1em;
    }
</style>