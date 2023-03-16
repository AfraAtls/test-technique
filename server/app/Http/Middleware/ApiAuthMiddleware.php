<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;
use Laravel\Sanctum\PersonalAccessToken;
use Illuminate\Support\Facades\DB;

class ApiAuthMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if (!$request->header('Authorization')) {
            return response()->json(['message' => 'Token manquant'], 401);
        }

        $token = str_replace('Bearer ', '', $request->header('Authorization'));
        $accessToken = DB::table('personal_access_tokens')
            ->where('token', $token)
            ->first();

        if (!$accessToken) {
            return response()->json(['message' => 'Token invalide'], 401);
        }
        return $next($request);
    }
}
