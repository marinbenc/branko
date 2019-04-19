# Branko

englesko hrvatski IT rječnik otvorenog koda

Branku možete posjetiti ovdje:  
https://marinbenc.github.io/branko/

### Dodavanje novih riječi

Svi su pozvani dodati nove riječi, ali postoje dva pravila kojih se morate pridržavati:

1. Riječi moraju biti **relevantne za IT industriju**.
2. Prijevodi moraju biti **ozbiljni** i **korišteni u stvarnom životu**. Idealno bi bilo kad bi se ti prijevodi koristili u provjerenoj literaturi ili znanstvenim i drugim radovima.

Za dodavanje nove riječi, dovoljno je izmijeniti datoteku [`content/words.json`](https://github.com/marinbenc/branko/blob/master/content/words.json) dodavanjem novih objekata. To možete napraviti izravno na GitHubu klikom na **Edit This File** kad gledate datoteku.

Nove riječi se dodaju kao JSON objekti, jedan objekt po riječi:

```
{
  "english": "access control list",
  "croatian": "lista prava pristupa, lista s pravima pristupa",
  "note": "",
  "source": "[Stjepan Groš](http://www.zemris.fer.hr/~sgros/stuff/rjecnik.shtml)"
}
```

Svaki atribut objekta mora postojati (ali može biti prazan `""`).

Ključevi objekta su sljedeći:

 - **english**: riječ na engleskom jeziku.
 - **croatian**: prijevod na hrvatski jezik, može sadržavati **markdown**.
 - **note**: bilješka o prijevodu, npr. kontekst u kojem se prevodi, kada se koristi i sl., može sadržavati **markdown**.
 - **source**: izvor prijevoda (gdje se pojavljuje u rječnicima, literaturi, radovima ili drugim stranicama), može sadržavati **markdown**.
 
 
 ## Doprinosi kodu
 
 Branko je pogonjen [**Gatsby**](https://www.gatsbyjs.org) bibliotekom za izradu statičkih web stranica s **Reactom**. Svaki doprinosi kodu, prijedlozi i popravci su dobrodošli!
 
 ## Zašto Branko?

Branko je nazvan po [Branku Součeku](https://hr.wikipedia.org/wiki/Branko_Souček), utemeljiteljem računarske znanosti u Hrvatskoj i osobi koja je napravila prvo hrvatsko digitalno računalo 1959. godine.
