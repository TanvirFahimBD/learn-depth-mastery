<div class="auth-wrapper">
    <div class="auth-card" id="signinForm-wrapper">
        <h3 class="text-center mb-4">Send OTP</h3>
        <form id="forgetPasswordForm">
            <div class="mb-3">
                <label class="form-label">Email * </label>
                <input type="email" name="email" id="email" class="form-control" required placeholder="Your Email">
            </div>

            <button onclick="SubmitForgetPassword()" class="btn btn-primary w-100" id="submitBtn">
                Send
            </button>
        </form>
    </div>
</div>


<script>
    $(document).ready(function() {
        axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    });

    async function SubmitForgetPassword() {
        let email = $('#email').val().trim();

        if (!email) {
            showErrorToast('Email is required');
            return;
        }

        try {
            $('#loader').fadeIn(150).removeClass('hidden');
            $('#submitBtn').prop('disabled', true);
            let response = await axios.post('/send-otp', {
                email: email
            });

            if (response.status === 200) {
                showSuccessToast(response.data.message || 'Login successful');
                sessionStorage.setItem('email', email);
                setTimeout(() => {
                    window.location.href = '/otp-verify';
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