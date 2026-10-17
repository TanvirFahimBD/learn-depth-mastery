<div class="auth-wrapper">
    <div class="auth-card" id="registerForm-wrapper">
        <h3 class="text-center mb-4">Registration</h3>

        <form id="registerForm">
            <div class="row mb-3">
                <div class="col-md-6 mb-3">
                    <label class="form-label">First Name *</label>
                    <input type="text" name="firstName" id="firstName" class="form-control" required placeholder="Your First Name">
                </div>

                <div class="col-md-6 mb-3">
                    <label class="form-label">Last Name</label>
                    <input type="text" name="lastName" id="lastName" class="form-control" placeholder="Your Last Name">
                </div>

                <div class="col-md-6 mb-3">
                    <label class="form-label">Email *</label>
                    <input type="email" name="email" id="email" class="form-control" required placeholder="Your Email">
                </div>

                <div class="col-md-6 mb-3">
                    <label class="form-label">Mobile</label>
                    <input type="text" name="mobile" id="mobile" class="form-control" placeholder="Your Mobile Number">
                </div>

                <div class="col-md-6 mb-3">
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

                <div class="col-md-6" style="margin-top: 30px;">
                    <button onclick="SubmitRegister()" class="btn btn-primary w-100" id="submitBtn">
                        Register
                    </button>
                </div>

                <p class="top-margin">Already have an account? <a href="/login" class="unlink-anchor">Login</a></p>

            </div>
        </form>

    </div>
</div>



<script>
    $(document).ready(function() {
        axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    });

    $('#togglePassword').on('click', function() {
        let passwordInput = $('#password');
        let type = passwordInput.attr('type') === 'password' ? 'text' : 'password';
        passwordInput.attr('type', type);
        $(this).text(type === 'password' ? '👁' : '🙈');
    });

    async function SubmitRegister() {
        let firstName = $('#firstName').val().trim() || '';
        let lastName = $('#lastName').val().trim() || '';
        let email = $('#email').val().trim() || '';
        let mobile = $('#mobile').val().trim() || '';
        let password = $('#password').val().trim() || '';

        if (!firstName) {
            showErrorToast('First Name is required');
            return;
        }

        if (!email) {
            showErrorToast('Email is required');
            return;
        }

        if (!mobile) {
            showErrorToast('Mobile number is required');
            return;
        }

        if (!password) {
            showErrorToast('Password is required');
            return;
        }

        try {
            $('#loader').fadeIn(150).removeClass('hidden');
            $('#submitBtn').prop('disabled', true);
            let response = await axios.post('/user-registration', {
                firstName: firstName,
                lastName: lastName,
                email: email,
                mobile: mobile,
                password: password
            });

            if (response.status === 201) {
                showSuccessToast(response.data.message || 'Registration successful');
                setTimeout(() => {
                    window.location.href = '/login';
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