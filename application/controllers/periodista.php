<?php defined('BASEPATH') OR exit('No direct script access allowed');

class Periodista extends CI_Controller {

	function __construct()
	{
		parent::__construct();

	}

	function index()
	{
        $this->load->view('periodista/header');
        $this->load->view('periodista/menu');
        $this->load->view('periodista/index');
        $this->load->view('periodista/footer');
	}


}
