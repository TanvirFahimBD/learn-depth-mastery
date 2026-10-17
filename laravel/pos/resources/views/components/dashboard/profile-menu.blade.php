<div class="profile-menu-container">
                    <button class="profile-button" onclick="toggleProfileMenu()">
                        <div class="profile-avatar">JD</div>
                    </button>

                    <div class="profile-dropdown" id="profileDropdown">
                        <div class="profile-dropdown-header">
                            <div class="profile-dropdown-avatar">JD</div>
                            <div class="profile-dropdown-info">
                                <h4>John Doe</h4>
                                <p>john@example.com</p>
                            </div>
                        </div>
                        <div class="profile-dropdown-menu">
                            <a href="/dashboard/profile" class="profile-dropdown-item">
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                                Update Profile
                            </a>
                            <button class="profile-dropdown-item danger" onclick="logout()">
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                </svg>
                                Logout
                            </button>
                        </div>
                    </div>
                </div>