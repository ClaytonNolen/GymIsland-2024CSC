<!--SCRIPT FOR LOGIN REDIRECT-->
<script>
        import {authHandlers, authStore} from "../store/authStore";
        let signup = false;
        let email = '';
        let password = '';
        let confirm = '';

        async function handleSubmit() {
            if (!email || !password || (signup && !confirm)) {
                return;
            }

            if (signup && password === confirm) {
                try {
                    await authHandlers.signup(email, password);
                } catch (err) {
                    console.log(err)
                }
            } else {
                try {
                    await authHandlers.signup(email, password);
                } catch (err) {
                    console.log(err)
                }
            }
            if ($authStore.currentUser) {
                window.location.href = '/account';
            }
        }
</script>