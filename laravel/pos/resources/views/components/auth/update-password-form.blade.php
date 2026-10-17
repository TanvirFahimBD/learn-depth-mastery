<div class="auth-wrapper">
    <div class="auth-card" id="signinForm-wrapper">

        <h3 class="text-center mb-4">Update Password</h3>

        <form id="updatePasswordForm">
            <div class="mb-3">
                <label class="form-label">Password *</label>
                <div class="input-group">
                    <input
                        type="password"
                        name="old-password"
                        id="old-password"
                        class="form-control"
                        required placeholder="Password">

                    <button
                        type="button"
                        class="btn btn-outline-secondary"
                        id="oldTogglePassword">
                        👁
                    </button>
                </div>
            </div>

            <div class="mb-3">
                <label class="form-label">Retype Password *</label>
                <div class="input-group">
                    <input
                        type="password"
                        name="new-password"
                        id="new-password"
                        class="form-control"
                        required placeholder="Retype Password">

                    <button
                        type="button"
                        class="btn btn-outline-secondary"
                        id="newTogglePassword">
                        👁
                    </button>
                </div>
            </div>

            <button type="button" onclick="SubmitUpdatePassword()" class="btn btn-primary w-100" id="submitBtn">
                Update
            </button>

        </form>

    </div>
</div>


<script>
    $(document).ready(function() {
        axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    });

    $('#oldTogglePassword').on('click', function() {
        let passwordInput = $('#old-password');
        let type = passwordInput.attr('type') === 'password' ? 'text' : 'password';
        passwordInput.attr('type', type);
        $(this).text(type === 'password' ? '👁' : '🙈');
    });

    $('#newTogglePassword').on('click', function() {
        let passwordInput = $('#new-password');
        let type = passwordInput.attr('type') === 'password' ? 'text' : 'password';
        passwordInput.attr('type', type);
        $(this).text(type === 'password' ? '👁' : '🙈');
    });

    async function SubmitUpdatePassword() {
        let oldPassword = $('#old-password').val().trim();
        let newPassword = $('#new-password').val().trim();

        if (!oldPassword) {
            showErrorToast('Password is required');
            return;
        }

        if (!newPassword) {
            showErrorToast('Retype Password is required');
            return;
        }

        if (newPassword != oldPassword) {
            showErrorToast('Password does not match');
            return;
        }

        try {
            $('#loader').fadeIn(150).removeClass('hidden');
            $('#submitBtn').prop('disabled', true);

            let response = await axios.post('/password-update', {
                password: newPassword
            });

            if (response.status === 200) {
                showSuccessToast(response.data.message || 'Password updated successful');
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