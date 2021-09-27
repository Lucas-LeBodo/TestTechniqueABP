<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Request;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Arrivage;

class DataCarController extends AbstractController
{
    /**
     *  @Route("/data/", name="dataCar", methods={"POST", "HEAD"})
    */
    public function dataCar(Request $request, EntityManagerInterface $em)
    {
        $data = json_decode($request->getContent(), true);
        $data = $data['body'];
       
        // return $this->json(["code"=>200, 'user'=>$data[0]['Modèle'], 200]);

        foreach($data as $value) {
            // return $this->json(["code"=>200, 'user'=>$value["Modèle"], 200]);
            $car = new Arrivage();
            $car->setModele($value["Modèle"]);
            $car->setMarque($value["Marque"]);
            $car->setEnergie($value["Énergie"]);
            $car->setDateArrivee($value["Date d'entrée en arrivage"]);
            $car->setFournisseur($value["Fournisseur"]);
             $em->persist($car);
        }
       
        $em->flush();
        

    }
}
