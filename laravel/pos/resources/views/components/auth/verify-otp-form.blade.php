<div class="auth-wrapper">
    <div class="auth-card" id="signinForm-wrapper">
        <h3 class="text-center mb-4">Verify OTP</h3>
        <form id="verifyOTPForm">
            <div class="mb-3">
                <label class="form-label">OTP * </label>
                <input type="text" name="otp" id="otp" class="form-control" required placeholder="Enter OTP">
            </div>

            <button onclick="SubmitVerifyOTP()" class="btn btn-primary w-100" id="submitBtn">
                Verify
            </button>
        </form>
    </div>
</div>


<script>
    $(document).ready(function() {
        axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    });

    async function SubmitVerifyOTP() {
        let otp = $('#otp').val().trim();

        if (!otp) {
            showErrorToast('OTP is required');
            return;
        }

        try {
            $('#loader').fadeIn(150).removeClass('hidden');
            $('#submitBtn').prop('disabled', true);
            let email = sessionStorage.getItem('email');
            console.log(email);
            
            let response = await axios.post('/verify-otp', {
                email: email,
                otp: otp
            });

            if (response.status === 200) {
                showSuccessToast(response.data.message || 'OTP verified successfully');
                setTimeout(() => {
                    window.location.href = '/update-password';
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