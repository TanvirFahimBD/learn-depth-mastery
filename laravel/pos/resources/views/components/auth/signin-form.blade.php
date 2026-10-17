<div class="auth-wrapper">
    <div class="auth-card" id="signinForm-wrapper">

        <h3 class="text-center mb-4">Sign In</h3>

        <form id="signinForm">
            <div class="mb-3">
                <label class="form-label">Email * </label>
                <input type="email" name="email" id="email" class="form-control" required placeholder="Your Email">
            </div>

            <div class="mb-3">
                <label class="form-label">Password *</label>
                <div class="input-group">
                    <input
                        type="password"
                        name="password"
                        id="password"
                        class="form-control"
                        required placeholder="Your Password">

                    <button
                        type="button"
                        class="btn btn-outline-secondary"
                        id="togglePassword">
                        👁
                    </button>
                </div>
            </div>

            <p class="top-margin"><a href="/forget-password" class="unlink-anchor">Forget Password ?</a></p>

            <button type="button" class="btn btn-primary w-100" id="submitBtn">
                Sign In
            </button>

            <p class="top-margin">Don't have an account? <a href="/register" class="unlink-anchor">Register</a> </p>
        </form>

    </div>
</div>


<script>
    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
        return null;
    }

    $(document).ready(function() {
        axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
        getCookieInfo();


        function getCookieInfo() {
            let token = getCookie('token');
            if (token) {
                window.location.href = '/dashboard';
            }
        }
    });


    $('#togglePassword').on('click', function() {
        let passwordInput = $('#password');
        let type = passwordInput.attr('type') === 'password' ? 'text' : 'password';
        passwordInput.attr('type', type);
        $(this).text(type === 'password' ? '👁' : '🙈');
    });

    $('#submitBtn').on('click', submitLogin);

    async function submitLogin() {
        let email = $('#email').val().trim();
        let password = $('#password').val().trim();

        if (!email) {
            showErrorToast('Email is required');
            return;
        }

        if (!password) {
            showErrorToast('Password is required');
            return;
        }

        try {
            $('#loader').fadeIn(150).removeClass('hidden');
            $('#submitBtn').prop('disabled', true);
            let response = await axios.post('/user-login', {
                email: email,
                password: password
            });

            if (response.status === 200) {
                showSuccessToast(response.data.message || 'Login successful');
                setTimeout(() => {
                    window.location.href = '/dashboard';
                }, 1500);
            }
        } catch (error) {
            let msg = 'Something went wrong';
            if (error.response) {
                msg = error.response.data.message || msg;
            } else if (error.request) {
                msg = 'Server not responding';
            }
            showErrorToast(msg);
        } finally {
            $('#loader').fadeOut(150).addClass('hidden');
            $('#submitBtn').prop('disabled', false);
        }
    }
</script>