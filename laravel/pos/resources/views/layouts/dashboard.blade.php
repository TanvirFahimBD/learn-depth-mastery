<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title', 'Dashboard')</title>
    <link rel="shortcut icon" href="{{ asset('img/logo.png') }}" type="image/x-icon">
    {{-- Bootstrap --}}
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    {{-- Toastify CSS --}}
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css">
    <!-- reuseable css   -->
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
    <link rel="stylesheet" href="{{ asset('css/dashboard-style.css') }}">
</head>

<body>
    <div class="dashboard-container">
        <!-- Sidebar -->
        <aside class="sidebar" id="sidebar">
            <div class="sidebar-header">
                <div class="sidebar-logo">Dashboard</div>
                <button class="sidebar-toggle" onclick="toggleSidebar()">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
            @include('components.dashboard.sidebar-menu')
        </aside>

        <!-- Main Content -->
        <main class="main-content" id="mainContent">
            <!-- Top Bar -->
            <div class="topbar">
                <div class="topbar-left">
                    <button class="mobile-menu-toggle" onclick="toggleSidebar()">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    <h1 class="topbar-title">POS BD</h1>
                </div>
                @include('components.dashboard.profile-menu')
            </div>

            <div id="loader1" class="loader hidden">
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


            <!-- Dynamic Content Area -->
            @yield('content')
        </main>
    </div>

    <script>
        // Toggle Sidebar
        function toggleSidebar() {
            const sidebar = document.getElementById('sidebar');
            const mainContent = document.getElementById('mainContent');
            sidebar.classList.toggle('collapsed');
            mainContent.classList.toggle('expanded');
        }

        // Toggle Submenu
        function toggleSubmenu(menuId) {
            const submenu = document.getElementById('submenu-' + menuId);
            const chevron = document.getElementById('chevron-' + menuId);
            submenu.classList.toggle('open');
            chevron.classList.toggle('rotated');
        }

        // Toggle Profile Menu
        function toggleProfileMenu() {
            const dropdown = document.getElementById('profileDropdown');
            dropdown.classList.toggle('show');
        }

        // Close profile menu when clicking outside
        document.addEventListener('click', function(event) {
            const profileContainer = document.querySelector('.profile-menu-container');
            if (!profileContainer.contains(event.target)) {
                document.getElementById('profileDropdown').classList.remove('show');
            }
        });

        // Logout function
        function logout() {
            if (confirm('Are you sure you want to logout?')) {
                axios.get('/logout')
                    .then(() => {
                        window.location.href = '/login';
                    });
            }
        }

        // Set active menu based on current URL
        document.addEventListener('DOMContentLoaded', function() {
            const currentPath = window.location.pathname;
            const submenuLinks = document.querySelectorAll('.submenu-link');

            submenuLinks.forEach(link => {
                if (link.getAttribute('href') === currentPath) {
                    link.classList.add('active');
                    // Open parent submenu
                    const parentSubmenu = link.closest('.submenu');
                    if (parentSubmenu) {
                        parentSubmenu.classList.add('open');
                        const menuId = parentSubmenu.id.replace('submenu-', '');
                        const chevron = document.getElementById('chevron-' + menuId);
                        if (chevron) chevron.classList.add('rotated');
                    }
                }
            });
        });
    </script>

</body>

</html>