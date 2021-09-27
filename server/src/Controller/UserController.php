<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Request;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\User;

class UserController extends AbstractController
{
    /**
     *  @Route("/log/", name="log", methods={"POST", "HEAD"})
    */
    public function logIn(Request $request) {
        $data = $request->getContent();
        
      return $this->json(["code"=>200, 'user'=>$data, 200]);
    }
}
