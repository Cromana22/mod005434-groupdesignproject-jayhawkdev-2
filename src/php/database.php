<?php
$host = 'sql582.main-hosting.eu';
$db   = 'u407613007_gadgets4u';
$user = 'u407613007_g4uadmin';
$pass = 'Jayhawk1234[]';
$charset = 'utf8mb4';

#DSN means Data Source Name, this creates the information link to the database.
$dsn = "mysql:host=$host;dbname=$db;charset=$charset";

$options = [    
#PDO means PHP Data Object, here is finding the option => then setting its value
PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,    
PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,    
PDO::ATTR_EMULATE_PREPARES   => false,];

try 
{    
	#then try to connect to the database
	$pdo = new PDO($dsn, $user, $pass, $options);
} 
catch (\PDOException $e) 
{     
	#if fails, through error message
	throw new \PDOException($e->getMessage(), (int)$e->getCode());
}

?>