<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DataCarController extends AbstractController
{
    /**
     *  @Route("/data/", name="dataCar", methods={"POST", "HEAD"})
    */
    public function dataCar(Request $request): Response
    {
        $test = new Response(json_encode($request));
        print_r($test);
        return $test;
    }
}
