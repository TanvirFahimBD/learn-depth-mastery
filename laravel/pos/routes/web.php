<?php

use App\Http\Controllers\UserController;
use App\Http\Middleware\TokenVeificationMiddleware;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return redirect('/login');
});

Route::post('/user-registration', [UserController::class, 'UserRegistration']);
Route::post('/user-login', [UserController::class, 'UserLogin']);
Route::post('/send-otp', [UserController::class, 'SendOTP']);
Route::post('/verify-otp', [UserController::class, 'VerifyOTP']);
Route::post('/password-update', [UserController::class, 'UpdatePassword'])->middleware([TokenVeificationMiddleware::class]);
Route::get('/logout', [UserController::class, 'LogoutUser']);



Route::get('/login', [UserController::class, 'LoginPage']);
Route::get('/register', [UserController::class, 'RegisterPage']);
Route::get('/forget-password', [UserController::class, 'ForgetPasswordPage']);
Route::get('/otp-verify', [UserController::class, 'VerifyOTPPage']);
Route::get('/update-password', [UserController::class, 'UpdatePasswordPage']);
Route::get('/profile-info', [UserController::class, 'UserProfileInfo'])->middleware([TokenVeificationMiddleware::class]);
Route::post('/profile-update', [UserController::class, 'UpdateProfile'])->middleware([TokenVeificationMiddleware::class]);



Route::get('/dashboard', [UserController::class, 'DashboardPage'])->middleware([TokenVeificationMiddleware::class]);
Route::get('/dashboard/profile', [UserController::class, 'ProfilePage'])->middleware([TokenVeificationMiddleware::class]);
Route::get('/dashboard/categories', [UserController::class, 'CategoryPage'])->middleware([TokenVeificationMiddleware::class]);

