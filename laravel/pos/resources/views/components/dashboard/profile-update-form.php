<div class="wrapper-dashboard">
    <div id="dashboardForm-wrapper">
        <h3 class="text-left mb-4">Profile Info</h3>

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
                    <input type="email" name="email" id="email" class="form-control" required placeholder="Your Email" readonly>
                </div>

                <div class="col-md-6 mb-3">
                    <label class="form-label">Mobile</label>
                    <input type="text" name="mobile" id="mobile" class="form-control" placeholder="Your Mobile Number">
                </div>

                <div class="col-md-6" style="margin-top: 30px;">
                    <button onclick="SubmitProfileUpdate()" class="btn btn-primary w-100" id="submitBtn">
                        Update Profile
                    </button>
                </div>
            </div>
        </form>

    </div>
</div>



<script>
    $(document).ready(function() {
        axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    });

    getProfile();

    async function getProfile() {
        $('#loader').fadeIn(150).removeClass('hidden');
        const response = await axios.get('/profile-info');
        $('#loader').fadeIn(150).addClass('hidden');
        let data = response.data.data;
        $('#firstName').val(data.firstName || '');
        $('#lastName').val(data.lastName || '');
        $('#email').val(data.email || '');
        $('#mobile').val(data.mobile || '');
    }


    async function SubmitProfileUpdate() {
        let firstName = $('#firstName').val().trim() || '';
        let lastName = $('#lastName').val().trim() || '';
        let email = $('#email').val().trim() || '';
        let mobile = $('#mobile').val().trim() || '';

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

        try {
            $('#loader').fadeIn(150).removeClass('hidden');
            $('#submitBtn').prop('disabled', true);
            let response = await axios.post('/profile-update', {
                firstName: firstName,
                lastName: lastName,
                email: email,
                mobile: mobile,
            });

            if (response.status === 200) {
                showSuccessToast(response.data.message || 'Registration successful');
                setTimeout(() => {
                    window.location.href = '/dashboard/profile';
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