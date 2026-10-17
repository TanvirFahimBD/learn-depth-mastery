<?php

namespace App\Http\Controllers;

use App\Helper\JWTTOken;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;

class UserController extends Controller
{
    function UserRegistration(Request $request)
    {
        try {
            $user = User::where("email", $request->input("email"))->first();
            if ($user) {
                return response()->json(['status' => 'error', 'message' => 'Email already exists'], 409);
            } else {
                $user = User::where("mobile", $request->input("mobile"))->first();
                if ($user) {
                    return response()->json(['status' => 'error', 'message' => 'Mobile number already exists'], 409);
                }
            }
            User::create([
                'firstName' => $request->firstName,
                'lastName' => $request->lastName,
                'email' => $request->email,
                'mobile' => $request->mobile,
                'password' => $request->password
            ]);

            return response()->json(['status' => 'success', 'message' => 'User Registered Successfully'], 201);
        } catch (Exception $e) {
            return response()->json(['status' => 'error', 'message' => 'Something went wrong'], 500);
        }
    }

    function UserLogin(Request $request)
    {
        // sleep(5);
        try {
            $count = User::where([
                'email' => $request->email,
                'password' => $request->password
            ])->select('id')->first();

            if ($count) {
                $token  = JWTTOken::CreateToken($request->email, $count->id);
                return response()->json(['status' => 'success', 'message' => 'User Login Successfully', 'token' => $token], 200)->cookie('token', $token, 60 * 24);
            } else {
                return response()->json(['status' => 'error', 'message' => 'Invalid Credentials'], 401);
            }
        } catch (Exception $e) {
            return response()->json(['status' => 'error', 'message' => $e->getMessage()], 500);
        }
    }

    function SendOTP(Request $request)
    {
        try {
            $count = User::where([
                'email' => $request->email,
            ])->count();

            if ($count > 0) {
                $otp = rand(100000, 999999);
                // \Mail::to($request->email)->send(new \App\Mail\OTPMail($otp));
                User::where('email', $request->email)->update(['otp' => $otp]);

                return response()->json(['status' => 'success', 'message' => 'OTP Sent Successfully'], 200);
            } else {
                return response()->json(['status' => 'error', 'message' => 'Invalid Email'], 401);
            }
        } catch (Exception $e) {
            return response()->json(['status' => 'error', 'message' => $e->getMessage()], 500);
        }
    }

    function VerifyOTP(Request $request)
    {
        try {
            $count = User::where([
                'email' => $request->email,
                'otp' => $request->otp,
            ])->count();

            if ($count > 0) {
                User::where('email', $request->email)->update(['otp' => 0]);
                $token = JWTTOken::createTokenPasswordReset($request->email, 0);

                return response()->json(['status' => 'success', 'message' => 'OTP Verified Successfully'], 200)->cookie('token', $token, 60 * 24 * 30);
            } else {
                return response()->json(['status' => 'error', 'message' => 'Invalid OTP'], 401);
            }
        } catch (Exception $e) {
            return response()->json(['status' => 'error', 'message' => $e->getMessage()], 500);
        }
    }

    function UpdatePassword(Request $request)
    {
        $email = $request->headers->get('email');
        $password = $request->input('password');
        try {
            $count = User::where([
                'email' => $email
            ])->count();
            if ($count > 0) {
                User::where('email', $email)->update(['password' => $password]);
                $token = JWTTOken::createToken($email, 0);
                return response()->json(['status' => 'success', 'message' => 'Password Updated Successfully', 'token' => $token], 200);
            } else {
                return response()->json(['status' => 'error', 'message' => 'Invalid Credentials'], 401);
            }
        } catch (Exception $e) {
            return response()->json(['status' => 'error', 'message' => $e->getMessage()], 500);
        }
    }

    function UserProfileInfo(Request $request)
    {
        $email = $request->headers->get('email');
        try {
            $data = User::where('email', $email)->first();
            if ($data) {
                return response()->json(['status' => 'success', 'message' => 'User Profile Info Retrieved Successfully', 'data' => $data], 200);
            } else {
                return response()->json(['status' => 'error', 'message' => 'Invalid Credentials'], 401);
            }
        } catch (Exception $e) {
            return response()->json(['status' => 'error', 'message' => $e->getMessage()], 500);
        }
    }

    function UpdateProfile(Request $request)
    {
        try {
            $email = $request->headers->get('email');
            User::where('email', $email)->update([
                'firstName' => $request->firstName,
                'lastName' => $request->lastName ?? '',
                'mobile' => $request->mobile
            ]);

            return response()->json(['status' => 'success', 'message' => 'Profile Updated Successfully '], 200);
        } catch (Exception $e) {
            return response()->json(['status' => 'error', 'message' => 'Something went wrong'], 500);
        }
    }

    function LogoutUser(Request $request)
    {
        return redirect('/login')->cookie('token', '', -1);
    }


    // pages
    function LoginPage()
    {
        return view('auth.signin');
    }

    function RegisterPage()
    {
        return view('auth.register');
    }

    function ForgetPasswordPage()
    {
        return view('auth.forget-password');
    }

    function VerifyOTPPage()
    {
        return view('auth.verify-otp');
    }

    function UpdatePasswordPage()
    {
        return view('auth.update-password');
    }

    function DashboardPage()
    {
        return view('dashboard.dashboard');
    }
    function ProfilePage()
    {
        return view('dashboard.profile');
    }
    function CategoryPage()
    {
        return view('dashboard.categories');
    }
}
