# react-native-coingecko

<!--
Para meterlo a git:
1- Entrar a github y crear un nuevo repositorio
2- hacer el primer commit (ahi viene en las instrucciones de la pag github)



opciones basicas github
    git status
    git add
    git commit -m "un commit"
    git push origin main *main es la branch en la que estas*


    Branches 
Para crear un branch se ejecuta el comando
    git branch labranch  *crearia una branch del proyects latest push*
    git branch lebranchie 87236M *crea la branch desde el id del push pa bajo*

Se pueden tener muchas branches en un solo repositorio pero solo una activa, para
cambiar de branch se tiene que hacer checkout/switch
    git checkout lebranchie *se cambia a lebranchie*
    git switch lebranchie   *se cambia tmb a lebranchie*

Te equivocaste con el nombre de la branch? no hay pedo (si estas en LOCAL) renombrala con
    git branch -m 'leNombresin' *si estas en ella*
    git branch -m 'leNombresin' 'otroName' *si esta checkout*
Si quieres cambiar el nombre de una branch remota tienes que eliminarla primero y 
volver a enviar el push del archivo
    git push origin --delete branchMala
    git push -u origin branchBuena 

**NO SE PUEDEN CREAR BRANCHES DIRECTAMENTE EN EL REPOSITORIO REMOTO, PARA HACERLO ES NECESARIO
DARLE PUSH A UNA BRANCH DE LOCAL**

Quieres descargar una branch del origen a local? va hay de 2:
    git checkout --track origin/feature/laBranchRemota
    git branch --track labranchiosauria origin/feature/labranchiosauria
Se pueden tener muchos branches en un solo repositorio

Si necesitas actualizar tu branch con respecto al origen
    git pull
Si quieres actualizar el branch del origen con respecto al tuyo
    git push

-->