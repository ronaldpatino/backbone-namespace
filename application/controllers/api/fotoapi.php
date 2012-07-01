<?php defined('BASEPATH') OR exit('No direct script access allowed');

require APPPATH.'/libraries/REST_Controller.php';

class FotoApi extends REST_Controller
{
    public function index_get($id){
    }

	function fotoapi_get()
    {
        $data=array();
        foreach(Foto::find('all') as $foto)
        {
            $linea = array(
                            'id'=>$foto->id,
                            'imagen'=>$foto->imagen,
                            'width'=>$foto->width,
                            'height'=>$foto->height,
                            'height'=>$foto->height,
                            'seccion_id'=>$foto->seccion_id,
                            'estado'=>$foto->estado,
                            'fecha'=>$foto->fecha
                            );

            array_push($data, $linea);
        }

        $respuesta = array("success"=>"true", "data"=>$data);
        $this->response($respuesta, 200);
    }


    function foto_post()
    {
    }

    function foto_delete()
    {
    }

    function fotos_get()
    {
    }


	public function send_post()
	{
		var_dump($this->request->body);
	}


	public function send_put()
	{
		var_dump($this->put('foo'));
	}
}