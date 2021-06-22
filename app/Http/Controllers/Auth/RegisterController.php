<?php

namespace App\Http\Controllers\Auth;

use Symfony\Component\HttpFoundation\Response;
use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\RegistersUsers;
use App\Providers\RedirectAuthentication;
use App\Http\Requests\StoreRegisterRequest;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use App\Models\User;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    // use RegistersUsers;

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  Request $request
     * @return \App\Models\User
     */
    public function register(StoreRegisterRequest $request) {
        
        $user = User::create($request->all());

        $user->sendEmailVerificationNotification();

        $registerToken = $user->createToken('auth-token')->plainTextToken;

        return response()->json([
            'register_token' => $registerToken,
            'message' => 'ثبت نام شما با موفقیت انجام شد'
        ], Response::HTTP_CREATED);  
    }
}