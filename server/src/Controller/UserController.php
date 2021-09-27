<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Request;
use Doctrine\ORM\EntityManagerInterface;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\User;

class UserController extends AbstractController
{
    /**
     *  @Route("/log/", name="log", methods={"POST", "HEAD"})
    */
    public function logIn(Request $request) {
        $data = json_decode($request->getContent(), true);
        $data = $data['body'];
        
        $repository = $this->getDoctrine()
            ->getRepository(User::class);

        $userName = $repository->getUser($data[0]);
        $userPwd = $repository->getPwd($data[1]);

        if($userName == $userPwd) {
            $login = $userName;
        } else {
            $login = '';
        }


        return $this->json(["code"=>200, 'user'=>$login, 200]);
    }
}
