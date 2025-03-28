let prviNizPitanja = [
    {
        pitanje: 'Koliko ima minuta u jednom danu?',
        a: '1440',
        b: '24',
        c: '360',
        d: '1800',
        tacan_odgovor: 'a'
    },
    {
        pitanje: 'Brojevi koji su djeljivi samo sa sobom i brojem 1 nazivaju se:',
        a: 'Prosti brojevi',
        b: 'Složeni brojevi',
        c: 'Racionalni brojevi',
        d: 'Iracionalni brojevi',
        tacan_odgovor: 'a'
    },
    {
        pitanje: 'Koja je srednja vrijednost brojeva 1, 2, 3, 4 i 5?',
        a: '5',
        b: '3',
        c: '15',
        d: '20',
        tacan_odgovor: 'b'
    },
    {
        pitanje: 'Ako je 5 srednja vrijednost skupa {3, 7, 5, 2, x} koliko iznosi x?',
        a: '1',
        b: '18',
        c: '8',
        d: '2',
        tacan_odgovor: 'c'
    },
    {
        pitanje: 'Ako je zbir cifara nekog dvocifrenog broja 9, a proizvod 18, koji je to broj?',
        a: '27',
        b: '36',
        c: '18',
        d: '45',
        tacan_odgovor: 'b'
    },
    {
        pitanje: 'Ako je f(x) = x+5, koliko je f(5)?',
        a: '12',
        b: '15',
        c: '10',
        d: '99',
        tacan_odgovor: 'c'
    },
    {
        pitanje: 'Koliko iznosi broj pi?',
        a: '3.41',
        b: '3.14',
        c: '3.11',
        d: '3.44',
        tacan_odgovor: 'b'
    },
    {
        pitanje: 'Izračunaj vrijednost sljedećeg izraza √81 * 2?',
        a: '18',
        b: '25',
        c: '66',
        d: '4',
        tacan_odgovor: 'a'
    },
    {
        pitanje: 'Izbaci uljeza:',
        a: '4',
        b: '16',
        c: '18',
        d: '3',
        tacan_odgovor: 'd'
    },
    {
        pitanje: 'U kojem programskom jeziku se koristi: cout<<“pogodi“;?',
        a: 'C++',
        b: 'Python',
        c: 'HTML',
        d: 'Bosanskom jeziku',
        tacan_odgovor: 'a'
    },
    {
        pitanje: 'Koje petlje koristimo u programiranju?',
        a: 'for i while',
        b: 'samo for',
        c: 'samo while',
        d: 'ne koristimo pelje',
        tacan_odgovor: 'a'
    },
    {
        pitanje: 'Ako račun za čokoladu i žvaku iznosi 1.2 KM i ako je čokolada za 1 KM skuplja od žvake, koja je cijena žvake?',
        a: '0.1 KM',
        b: '0.2 KM',
        c: '0.25 KM',
        d: '0.05 KM',
        tacan_odgovor: 'b'
    },
    {
        pitanje: 'Za šta je skraćenica HTML?',
        a: 'HighTech Markup Language',
        b: 'HyperTransfer Markup Language',
        c: 'HyperText Markup Language',
        d: 'HyperText Managing Language',
        tacan_odgovor: 'c'
    },
    {
        pitanje: 'Šta određuje HTML?',
        a: 'Strukturu web stranice',
        b: 'Stil stranice',
        c: 'Izgled stranice',
        d: 'Stil baze podataka',
        tacan_odgovor: 'a'
    },
    {
        pitanje: 'CSS određuje...',
        a: 'Kostur stranice',
        b: 'Programiranje',
        c: 'Kuhanje',
        d: 'Stil stranice',
        tacan_odgovor: 'd'
    },
    {
        pitanje: 'Kružnica je određena:',
        a: 'Poluprečnikom i centrom',
        b: 'Uglovima',
        c: 'Šestarom',
        d: 'Vrhovima',
        tacan_odgovor: 'a'
    },
    {
        pitanje: 'Koja matematička operacija nam je potrebna da dobijemo broj 1 koristeći dva puta broj 8?',
        a: 'Sabiranje',
        b: 'Množenje',
        c: 'Dijeljenje',
        d: 'Oduzimanje',
        tacan_odgovor: 'c'
    },
    {
        pitanje: 'Koji je zbir unutršnjih uglova trougla?',
        a: '179 stepeni',
        b: '180 stepeni',
        c: '160 stepeni',
        d: '360 stepeni',
        tacan_odgovor: 'b'
    },
    {
        pitanje: 'Koliko iznosi X u sljedećem izrazu: -15 + (-5X) = 0?',
        a: '3',
        b: '-5',
        c: '-3',
        d: 'Ne pripada skupu realnih brojeva',
        tacan_odgovor: 'c'
    },
    {
        pitanje: 'Kako obično označavamo poluprečnik?',
        a: 'r',
        b: 'R',
        c: 'p',
        d: 'pp',
        tacan_odgovor: 'a'
    },
    {
        pitanje: 'Koji je zbir unutrašnjih uglova petougla?',
        a: '440 stepeni',
        b: '540 stepeni',
        c: '360 stepeni',
        d: '180 stepeni',
        tacan_odgovor: 'b'
    },
    {
        pitanje: 'Za šta je skraćenica CSS?',
        a: 'Cascading Style Sheets',
        b: 'Cascading Script Styles',
        c: 'Centralized Style System',
        d: 'Creative Style Solutions',
        tacan_odgovor: 'a'
    },
    {
        pitanje: 'Ako je površina kvadrata 16 kvadratnih centimetara, kolika je dužina jedne stranice?',
        a: '8 cm',
        b: '2 m',
        c: '4 cm',
        d: '16 mm',
        tacan_odgovor: 'c'
    },
    {
        pitanje: 'Šta predstavlja skraćenica SQL?',
        a: 'Skalabilni univerzalni jezik',
        b: 'Strukturalni upitni jezik',
        c: 'Standardna upravljačka logika',
        d: 'Sistem za upravljanje',
        tacan_odgovor: 'b'
    },
    {
        pitanje: 'Koja od naredbi se koristi za dodavanje novog reda u SQL tabelu?',
        a: 'ADD',
        b: 'UPDATE',
        c: 'INSERT',
        d: 'CREATE',
        tacan_odgovor: 'c'
    },
    {
        pitanje: 'Koji SQL operator se koristi za filtriranje rezultata upita tako da odgovara određenom kriteriju?',
        a: 'WHERE',
        b: 'SELECT',
        c: 'FROM',
        d: 'JOIN',
        tacan_odgovor: 'a'
    },
    {
        pitanje: 'Kako se zove proces spajanja podataka iz različitih tabela na osnovu uslova?',
        a: 'JOIN',
        b: 'MERGE',
        c: 'UNION',
        d: 'CONNECT',
        tacan_odgovor: 'a'
    }
];

let drugiNizPitanja = [
    {
        pitanje: 'Koji je 5. član niza 1, 5, 9, 13,...?',
        a: '17',
        b: '15',
        c: '19',
        d: '21',
        tacan_odgovor: 'a'
    },
    {
        pitanje: 'Kako se naziva proces organizovanja podataka u bazi podataka radi efikasnijeg upita?',
        a: 'Inicializacija',
        b: 'Deklaracija',
        c: 'Normalizacija',
        d: 'Optimizacija',
        tacan_odgovor: 'c'
    },
    {
        pitanje: 'Koji od ponuđenih brojeva nije riješenje nejednačine 3x – 2 < x + 4?',
        a: '3',
        b: '-3',
        c: '1',
        d: '-1',
        tacan_odgovor: 'a'
    },
    {
        pitanje: 'Koja od sledećih struktura podataka koristi princip "Last In, First Out" (LIFO)?',
        a: 'Red',
        b: 'Stek',
        c: 'Lista',
        d: 'Stablo',
        tacan_odgovor: 'b'
    },
    {
        pitanje: 'Koja od sledećih struktura podataka koristi princip "First In, First Out" (FIFO)?',
        a: 'Red',
        b: 'Stek',
        c: 'Binarno stablo',
        d: 'Stablo',
        tacan_odgovor: 'a'
    },
    {
        pitanje: 'Kako nazivamo sljedeći niz 2, 5, 8, 11, ...?',
        a: 'Aritmetički niz',
        b: 'Geometrijski niz',
        c: 'Prirodni niz',
        d: 'Aritmetički – geometrijski niz',
        tacan_odgovor: 'a'
    },
    {
        pitanje: 'Za dva vektora koji imaju isti pravac kažemo da su:',
        a: 'Praktična',
        b: 'Isto usmjerena',
        c: 'Nekolinearna',
        d: 'Kolinearna',
        tacan_odgovor: 'd'
    },
    {
        pitanje: 'Šta je HTTPS?',
        a: 'Sigurna verzija HTTP-a koja koristi SSL/TLS za enkripciju',
        b: 'Nesigurna verzija HTTP-a koja koristi SSL/TLS za enkripciju',
        c: 'Sigurna verzija HTTP-a koja ne koristi SSL/TLS za enkripciju',
        d: 'Nesigurna verzija HTTP-a koja ne koristi SSL/TLS za enkripciju',
        tacan_odgovor: 'a'
    },
    {
        pitanje: 'Ako od broja 1000 oduzmemo broj 777, koliko nam ostaje?',
        a: '223',
        b: '333',
        c: '233',
        d: '323',
        tacan_odgovor: 'a'
    },
    {
        pitanje: 'Izbaci uljeza:',
        a: '200 dekametara',
        b: '2000 decimetara',
        c: '2 kilometra',
        d: '200000 centimetara',
        tacan_odgovor: 'b'
    },
    {
        pitanje: 'Koji broj je višekratnik brojeva svih od sljedećih brojeva: 2, 3, 5?',
        a: '20',
        b: '60',
        c: '50',
        d: '40',
        tacan_odgovor: 'b'
    },
    {
        pitanje: 'Ako je 122 broj koji je dva puta veći od svoje polovine, koji je broj za 18 veći?',
        a: '140',
        b: '79',
        c: '130',
        d: '262',
        tacan_odgovor: 'a'
    },
    {
        pitanje: 'Kakav je ugao od 95 stepeni?',
        a: 'Pravi',
        b: 'Oštri',
        c: 'Tupi',
        d: 'Netupi',
        tacan_odgovor: 'c'
    },
    {
        pitanje: 'Ako u korpi ima 27 jabuka i ako pojedemo sve osim 9 jabuka, koliko će ih ostati u korpi?',
        a: '27',
        b: '18',
        c: '36',
        d: '9',
        tacan_odgovor: 'd'
    },
    {
        pitanje: 'Koji broj dobijemo ako od 3 puta 3 oduzmemo dvostuku vrijednost broja 2?',
        a: '5',
        b: '2',
        c: '1',
        d: '23',
        tacan_odgovor: 'a'
    },
    {
        pitanje: 'Kako se naziva proces prevođenja programskog koda u mašinski jezik?',
        a: 'Kompajliranje',
        b: 'Računanje',
        c: 'Sabiranje',
        d: 'Dijeljenje',
        tacan_odgovor: 'a'
    },
    {
        pitanje: 'Za koju matricu možemo izračunati determinatu?',
        a: 'Kvadratnu',
        b: 'Svaku',
        c: 'Grbavu',
        d: '3x3',
        tacan_odgovor: 'a'
    },
    {
        pitanje: 'Koliko je 1.95/3?',
        a: '0.60',
        b: '0.63',
        c: '0.65',
        d: '0.68',
        tacan_odgovor: 'c'
    },
    {
        pitanje: 'Koliko je 25*32?',
        a: '900',
        b: '800',
        c: '856',
        d: '790',
        tacan_odgovor: 'b'
    },
    {
        pitanje: 'Matrica koja nema isti broj elemenata u svakom redu, naziva se...',
        a: 'Grbava',
        b: 'Kvadratna',
        c: 'Jedinična',
        d: 'Simetrična',
        tacan_odgovor: 'a'
    },
    {
        pitanje: 'Matrica koja ima na dijagonali jedinice, naziva se...',
        a: 'Jednostavna',
        b: 'Ugaona',
        c: 'Kvadratna',
        d: 'Jedinična',
        tacan_odgovor: 'd'
    },
    {
        pitanje: 'Ako knjiga ima 366 stranica, koliko se mora čitati stranica dnevno da se pročita sve za 6 dana?',
        a: '61',
        b: '66',
        c: '70',
        d: '62.5',
        tacan_odgovor: 'a'
    },
    {
        pitanje: 'Koji broj fali u sljedećem nizu: (7, 14, 21, 35)?',
        a: '28',
        b: '27',
        c: '20',
        d: '15',
        tacan_odgovor: 'a'
    },
    {
        pitanje: 'Koji je od navedenih izraza ekvivalentan izrazu: 16a + 8b – 6a + 2b?',
        a: '22a + 10b',
        b: '12a + 12b',
        c: '10a + 10b',
        d: '22a - 6b',
        tacan_odgovor: 'c'
    }
];

let treciNizPitanja = [
    {
        pitanje: 'U autobusu ima 12 putnika, na 2. stanici izašlo je 7, a ušlo 5 putnika, na 3. stanici ušlo je 6, a izašlo 3 putnika. Koliko ima putnika u autobusu?',
        a: '1',
        b: '7',
        c: '13',
        d: '11',
        tacan_odgovor: 'c'
    },
    {
        pitanje: 'Ko je kreirao i razvio programski jezik C++?',
        a: 'Bjarne Stroustrup',
        b: 'Sead Delalić',
        c: 'Linus Torvalds',
        d: 'Mark Zuckerberg',
        tacan_odgovor: 'a'
    },
    {
        pitanje: 'Ko je kreirao JS (JavaScript)?',
        a: 'Brendan Eich',
        b: 'Bjarne Stroustrup',
        c: 'Bill Gates',
        d: 'Alan Turing',
        tacan_odgovor: 'a'
    },
    {
        pitanje: 'Ako putnička karta košta 1.75 KM, koliko kusura treba vratiti vozač putniku koji plaća 6 karata sa 20 KM?',
        a: '8.75 KM',
        b: '7.5 KM',
        c: '9.5 KM',
        d: '10.5 KM',
        tacan_odgovor: 'c'
    },
    {
        pitanje: 'Najbrže se kreće automobil koji pređe ...',
        a: '200 km za 4 sata',
        b: '160 km za 5 sati',
        c: '240 km za 6 sati',
        d: '210 km za 7 sati',
        tacan_odgovor: 'a'
    },
    {
        pitanje: 'Ako u amfiteatru ima 212 studenata, pola ih je došlo autobusom, četvrtina tramvajem, koliko ih je došlo na drugi način?',
        a: '106',
        b: '53',
        c: '71',
        d: '23',
        tacan_odgovor: 'b'
    },
    {
        pitanje: 'Ko je razvio operativni sistem MS-DOS i bio ključna figura u popularizaciji ličnih računara?',
        a: 'Alan Turing',
        b: 'Bill Gates',
        c: 'Linus Torvalds',
        d: 'Mark Zuckerberg',
        tacan_odgovor: 'b'
    },
    {
        pitanje: 'Ko je bila Ada Lovelace?',
        a: 'Prva matematičarka',
        b: 'Prva programerka',
        c: 'Direktorica Google-a',
        d: 'Osnivačica Instagrama',
        tacan_odgovor: 'b'
    },
    {
        pitanje: 'Koji naučnik je definisao neprekidnost i konvergenciju matematičkih funkcija?',
        a: 'Augustin-Louis Cauchy',
        b: 'Georg Koši',
        c: 'Georg Cantor',
        d: 'Leonhard Euler',
        tacan_odgovor: 'a'
    },
    {
        pitanje: 'Koji broj je najveći od ponuđenih?',
        a: '7i +107',
        b: '6i + 2',
        c: 'Kompleksni brojevi se ne porede po veličini',
        d: '100i',
        tacan_odgovor: 'c'
    },
    {
        pitanje: 'Kolika je vrijednost izraza: 3*9*4*3?',
        a: '321',
        b: '323',
        c: '324',
        d: '325',
        tacan_odgovor: 'c'
    },
    {
        pitanje: 'Kolika je vrijednost izraza: (3/4 + 4/3 + 1/4 + 2/3) * 2?',
        a: '9',
        b: '3',
        c: '3/2',
        d: '6',
        tacan_odgovor: 'd'
    },
    {
        pitanje: 'Koji je od sljedećih vektora paralelan vektoru (1, 2, 3)?',
        a: '(2, 4, 6)',
        b: '(3, 2, 1)',
        c: '(5, 27, 12)',
        d: '(6, 15, 21)',
        tacan_odgovor: 'a'
    },
    {
        pitanje: 'Koji je kompleksnost algoritma za množenje dva niza dužine n?',
        a: 'O(n^2)',
        b: 'O(n)',
        c: 'O(log n)',
        d: 'O(n log n)',
        tacan_odgovor: 'a'
    },
    {
        pitanje: 'Koja je vremenska složenost Merge Sort algoritma?',
        a: 'O(nlogn)',
        b: 'O(n)',
        c: 'O(logn)',
        d: 'Ne postoji takav algoritam',
        tacan_odgovor: 'a'
    },
    {
        pitanje: 'Šta predstavlja Riemannova hipoteza?',
        a: 'Jednačina koja opisuje eliptične krive',
        b: 'Hipoteza o konveksnosti',
        c: 'Odnos između prvog i drugog reda zeta funkcije',
        d: 'Teorema o nulama zeta funkcije',
        tacan_odgovor: 'd'
    },
    {
        pitanje: 'Koliko približno iznosi broj e?',
        a: '2.71828',
        b: '2.71555',
        c: '2.71122',
        d: '3.12455',
        tacan_odgovor: 'a'
    },
    {
        pitanje: 'Koliko iznosi približno broj PI?',
        a: '3.14151',
        b: '3.14159',
        c: '3.14519',
        d: '3.14444',
        tacan_odgovor: 'b'
    },
    {
        pitanje: 'Šta je konturni integral u kompleksnoj analizi?',
        a: 'Integral duž konture u kompleksnoj ravni',
        b: 'Integral funkcije definisane u kompleksnoj ravni',
        c: 'Integral po pravoj liniji',
        d: 'Integral matrica',
        tacan_odgovor: 'a'
    },
    {
        pitanje: 'Koja je poznata formula koja povezuje eksponencijalnu i trigonometrijsku funkciju u kompleksnom domenu?',
        a: 'Eulerova formula',
        b: 'Fermatova formula',
        c: 'Riemannova formula',
        d: 'Newtonova formula',
        tacan_odgovor: 'a'
    },
    {
        pitanje: 'Šta predstavlja DFS u kontekstu algoritama?',
        a: 'Dijametralno fiksirana struktura',
        b: 'Dubinska pretraga',
        c: 'Dinamičko filtriranje sadržaja',
        d: 'Direktna frekvencijska sinteza',
        tacan_odgovor: 'b'
    },
    {
        pitanje: 'Koja je vremenska složenost DFS-a u najgorem slučaju za graf sa V čvorova i E grana?',
        a: 'O(V)',
        b: 'O(V + E)',
        c: 'O(E)',
        d: 'O(V * E)',
        tacan_odgovor: 'b'
    },
    {
        pitanje: 'Šta predstavlja BFS u kontekstu algoritama?',
        a: 'Pretraga po širini',
        b: 'Balansirana funkcionalna struktura',
        c: 'Bezbjednost fajl sistema',
        d: 'Binarna funkcija sa sintaksom',
        tacan_odgovor: 'a'
    },
    {
        pitanje: 'Kako BFS održava redoslijed posjećenih čvorova?',
        a: 'Nasumično',
        b: 'Korištenjem steka',
        c: 'Korištenjem reda',
        d: 'Korištenjem liste',
        tacan_odgovor: 'c'
    },
    {
        pitanje: 'Kako se zove struktura podataka koja ima tačno dva djeteta po svakom čvoru?',
        a: 'Heap',
        b: 'Red-čvor',
        c: 'Binarno stablo',
        d: 'Stablo',
        tacan_odgovor: 'd'
    }
];


//sva pitanja u jedan niz:

let nizPitanja = [
    {
        pitanje: 'Koliko ima minuta u jednom danu?',
        a: '1440',
        b: '24',
        c: '360',
        d: '1800',
        tacan_odgovor: 'a'
    },
    {
        pitanje: 'Brojevi koji su djeljivi samo sa sobom i brojem 1 nazivaju se:',
        a: 'Prosti brojevi',
        b: 'Složeni brojevi',
        c: 'Racionalni brojevi',
        d: 'Iracionalni brojevi',
        tacan_odgovor: 'a'
    },
    {
        pitanje: 'Koja je srednja vrijednost brojeva 1, 2, 3, 4 i 5?',
        a: '5',
        b: '3',
        c: '15',
        d: '20',
        tacan_odgovor: 'b'
    },
    {
        pitanje: 'Ako je 5 srednja vrijednost skupa {3, 7, 5, 2, x} koliko iznosi x?',
        a: '1',
        b: '18',
        c: '8',
        d: '2',
        tacan_odgovor: 'c'
    },
    {
        pitanje: 'Ako je zbir cifara nekog dvocifrenog broja 9, a proizvod 18, koji je to broj?',
        a: '27',
        b: '36',
        c: '18',
        d: '45',
        tacan_odgovor: 'b'
    },
    {
        pitanje: 'Ako je f(x) = x+5, koliko je f(5)?',
        a: '12',
        b: '15',
        c: '10',
        d: '99',
        tacan_odgovor: 'c'
    },
    {
        pitanje: 'Koliko iznosi broj pi?',
        a: '3.41',
        b: '3.14',
        c: '3.11',
        d: '3.44',
        tacan_odgovor: 'b'
    },
    {
        pitanje: 'Izračunaj vrijednost sljedećeg izraza √81 * 2?',
        a: '18',
        b: '25',
        c: '66',
        d: '4',
        tacan_odgovor: 'a'
    },
    {
        pitanje: 'Izbaci uljeza:',
        a: '4',
        b: '16',
        c: '18',
        d: '3',
        tacan_odgovor: 'd'
    },
    {
        pitanje: 'U kojem programskom jeziku se koristi: cout<<“pogodi“;?',
        a: 'C++',
        b: 'Python',
        c: 'HTML',
        d: 'Bosanskom jeziku',
        tacan_odgovor: 'a'
    },
    {
        pitanje: 'Koje petlje koristimo u programiranju?',
        a: 'for i while',
        b: 'samo for',
        c: 'samo while',
        d: 'ne koristimo pelje',
        tacan_odgovor: 'a'
    },
    {
        pitanje: 'Ako račun za čokoladu i žvaku iznosi 1.2 KM i ako je čokolada za 1 KM skuplja od žvake, koja je cijena žvake?',
        a: '0.1 KM',
        b: '0.2 KM',
        c: '0.25 KM',
        d: '0.05 KM',
        tacan_odgovor: 'b'
    },
    {
        pitanje: 'Za šta je skraćenica HTML?',
        a: 'HighTech Markup Language',
        b: 'HyperTransfer Markup Language',
        c: 'HyperText Markup Language',
        d: 'HyperText Managing Language',
        tacan_odgovor: 'c'
    },
    {
        pitanje: 'Šta određuje HTML?',
        a: 'Strukturu web stranice',
        b: 'Stil stranice',
        c: 'Izgled stranice',
        d: 'Stil baze podataka',
        tacan_odgovor: 'a'
    },
    {
        pitanje: 'CSS određuje...',
        a: 'Kostur stranice',
        b: 'Programiranje',
        c: 'Kuhanje',
        d: 'Stil stranice',
        tacan_odgovor: 'd'
    },
    {
        pitanje: 'Kružnica je određena:',
        a: 'Poluprečnikom i centrom',
        b: 'Uglovima',
        c: 'Šestarom',
        d: 'Vrhovima',
        tacan_odgovor: 'a'
    },
    {
        pitanje: 'Koja matematička operacija nam je potrebna da dobijemo broj 1 koristeći dva puta broj 8?',
        a: 'Sabiranje',
        b: 'Množenje',
        c: 'Dijeljenje',
        d: 'Oduzimanje',
        tacan_odgovor: 'c'
    },
    {
        pitanje: 'Koji je zbir unutršnjih uglova trougla?',
        a: '179 stepeni',
        b: '180 stepeni',
        c: '160 stepeni',
        d: '360 stepeni',
        tacan_odgovor: 'b'
    },
    {
        pitanje: 'Koliko iznosi X u sljedećem izrazu: -15 + (-5X) = 0?',
        a: '3',
        b: '-5',
        c: '-3',
        d: 'Ne pripada skupu realnih brojeva',
        tacan_odgovor: 'c'
    },
    {
        pitanje: 'Kako obično označavamo poluprečnik?',
        a: 'r',
        b: 'R',
        c: 'p',
        d: 'pp',
        tacan_odgovor: 'a'
    },
    {
        pitanje: 'Koji je zbir unutrašnjih uglova petougla?',
        a: '440 stepeni',
        b: '540 stepeni',
        c: '360 stepeni',
        d: '180 stepeni',
        tacan_odgovor: 'b'
    },
    {
        pitanje: 'Za šta je skraćenica CSS?',
        a: 'Cascading Style Sheets',
        b: 'Cascading Script Styles',
        c: 'Centralized Style System',
        d: 'Creative Style Solutions',
        tacan_odgovor: 'a'
    },
    {
        pitanje: 'Ako je površina kvadrata 16 kvadratnih centimetara, kolika je dužina jedne stranice?',
        a: '8 cm',
        b: '2 m',
        c: '4 cm',
        d: '16 mm',
        tacan_odgovor: 'c'
    },
    {
        pitanje: 'Šta predstavlja skraćenica SQL?',
        a: 'Skalabilni univerzalni jezik',
        b: 'Strukturalni upitni jezik',
        c: 'Standardna upravljačka logika',
        d: 'Sistem za upravljanje',
        tacan_odgovor: 'b'
    },
    {
        pitanje: 'Koja od naredbi se koristi za dodavanje novog reda u SQL tabelu?',
        a: 'ADD',
        b: 'UPDATE',
        c: 'INSERT',
        d: 'CREATE',
        tacan_odgovor: 'c'
    },
    {
        pitanje: 'Koji SQL operator se koristi za filtriranje rezultata upita tako da odgovara određenom kriteriju?',
        a: 'WHERE',
        b: 'SELECT',
        c: 'FROM',
        d: 'JOIN',
        tacan_odgovor: 'a'
    },
    {
        pitanje: 'Kako se zove proces spajanja podataka iz različitih tabela na osnovu uslova?',
        a: 'JOIN',
        b: 'MERGE',
        c: 'UNION',
        d: 'CONNECT',
        tacan_odgovor: 'a'
    },
    {
        pitanje: 'Koji je 5. član niza 1, 5, 9, 13,...?',
        a: '17',
        b: '15',
        c: '19',
        d: '21',
        tacan_odgovor: 'a'
    },
    {
        pitanje: 'Kako se naziva proces organizovanja podataka u bazi podataka radi efikasnijeg upita?',
        a: 'Inicializacija',
        b: 'Deklaracija',
        c: 'Normalizacija',
        d: 'Optimizacija',
        tacan_odgovor: 'c'
    },
    {
        pitanje: 'Koji od ponuđenih brojeva nije riješenje nejednačine 3x – 2 < x + 4?',
        a: '3',
        b: '-3',
        c: '1',
        d: '-1',
        tacan_odgovor: 'a'
    },
    {
        pitanje: 'Koja od sledećih struktura podataka koristi princip "Last In, First Out" (LIFO)?',
        a: 'Red',
        b: 'Stek',
        c: 'Lista',
        d: 'Stablo',
        tacan_odgovor: 'b'
    },
    {
        pitanje: 'Koja od sledećih struktura podataka koristi princip "First In, First Out" (FIFO)?',
        a: 'Red',
        b: 'Stek',
        c: 'Binarno stablo',
        d: 'Stablo',
        tacan_odgovor: 'a'
    },
    {
        pitanje: 'Kako nazivamo sljedeći niz 2, 5, 8, 11, ...?',
        a: 'Aritmetički niz',
        b: 'Geometrijski niz',
        c: 'Prirodni niz',
        d: 'Aritmetički – geometrijski niz',
        tacan_odgovor: 'a'
    },
    {
        pitanje: 'Za dva vektora koji imaju isti pravac kažemo da su:',
        a: 'Praktična',
        b: 'Isto usmjerena',
        c: 'Nekolinearna',
        d: 'Kolinearna',
        tacan_odgovor: 'd'
    },
    {
        pitanje: 'Šta je HTTPS?',
        a: 'Sigurna verzija HTTP-a koja koristi SSL/TLS za enkripciju',
        b: 'Nesigurna verzija HTTP-a koja koristi SSL/TLS za enkripciju',
        c: 'Sigurna verzija HTTP-a koja ne koristi SSL/TLS za enkripciju',
        d: 'Nesigurna verzija HTTP-a koja ne koristi SSL/TLS za enkripciju',
        tacan_odgovor: 'a'
    },
    {
        pitanje: 'Ako od broja 1000 oduzmemo broj 777, koliko nam ostaje?',
        a: '223',
        b: '333',
        c: '233',
        d: '323',
        tacan_odgovor: 'a'
    },
    {
        pitanje: 'Izbaci uljeza:',
        a: '200 dekametara',
        b: '2000 decimetara',
        c: '2 kilometra',
        d: '200000 centimetara',
        tacan_odgovor: 'b'
    },
    {
        pitanje: 'Koji broj je višekratnik brojeva svih od sljedećih brojeva: 2, 3, 5?',
        a: '20',
        b: '60',
        c: '50',
        d: '40',
        tacan_odgovor: 'b'
    },
    {
        pitanje: 'Ako je 122 broj koji je dva puta veći od svoje polovine, koji je broj za 18 veći?',
        a: '140',
        b: '79',
        c: '130',
        d: '262',
        tacan_odgovor: 'a'
    },
    {
        pitanje: 'Kakav je ugao od 95 stepeni?',
        a: 'Pravi',
        b: 'Oštri',
        c: 'Tupi',
        d: 'Netupi',
        tacan_odgovor: 'c'
    },
    {
        pitanje: 'Ako u korpi ima 27 jabuka i ako pojedemo sve osim 9 jabuka, koliko će ih ostati u korpi?',
        a: '27',
        b: '18',
        c: '36',
        d: '9',
        tacan_odgovor: 'd'
    },
    {
        pitanje: 'Koji broj dobijemo ako od 3 puta 3 oduzmemo dvostuku vrijednost broja 2?',
        a: '5',
        b: '2',
        c: '1',
        d: '23',
        tacan_odgovor: 'a'
    },
    {
        pitanje: 'Kako se naziva proces prevođenja programskog koda u mašinski jezik?',
        a: 'Kompajliranje',
        b: 'Računanje',
        c: 'Sabiranje',
        d: 'Dijeljenje',
        tacan_odgovor: 'a'
    },
    {
        pitanje: 'Za koju matricu možemo izračunati determinatu?',
        a: 'Kvadratnu',
        b: 'Svaku',
        c: 'Grbavu',
        d: '3x3',
        tacan_odgovor: 'a'
    },
    {
        pitanje: 'Koliko je 1.95/3?',
        a: '0.60',
        b: '0.63',
        c: '0.65',
        d: '0.68',
        tacan_odgovor: 'c'
    },
    {
        pitanje: 'Koliko je 25*32?',
        a: '900',
        b: '800',
        c: '856',
        d: '790',
        tacan_odgovor: 'b'
    },
    {
        pitanje: 'Matrica koja nema isti broj elemenata u svakom redu, naziva se...',
        a: 'Grbava',
        b: 'Kvadratna',
        c: 'Jedinična',
        d: 'Simetrična',
        tacan_odgovor: 'a'
    },
    {
        pitanje: 'Matrica koja ima na dijagonali jedinice, naziva se...',
        a: 'Jednostavna',
        b: 'Ugaona',
        c: 'Kvadratna',
        d: 'Jedinična',
        tacan_odgovor: 'd'
    },
    {
        pitanje: 'Ako knjiga ima 366 stranica, koliko se mora čitati stranica dnevno da se pročita sve za 6 dana?',
        a: '61',
        b: '66',
        c: '70',
        d: '62.5',
        tacan_odgovor: 'a'
    },
    {
        pitanje: 'Koji broj fali u sljedećem nizu: (7, 14, 21, 35)?',
        a: '28',
        b: '27',
        c: '20',
        d: '15',
        tacan_odgovor: 'a'
    },
    {
        pitanje: 'Koji je od navedenih izraza ekvivalentan izrazu: 16a + 8b – 6a + 2b?',
        a: '22a + 10b',
        b: '12a + 12b',
        c: '10a + 10b',
        d: '22a - 6b',
        tacan_odgovor: 'c'
    },
    {
        pitanje: 'U autobusu ima 12 putnika, na 2. stanici izašlo je 7, a ušlo 5 putnika, na 3. stanici ušlo je 6, a izašlo 3 putnika. Koliko ima putnika u autobusu?',
        a: '1',
        b: '7',
        c: '13',
        d: '11',
        tacan_odgovor: 'c'
    },
    {
        pitanje: 'Ko je kreirao i razvio programski jezik C++?',
        a: 'Bjarne Stroustrup',
        b: 'Sead Delalić',
        c: 'Linus Torvalds',
        d: 'Mark Zuckerberg',
        tacan_odgovor: 'a'
    },
    {
        pitanje: 'Ko je kreirao JS (JavaScript)?',
        a: 'Brendan Eich',
        b: 'Bjarne Stroustrup',
        c: 'Bill Gates',
        d: 'Alan Turing',
        tacan_odgovor: 'a'
    },
    {
        pitanje: 'Ako putnička karta košta 1.75 KM, koliko kusura treba vratiti vozač putniku koji plaća 6 karata sa 20 KM?',
        a: '8.75 KM',
        b: '7.5 KM',
        c: '9.5 KM',
        d: '10.5 KM',
        tacan_odgovor: 'c'
    },
    {
        pitanje: 'Najbrže se kreće automobil koji pređe ...',
        a: '200 km za 4 sata',
        b: '160 km za 5 sati',
        c: '240 km za 6 sati',
        d: '210 km za 7 sati',
        tacan_odgovor: 'a'
    },
    {
        pitanje: 'Ako u amfiteatru ima 212 studenata, pola ih je došlo autobusom, četvrtina tramvajem, koliko ih je došlo na drugi način?',
        a: '106',
        b: '53',
        c: '71',
        d: '23',
        tacan_odgovor: 'b'
    },
    {
        pitanje: 'Ko je razvio operativni sistem MS-DOS i bio ključna figura u popularizaciji ličnih računara?',
        a: 'Alan Turing',
        b: 'Bill Gates',
        c: 'Linus Torvalds',
        d: 'Mark Zuckerberg',
        tacan_odgovor: 'b'
    },
    {
        pitanje: 'Ko je bila Ada Lovelace?',
        a: 'Prva matematičarka',
        b: 'Prva programerka',
        c: 'Direktorica Google-a',
        d: 'Osnivačica Instagrama',
        tacan_odgovor: 'b'
    },
    {
        pitanje: 'Koji naučnik je definisao neprekidnost i konvergenciju matematičkih funkcija?',
        a: 'Augustin-Louis Cauchy',
        b: 'Georg Koši',
        c: 'Georg Cantor',
        d: 'Leonhard Euler',
        tacan_odgovor: 'a'
    },
    {
        pitanje: 'Koji broj je najveći od ponuđenih?',
        a: '7i +107',
        b: '6i + 2',
        c: 'Kompleksni brojevi se ne porede po veličini',
        d: '100i',
        tacan_odgovor: 'c'
    },
    {
        pitanje: 'Kolika je vrijednost izraza: 3*9*4*3?',
        a: '321',
        b: '323',
        c: '324',
        d: '325',
        tacan_odgovor: 'c'
    },
    {
        pitanje: 'Kolika je vrijednost izraza: (3/4 + 4/3 + 1/4 + 2/3) * 2?',
        a: '9',
        b: '3',
        c: '3/2',
        d: '6',
        tacan_odgovor: 'd'
    },
    {
        pitanje: 'Koji je od sljedećih vektora paralelan vektoru (1, 2, 3)?',
        a: '(2, 4, 6)',
        b: '(3, 2, 1)',
        c: '(5, 27, 12)',
        d: '(6, 15, 21)',
        tacan_odgovor: 'a'
    },
    {
        pitanje: 'Koji je kompleksnost algoritma za množenje dva niza dužine n?',
        a: 'O(n^2)',
        b: 'O(n)',
        c: 'O(log n)',
        d: 'O(n log n)',
        tacan_odgovor: 'a'
    },
    {
        pitanje: 'Koja je vremenska složenost Merge Sort algoritma?',
        a: 'O(nlogn)',
        b: 'O(n)',
        c: 'O(logn)',
        d: 'Ne postoji takav algoritam',
        tacan_odgovor: 'a'
    },
    {
        pitanje: 'Šta predstavlja Riemannova hipoteza?',
        a: 'Jednačina koja opisuje eliptične krive',
        b: 'Hipoteza o konveksnosti',
        c: 'Odnos između prvog i drugog reda zeta funkcije',
        d: 'Teorema o nulama zeta funkcije',
        tacan_odgovor: 'd'
    },
    {
        pitanje: 'Koliko približno iznosi broj e?',
        a: '2.71828',
        b: '2.71555',
        c: '2.71122',
        d: '3.12455',
        tacan_odgovor: 'a'
    },
    {
        pitanje: 'Koliko iznosi približno broj PI?',
        a: '3.14151',
        b: '3.14159',
        c: '3.14519',
        d: '3.14444',
        tacan_odgovor: 'b'
    },
    {
        pitanje: 'Šta je konturni integral u kompleksnoj analizi?',
        a: 'Integral duž konture u kompleksnoj ravni',
        b: 'Integral funkcije definisane u kompleksnoj ravni',
        c: 'Integral po pravoj liniji',
        d: 'Integral matrica',
        tacan_odgovor: 'a'
    },
    {
        pitanje: 'Koja je poznata formula koja povezuje eksponencijalnu i trigonometrijsku funkciju u kompleksnom domenu?',
        a: 'Eulerova formula',
        b: 'Fermatova formula',
        c: 'Riemannova formula',
        d: 'Newtonova formula',
        tacan_odgovor: 'a'
    },
    {
        pitanje: 'Šta predstavlja DFS u kontekstu algoritama?',
        a: 'Dijametralno fiksirana struktura',
        b: 'Dubinska pretraga',
        c: 'Dinamičko filtriranje sadržaja',
        d: 'Direktna frekvencijska sinteza',
        tacan_odgovor: 'b'
    },
    {
        pitanje: 'Koja je vremenska složenost DFS-a u najgorem slučaju za graf sa V čvorova i E grana?',
        a: 'O(V)',
        b: 'O(V + E)',
        c: 'O(E)',
        d: 'O(V * E)',
        tacan_odgovor: 'b'
    },
    {
        pitanje: 'Šta predstavlja BFS u kontekstu algoritama?',
        a: 'Pretraga po širini',
        b: 'Balansirana funkcionalna struktura',
        c: 'Bezbjednost fajl sistema',
        d: 'Binarna funkcija sa sintaksom',
        tacan_odgovor: 'a'
    },
    {
        pitanje: 'Kako BFS održava redoslijed posjećenih čvorova?',
        a: 'Nasumično',
        b: 'Korištenjem steka',
        c: 'Korištenjem reda',
        d: 'Korištenjem liste',
        tacan_odgovor: 'c'
    },
    {
        pitanje: 'Kako se zove struktura podataka koja ima tačno dva djeteta po svakom čvoru?',
        a: 'Heap',
        b: 'Red-čvor',
        c: 'Binarno stablo',
        d: 'Stablo',
        tacan_odgovor: 'd'
    }
];