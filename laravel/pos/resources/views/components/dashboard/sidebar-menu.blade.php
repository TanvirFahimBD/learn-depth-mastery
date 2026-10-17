 <nav>
                <!-- Main Menu Section -->
                <div class="menu-section">
                    <div class="menu-section-title">Main Menu</div>
                    <ul>
                        <li class="menu-item">
                            <a href="/dashboard" class="menu-link active">
                                <div class="menu-link-content">
                                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                    </svg>
                                    <span>Dashboard</span>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>

                <!-- Products Section -->
                <div class="menu-section">
                    <div class="menu-section-title">Products</div>
                    <ul>
                        <li class="menu-item">
                            <div class="menu-link" onclick="toggleSubmenu('products')">
                                <div class="menu-link-content">
                                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                    </svg>
                                    <span>Products</span>
                                </div>
                                <svg class="chevron" id="chevron-products" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                            </div>
                            <ul class="submenu" id="submenu-products">
                                <li><a href="/dashboard/all-products" class="submenu-link">All Products</a></li>
                                <li><a href="/dashboard/add-product" class="submenu-link">Add Product</a></li>
                                <li><a href="/dashboard/deleted-products" class="submenu-link">Deleted Products</a></li>
                                <li><a href="/dashboard/categories" class="submenu-link">Categories</a></li>
                            </ul>
                        </li>

                        <li class="menu-item">
                            <div class="menu-link" onclick="toggleSubmenu('orders')">
                                <div class="menu-link-content">
                                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                    </svg>
                                    <span>Orders</span>
                                </div>
                                <svg class="chevron" id="chevron-orders" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                            </div>
                            <ul class="submenu" id="submenu-orders">
                                <li><a href="/dashboard/all-orders" class="submenu-link">All Orders</a></li>
                                <li><a href="/dashboard/pending-orders" class="submenu-link">Pending Orders</a></li>
                                <li><a href="/dashboard/completed-orders" class="submenu-link">Completed Orders</a></li>
                                <li><a href="/dashboard/cancelled-orders" class="submenu-link">Cancelled Orders</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <!-- Settings Section -->
                <div class="menu-section">
                    <div class="menu-section-title">Settings</div>
                    <ul>
                        <li class="menu-item">
                            <div class="menu-link" onclick="toggleSubmenu('settings')">
                                <div class="menu-link-content">
                                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <span>Settings</span>
                                </div>
                                <svg class="chevron" id="chevron-settings" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                            </div>
                            <ul class="submenu" id="submenu-settings">
                                <li><a href="/dashboard/general-settings" class="submenu-link">General</a></li>
                                <li><a href="/dashboard/security-settings" class="submenu-link">Security</a></li>
                                <li><a href="/dashboard/notifications" class="submenu-link">Notifications</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>