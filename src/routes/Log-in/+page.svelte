<script>
   import user from '../user';

   let username = '';
   let password = '';
   let currentError = '';

   const login = () => {
    fetch('TODO: URL of database', {
        method: 'post',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({username:username, password:password})
    })
    .then((res)=> {
        if(res.status < 299) return res.json()
        if(res.status > 299) currentError = 'Server Error';
    })
    .then((data) => {
        // @ts-ignore
        if(data) user.update (val => val = {...data})
    })
    // @ts-ignore
    .catch((error) => {
        currentError = error;
        console.log("Error Logging In: ", error)
    })
   }
</script>

<section>
    <!--Page header-->
    <h1>Log-in</h1>

    <!--Form for logging in. Values are left empty until user input.-->
    <form>
        <div>
            <label for="email">SU Email</label>
            <input
                type="text"
                id="email"
                name="email"
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
        <button type="submit">Log-in</button>
    </form>

</section>

<!--All text on page is alligned center. Form is inline-block, meaning input fields are displayed vertically. A 1em margin
    is added to the bottom of each input field-->
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