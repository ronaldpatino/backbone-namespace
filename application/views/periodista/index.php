<div class="container">

    <div class="row">
        <div class="span8">
            <form class="well form-inline">

                <input type="text" class="input-xlarge" placeholder="Nombre del Articulo">

                <select id="select01">
                    <option>Seleccione la Secci&oacute;n</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>

                <button class="btn btn-primary" type="submit">Crear Articulo</button>

            </form>
        </div>

    </div>

    <div class="row">
        <div class="span12">


            <table class="table table-striped table-bordered table-condensed">
                <thead>
                <tr>
                    <th style="width:20%">Articulo</th>
                    <th>Fotos</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>

                        <p>Lorem Impsum1</p>
                        <p>Secci&oacute;n: Cultura</p>
                        <span class="btn-group">
                            <a href="#" class="btn"><i class="icon-trash"></i> Borrar</a>
                            <a href="#" class="btn"><i class="icon-edit"></i> Editar</a>
                        </span>
                    </td>
                    <td>
                        <ul class="thumbnails">
                            <li class="thumbnail">
                                <?php echo img( array(  'src' => 'assets/img/sample_colors.jpg',
                                'width' => '110',
                                'height' => '110',
                                'class' => 'detalle',
                                'title' => 'NOMBRE',
                                'data-content'=>'Dimensiones: XYZ'))
                                ?>

                                <span class="btn-group">
                                    <a href="#" class="btn" rel="tooltip" title="Ver detalles foto"><i
                                        class="icon-eye-open"></i></a>
                                    <a href="#" class="btn" rel="tooltip" title="Borrar foto del Articulo"><i
                                        class="icon-trash"></i></a>
                                    <a href="#" class="btn btn-warning" rel="tooltip"
                                       title="Foto a aprovar por el editor"><i class="icon-question-sign"></i></a>
                                </span>
                            </li>
                            <li class="thumbnail">
                                <?php echo img( array(  'src' => 'assets/img/sample_colors.jpg',
                                                        'width' => '110',
                                                        'height' => '110',
                                                        'class' => 'detalle',
                                                        'title' => 'NOMBRE',
                                                        'data-content'=>'Dimensiones: XYZ'))
                                ?>
                                <span class="btn-group">
                                    <a href="#" class="btn" rel="tooltip" title="Ver detalles foto"><i
                                        class="icon-eye-open"></i></a>
                                    <a href="#" class="btn" rel="tooltip" title="Borrar foto del Articulo"><i
                                        class="icon-trash"></i></a>
                                    <a href="#" class="btn btn-success" rel="tooltip"
                                       title="Foto aprovada por el editor"><i class="icon-ok-sign"></i></a>
                                </span>
                            </li>
                            <li class="thumbnail">
                                <?php echo img( array(  'src' => 'assets/img/sample_colors.jpg',
                                'width' => '110',
                                'height' => '110',
                                'class' => 'detalle',
                                'title' => 'NOMBRE',
                                'data-content'=>'Dimensiones: XYZ'))
                                ?>

                                <span class="btn-group">
                                    <a href="#" class="btn" rel="tooltip" title="Ver detalles foto"><i
                                        class="icon-eye-open"></i></a>
                                    <a href="#" class="btn" rel="tooltip" title="Borrar foto del Articulo"><i
                                        class="icon-trash"></i></a>
                                    <a href="#" class="btn btn-danger" rel="tooltip"
                                       title="Foto rechazada por el editor"><i class="icon-ban-circle"></i></a>
                                </span>
                            </li>

                        </ul>

                    </td>
                </tr>
                <tr>
                    <td>

                        <p>Lorem Impsum1</p>
                        <p>Secci&oacute;n: Cultura</p>
                        <span class="btn-group">
                            <a href="#" class="btn"><i class="icon-trash"></i> Borrar</a>
                            <a href="#" class="btn"><i class="icon-edit"></i> Editar</a>
                        </span>
                    </td>
                    <td>
                        <div id="content"></div>
                    </td>
                </tr>

                </tbody>
            </table>


        </div>
    </div>


</div>



