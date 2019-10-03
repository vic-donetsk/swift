<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function index()
    {
        return view('index', [
            'translations' => $this->translations()
        ]);
    }

    private function translations()
    {
        $files = array_diff(scandir(resource_path('lang/' . app()->getLocale() . '/')), ['.', '..']);

        $translation = [];

        foreach ($files as $file) {
            $translation[mb_stristr($file, '.', true)] =
                json_decode(file_get_contents(resource_path('lang/' . app()->getLocale() . '/' . $file)));
        }

        return json_encode($translation);
    }
}
