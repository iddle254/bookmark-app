<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\BookmarkController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', [HomeController::class, 'index'])->name('home');
Route::group(['middleware'=>['auth']], function(){
    Route::get('/bookmarks', [BookmarkController::class, 'index'])->name('bookmark.index');
    Route::get('/bookmarks/add', [BookmarkController::class, 'add'])->name('bookmark.add');
    Route::get('/bookmarks/view/{bookmark}', [BookmarkController::class, 'view'])->name('bookmark.view');

    Route::post('/bookmark/preview', [BookmarkController:: class, 'getPreviewData'])->name('bookmark.preview');
});

