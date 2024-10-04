<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="utf-8">
    <title>Envoi d'un message par formulaire</title>
    <link rel="stylesheet" href="monstyle.css"
</head>
<body>
    <?php
    $retour = mail('neli.cheret@yahoo.fr', 'Envoi depuis la page Contact', $_POST['message'], 'From: pas-repondre-no-reply@u4itel.info');
    if ($retour)
        echo '<p>Votre message a bien été envoyé.</p>';
    ?>
</body>
</html>
