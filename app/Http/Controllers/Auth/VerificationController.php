<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Foundation\Auth\VerifiesEmails;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use App\Http\Controllers\Controller;
use App\Providers\RedirectAuthentication;
use App\Providers\RouteServiceProvider;
use App\Models\User;


class VerificationController extends Controller {

    // Facing any error, comment this.
    public function __construct() {
       $this->middleware('auth:sanctum')->except(['verify']);
    }

    /**
     * Verify email
     *
     * @param $user_id
     * @param Request $request
     * @return \Illuminate\Http\RedirectResponse|\Symfony\Component\HttpFoundation\Response
     */
    public function verify($user_id, Request $request) {
        if (! $request->hasValidSignature()) {

            $this->failedResponse('لینک ارائه شده منقضی یا فاقد اعتبار شده است', Response::HTTP_UNAUTHORIZED);
        }

        $user = User::findOrFail($user_id);

        if (!$user->hasVerifiedEmail()) {
            $user->markEmailAsVerified();
        }

        return redirect()->to('/login');
    }

    /**
     * Resend email verification link
     *
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function resend() {

        $user = User::find(auth()->user()->id);

        if ($user->hasVerifiedEmail()) {
            return $this->failedResponse('ایمیل شما در گذشته تایید شده است', Response::HTTP_UNAUTHORIZED);
        }

        $user->sendEmailVerificationNotification();

        return $this->successfulResponse('تاییدیه ایمیل به ایمیل شما فرستاده شد');
    }
}