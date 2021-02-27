<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Providers\Action;
use App\Providers\EnglishConvertion;
use App\Providers\CartAction;
use App\Models\Status;
use App\Models\Cart;
use DB;


class CartController extends Controller
{
    // Show Cart
    public function show(CartAction $cart) {
        $cart->visible();
    }

    // Store
    public function store($course_id,Request $request) {

        DB::beginTransaction();

        try {
            // Insert into cart
            $cart = Cart::create([
                'course_id' => $course_id,
                'user_id' => Auth::user()->id
            ]);

            DB::commit();

        } catch(Exception $e) {
            throw $e;
            DB::rollBack();
        }

        return response()->json('اطلاعات با موفقیت به سبد خرید اضافه شد');
    }

    // delete
    public function delete(Action $action,$id) {
        return $action->delete(Cart::class, $id);
    }
}
