<?php

$id = $_REQUEST['id'];
$result = file_get_contents('http://api.tumblr.com/v2/blog/'.$id.'.tumblr.com/posts/?api_key=PyezS3Q4Smivb24d9SzZGYSuhMNPQUhMsVetMC9ksuGPkK1BTt&notes_info');

header('Content-type: application/json');
echo $result;