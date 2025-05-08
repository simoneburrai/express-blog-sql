# Express Blog Api Crud

Questo progetto (salvato come progetto n.36) è stato realizzato in tre giorni.

## Info

L'obiettivo di questo progetto è riuscire per la nostra API di Blog che ci permetta di effettuare operazioni su di essi. 

Abbiamo lavorato con postman, come mezzo per effettuare le nostre chiamate, in modo da verificare l'effettivo funzionamento del nostro server. 

L'obiettivo è stato creare una sezione controller, dove vengono gestite tutte le funzioni (index, show, store, delete, modify, update) relative ai posts. Successivamente queste funzioni vengono passate all'interno del nostro router dei Post, dove vengono gestite la rotta generica "/posts" oppure "/posts:id" quando vogliamo operare sul singolo post, passando un parametro dinamico.

## DAY 1

Il primo giorno abbiamo lavorato su index, show, destroy. La prima funzione index, che effettua una chiamata **GET**, ci permette di visualizzare tutti i post contenuti nel JSON dei post (all'interno della cartella data).
La funzione show utilizza sempre il metodo **GET** ma utilizziamo il passaggio di un parametro dinamico per visualizzare il singolo post. La funzione destroy, che utilizza il metodo **DELETE**, tramite lo splice degli array di oggetti, ci permette di rimuovere temporaneamente (ossia fino al nuovo riavvio del server) un singolo post dall'array di posts.

## DAY 2

Il secondo giorno abbiamo lavorato sulle funzioni store, modify e update. La funzione store ci permette di creare un nuovo oggetto post, tramite il passaggio di valori direttamente da postman quando effettuiamo la chiamata con metodo **POST**, che verrà poi inserito nell'array di oggetti posts. Il nostro oggetto post è così generato, tuttavia l'inserimento dell'id non viene effettuato quando si inseriscono i dati con la chiamata da Postman, ma verrà inserita successivamente, generandolo in base alla lunghezza del nostro array di oggetti posts. La funzione modify ci permette di modificare parzialmente un determinato post, lavorando su una o più chiavi, ma non modifica totalmente il nostro post. Questo viene effettuato tramite chiamata con **PATCH**. Il metodo **PUT** invece, utilizzato nella funzione update, ci permette di modificare totalmente un oggetto post, andando a cambiare ogni singola chiave (tranne la chiave id)

## DAY 3

Nel giorno 3 andiamo a lavorare con i middleware, ossia delle funzioni che ci permetto di gestire operazioni prima delle operazioni associate a una rotta o dopo. In questo esercizio li utilizziamo alla fine per gestire gli errori restituendo un json e uno status. Creiamo due middleware differenti, uno per la gestione degli errori in generale, e uno per la gestione del 404. La gestione del 404 non avviene utilizzando il parametro **err**, in quanto *Pagina non Trovata* non viene considerato un vero e proprio errore da express.