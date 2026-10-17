<?php

namespace App\Http\Middleware;

use App\Helper\JWTTOken;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class TokenVeificationMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $token = $request->cookie('token');

        if (!$token) {
            // return response()->json(['status' => 'error', 'message' => 'Token not found'], 401);
            return redirect('/login');
        }

        $result = JWTTOken::verifyToken($token);
        if ($result === 'unauthorized') {
            return redirect('/login');
            // return response()->json(['status' => 'error', 'message' => 'Invalid token'], 401);
        }

        $request->headers->set('email', $result->userEmail);
        $request->headers->set('id', $result->userID);
        return $next($request);
    }
}
