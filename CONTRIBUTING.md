# Come contribuire su Bitcoinitalia.info
Ci sono diversi modi per contribuire al progetto. Di seguito una lista di cosa si può fare: 
- [Condividere idee e proposte](#come-condividere-proposte-e-idee)
- [Aggiungere contenuti](#come-aggiungeremodificare-i-contenuti)
- [Migliorare il sito/piattaforma](#come-apportare-modifiche-al-sito)
- [Trovare e segnalare problemi](#come-segnalare-problemi)

Oltre a questo si può contribuire condividendo la propria opinione e tempo su tutto quello che riguarda la gestione del progetto.  
es. *Gestire e commentare le proposte della community, scrivere guide per aiutare gli altri collaboratori...*

#### Guide e link utili più generali
- [Come scrive in linguaggio "Markdown"(*.md*)](https://www.markdownguide.org/basic-syntax/)
- [Come aprire un "Issue"](https://docs.github.com/en/issues/tracking-your-work-with-issues/creating-issues/creating-an-issue)
- [Come creare un file direttamente da Github](https://docs.github.com/en/github/managing-files-in-a-repository/managing-files-on-github/creating-new-files)
- [Come modificare un file direttamente da Github](https://docs.github.com/en/github/managing-files-in-a-repository/managing-files-on-github/editing-files-in-your-repository)
- [Cos'è una "pull-request"](https://docs.github.com/en/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)

## Come condividere proposte e idee
Per condividere proposte e idee si può utilizzare il sistema di "Issue" di Github (consigliato), oppure si può usare [il gruppo telegram](https://t.me/infobitcoinitalia) condividendo e discutendone direttamente dalla chat.

## Come segnalare problemi 
Per segnalare problemi sul sito basta creare un nuovo "Issue". Se già disponibile ci sarà la possibilità di avere una bozza di issue da compilare per semplificare il lavoro e risparmiare tempo a tutti.

## Come aggiungere/modificare i contenuti
Tutti gli articoli del sito sono scritti in linguaggio "Markdown" con file che hanno *".md"* come estensione. [*guide e link utili*](#guide-e-link-utili-pi%C3%B9-generali)  


### La testata
Gli articoli devono contenere una testata che include tutti i metadati che lo riguardano (es. *titolo, autore ecc..*). La testata è scritta in *"yaml"*, un linguaggio di serializzazione dei dati leggibile dall'uomo.  
La testata va inserita prima del testo dell'articolo, il contenuto della testata deve stare dentro tre trattini (*"---"*) che la aprono ed altri tre che la chiudono.
Di seguito una testata da prendere come esempio: 
```
---
title: Titolo
description: Descrizione
author:
    name: Nome autore (ignorato se presente handler twitter)
    twitter: handlertwitter (es. @giamme, senza '@')
    publisher:
        name: Nome di chi ha ripubblicato (ignorato se presente handler twitter)
        twitter: handlertwitter (es. @giamme, senza '@')
source: https://esempio.it/esempio (link alla sorgente)
---
```

*in futuro la testata potrebbe cambiare per dare maggior personalizzazione ad ogni articolo*

### Tipologia articolo
Gli articoli si suddividono tra ```intro``` e ```anti-fud```, i primi vengono mostrati nella home e sono articoli che introducono alle varie parti di Bitcoin mentre gli articoli anti-fud compaiono nel menu a tendina sotto il pulsante *"Anti-FUD"*.
Gli articoli vanno inseriti nelle loro rispettive cartelle sotto ```/content```. (```/intro``` e ```/fud```)

### Creazione/modifica degli articoli 
Per aggiungere e modificare gli articoli e i contenuti del sito in generale ci sono due modi.  Usare Github direttamente dalla piattaforma con gli strumenti di modifica e creazione file oppure scaricando tutta la repository e modificarla dal codice sorgente.  
Chiaramente il primo metodo è il più semplice e veloce per tutti i writer.

#### Metodo 1: Usare la piattaforma Github (*per chi non ha esperienza con git*) 
Github permette a tutti di creare e modificare i file direttamente dalla piattaforma.  
1. **Aprire l'editor**: 
  - Per modificare un articolo basta navigare tra i file del progetto direttamente dalla pioattaforma Github e aprirlo, una volta aperto il file basta premere sull'icona della matita in alto a destra.
  - Per creare un nuovo articolo bisogna navigare nella giusta cartella ([*/intro*](https://github.com/Giamme/bitcoinitalia.info/tree/main/content/intro) o [*/fud*](https://github.com/Giamme/bitcoinitalia.info/tree/main/content/fud)) e premere sul pulsante "Aggiungi file"/"Add file" in alto a destra, si aprirà un menu a tendina da cui potrete scegliere "Crea nuovo file"/"Create new file".
2. **Scrivere**:
  - Seguendo una delle indicazioni sopra vi aprirà un editor di testo che potrete usare per scrivere in linguaggio "Markdown". Dalla stessa interfaccia, Github vi permette di vedere anche una preview della bozza.  
3. **Mandare una pull-request**:
  - Quando avete finito di scrivere l'articolo o quando finite di apportare modifiche sarà il momento di mandare una *"pull-request"*. Una pull-request consiste nel mandare una richiesta per implementare e rendere pubbliche le modifice che avete apportato.  
  - Per mandare la richiesta andate in fondo all'editor/preview del vostro articolo e date un nome al "commit"(modifica) che state facendo, potete anche aggiungere una descrizione di quello che avete fatto per evitare domande intuili e velocizzare l'implementazione del vostro lavoro sul sito.  
  - A questo punto selezionate "Crea un nuovo branch per questo commit e avvia una pull-request."/"Create a new branch for this commit and start a pull request." e premete sul pulsante verde.

#### Metodo 2: Usare gli strumenti di git clonando la repo (*richiede conoscenza base di git*)
**WIP**

## Come apportare modifiche al sito
**WIP**
