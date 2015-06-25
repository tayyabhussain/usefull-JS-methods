<?php

$name 	= $_POST['name'];
$email 	= $_POST['email'];
echo json_encode(['status'=>'response from server', 'name'=>$name, 'email' => $email]);
