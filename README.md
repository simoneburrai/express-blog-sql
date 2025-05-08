# EXPRESS BLOG SQL

Nell'esercizio di oggi andiamo a mettere in comunicazione per la prima volta il nostro server realizzato con express e il server dov'è presente il nostro database. Il server di express da noi utilizzato è stato ripreso dalla repository *express-blog-api-crud*, contenente tutta la struttura con controllers, middlewares e routers. Andando poi a creare un file all'interno della cartella data andiamo a mettere in comunicazione il nostro server epxress con il database. Questo è possibile installando il pacchetto **mysql2**. 

Di fatto questo lavoro ci permette di prendere i dati dal nostro database, express fa da tramite tra il client e il server per la raccolta di informazioni, creare, eliminare e modificare informazioni.

In questo esercizio andiamo a modificare le funzioni index, show, destroy, comunicando con il server e il database utilizzando delle queries vere e proprie.