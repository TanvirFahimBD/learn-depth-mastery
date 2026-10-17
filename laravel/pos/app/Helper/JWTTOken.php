<?php

namespace App\Helper;

use Exception;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;

class JWTTOken
{
    public static function createToken($userEmail, $userID)
    {
        $key = env('JWT_KEY');
        $payload = [
            'iss' => 'laravel-token',
            'iat' => time(),
            'exp' => time() + 3600,
            'userEmail' => $userEmail,
            'userID' => $userID
        ];

        $token = JWT::encode($payload, $key, 'HS256');
        return $token;
    }
    public static function createTokenPasswordReset($userEmail)
    {
        $key = env('JWT_KEY');
        $payload = [
            'iss' => 'pass-reset-token',
            'iat' => time(),
            'exp' => time() + 300,
            'userEmail' => $userEmail,
            'userID' => 0
        ];

        $token = JWT::encode($payload, $key, 'HS256');
        return $token;
    }

    public static function verifyToken($token)
    {
        try {
            $key = env('JWT_KEY');
            $decoded = JWT::decode($token, new Key($key, 'HS256'));
            return $decoded;
        } catch (Exception $e) {
            return 'unauthorized';
        }
    }
}
