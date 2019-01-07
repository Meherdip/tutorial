<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
var_dump($_FILES);
$publik_key='a5aa96d5c66d9bec29a1';

$temppath=$_FILES['file']['tmp_name'];
$actulename=$_FILES['file']['name'];

$actulepath=dirname(__FILE__)."\\temp\\".$actulename;
move_uploaded_file($temppath,$actulepath);
$post=[
    'UPLOADCARE_PUB_KEY'=>$publik_key,
      'UPLOADCARE_STORE'=>1,
      'file=curl_file'=>curl_file_create($actulepath)
];
$ch = curl_init();
curl_setopt($ch,CURLOPT_URL,'https://upload.uploadcare.com/base/');
curl_setopt($ch,CURLOPT_POST, 1);
curl_setopt($ch,CURLOPT_RETURNTRANSFER,1);
curl_setopt($ch,CURLOPT_POSTFIELDS,$post);

$response=curl_exec($ch);
var_dump($response);
?>
