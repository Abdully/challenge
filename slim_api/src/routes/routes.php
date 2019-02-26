<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

$app = new \Slim\App;

$app->get('/hello/{name}', function (Request $request, Response $response, array $args) {
    $name = $args['name'];
    $response->getBody()->write("Hello, $name");

    return $response;
});

$app->get('/signin', function (Request $request, Response $response, array $args) {
    // Get params from request.
    $user = $request -> getParam('username');
    $pass = $request -> getParam('password');
 
    // Get db connection
    $response = 'Read data route.';
    $query = "SELECT * FROM user WHERE username='$user' AND password='$pass'";
 
    try{
        $db = new Database;
        $db = $db -> connect();
 
        $statement = $db -> query($query);
        $result = $statement -> fetchAll(PDO::FETCH_OBJ);
 
        if($result){
            $jawabu['state'] = true;
            $jawabu['user'] = $result;
        }else{
            $jawabu['state'] = false;
        }
 
        $response = json_encode($jawabu);
 
    } catch(PDOException $e) {
        $response = '{"error": {"message":' .$e->getMessage().' }}';
    } 
 
    return $response;
 });

 $app->post('/register', function (Request $request, Response $response, array $args) {

    $username = $request -> getParam('username');
    $firstname = $request -> getParam('firstname');
    $lastname = $request -> getParam('lastname');
    $password = $request -> getParam('password');

    $response = 'Request received!';

    // data base connection
    $query = "INSERT INTO user(username, firstname,lastname, password) 
            VALUES(:username, :firstname, :lastname, :password)";

    try {
        $db = new Database;
        $db = $db -> connect();
        $statement = $db -> prepare($query);
        $statement -> bindParam(':username', $username);
        $statement -> bindParam(':firstname', $firstname);
        $statement -> bindParam(':lastname', $lastname);
        $statement -> bindParam(':password', $password);

        // Execute query
        $statement -> execute();
        $result['state'] = true;
        $response = json_encode($result);

    } catch(PDOException $e) {
        $response = '{"error": {"message":' .$e->getMessage().' }}';
    } 

    return $response;
});

$app->delete('/delete/{username}', function (Request $request, Response $response, array $args) {
    $username = $request -> getAttribute('username');

    $query = "DELETE FROM user WHERE username='$username'";

    try{
        $db = new Database;
        $db = $db -> connect();

        $statement = $db -> prepare($query);
        $statement -> execute();
        $response = '{"success": {"message": "User has been removed."} }';

    } catch(PDOException $e) {
        $response = '{"error": {"message":' .$e->getMessage().' }}';
    } 

    return $response;
});

$app->get('/viewuser', function (Request $request, Response $response, array $args) {
    $response = 'Read data route.';
    $query = "SELECT * FROM user";

    try{
        $db = new Database;
        $db = $db -> connect();

        $statement = $db -> query($query);
        $users = $statement -> fetchAll(PDO::FETCH_OBJ);

        $response = json_encode($users);

    } catch(PDOException $e) {
        $response = '{"error": {"message":' .$e->getMessage().' }}';
    } 

    return $response;
});

 

$app->put('/updateuser/{id}', function (Request $request, Response $response, array $args) {
    $id = $request -> getAttribute('id');
    $firstname= $request -> getParam('firstname');
    $username = $request -> getParam('username');
    $lastname = $request -> getParam('lastname');
    $password = $request -> getParam('password');

    $query = "UPDATE user SET username=:username, firstname=:firstname,lastname=:lastname, password=:password WHERE id=$id";

try {
    $db = new Database;
    $db = $db -> connect();
    $statement = $db -> prepare($query);
    $statement -> bindParam(':username', $username);
    $statement -> bindParam(':lastname', $lastname);
    $statement -> bindParam(':firstname', $firstname);
    $statement -> bindParam(':password', $password);

    // Execute query 
    $statement -> execute();
    $response = '{"success": {"message": "User has been updated."} }';

} catch(PDOException $e) {
    $response = '{"error": {"message":' .$e->getMessage().' }}';
} 

    return $response;
});