<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomepageController extends AbstractController
{
    /**
     * @Route("/", name="app.homepage")
     */
    public function indexAction(): Response
    {
        return $this->render('indexxx.html.twig');
    }

    /**
     * @Route("/home", name="app.homepage.home")
     */
    public function homeAction(): Response
    {
        return $this->render('home.html.twig');
    }
}

