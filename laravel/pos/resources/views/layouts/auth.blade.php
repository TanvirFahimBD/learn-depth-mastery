<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>@yield('title', 'Auth')</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="shortcut icon" href="{{ asset('img/logo.png') }}" type="image/x-icon">

    {{-- Bootstrap --}}
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    {{-- Toastify CSS --}}
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css">
    <!-- reuseable css   -->
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
</head>

<body>
    <div id="loader" class="loader hidden">
        <div class="text-center">
            <p class="mt-3 fw-semibold">Please wait...</p>
        </div>
    </div>

    {{-- Axios --}}
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    {{-- jQuery --}}
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
    {{-- Toastify JS --}}
    <script src="https://cdn.jsdelivr.net/npm/toastify-js"></script>
    <!-- reuseable js   -->
    <script src="{{ asset('js/script.js') }}"></script>

    @yield('content')

</body>

</html>