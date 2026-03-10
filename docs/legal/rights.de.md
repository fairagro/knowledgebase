# Welche Rechte bestehen an Daten?

Welche Rechte an Daten bestehen hängt einerseits von der **Art der Daten**, aber auch deren **Aufbereitungsgrad** ab.
Rechtliche Besonderheiten der jeweiligen Datenarten sind im Beitrag zu [agrarspezifischen Daten](../rdm/specific_data.md) jeweils unter dem Stichwort „Rechtliche Einordnung“ aufgeführt.

An dieser Stelle hingegen findet ihr eine **allgemeine Einführung** zu Rechten an Daten. 
Dabei wird nach verschiedenen „Aufbereitungsgraden“ von Daten unterschieden: Rohdaten, annotierte Daten und zusammengestellte Daten.

Grundsätzlich lässt sich folgendes zusammenfassen:  
*Messdaten sind meist nicht geschützt. Geschützt sein können aber Aufnahmen sowie die Annotierungen von Messdaten. Oft kommt es aber auf den Einzelfall an.*


## Aufbereitungsgrade

Die verschiedenen Datenarten können in unterschiedlichen Graden aufbereitet sein.
Unterschieden werden können Rohdaten, annotierte Daten und zusammengestellte Daten.

### Rohdaten

Rohdaten sind Daten, welche „schlicht“ aufgezeichnet und nicht weiter aufbereitet wurden.

### Annotierte Daten 

„Annotierte Daten“ meint Daten, welchen durch Menschen ein Label zugewiesen wurde.
Dadurch erfahren sie einen Zuwachs an Informationen.
Beispiele für die Annotierung von Daten sind Kennzeichnung von Pflanzen in Bildern, Überschriften für (juristische) Normen oder die Bewertung, ob eine Aussage in einer Umfrage juristisch korrekt ist.

Abhängig von der Art der Annotierung können die Label, welche von verschiedenen Annotator\*innen zugewiesen werden, stark voneinander abweichen.
Diese Abweichungen können zumindest teilweise auf die Subjektivität der Zuweisungen zurückgeführt werden.[^1]

### Zusammengestellte Daten

Zusammengestellte Daten bezeichnet Datensätze, welche nach einem bestimmten Kriterium (z.B. Repräsentativität) zusammengestellt wurden.


## Überblick zu Rechten an Daten

### Urheberrecht 

Der Schutz als Werk nach dem UrhG setzt mindestens eine persönliche Schöpfung voraus, das Werk muss die sogenannte *Schöpfungshöhe* erreichen (§ 2 Abs. 2 UrhG, für Datenbankwerke § 4 UrhG).
Eine persönliche Schöpfung liegt vor, wenn das Werk auf einer menschlich-gestalterischen Tätigkeit beruht.[^2]
Soweit eine Maschine als Hilfsmittel herangezogen wird, kann eine solche Schöpfung gegeben sein, wenn eine gestaltende Tätigkeit des Menschen erfolgt.[^3]

Zumindest Einzeldaten werden nach (fachspezifischen) Vorgaben erhoben, sodass der forschenden Person kein hinreichender Gestaltungsspielraum zukommt.
Damit fehlt die nach § 2 Abs. 2 bzw. § 4 UrhG notwendige Schöpfungshöhe, um den urheberrechtlichen Schutz zu begründen.[^4]

Aus der Konzeption von Computerprogrammen folgt kein Schutz der aus der Verwendung selbigens resultierenden Daten.
Denn diese sind in der Regel nicht im Programm selber angelegt.[^5]

#### Rohdaten

Mangels Schöpfung sind Rohdaten nicht urheberrechtlich schutzfähig.

#### Annotierte Daten

Bei der Annotation von Daten verbleibt den Annotierenden je nach Art der Label ein mehr oder weniger großer Entscheidungsspielraum.
In diesem kann sich [Subjektivität bei der Annotation](#annotierte-daten) auswirken.
Das Urheberrechtsgesetz schützt grade diese Subjektivität.[^6]
Das Maß dieser Subjektivität muss nicht hoch sein[^7], sodass Annotationen urheberrechtlich geschützt sein können.

Ob ein solcher Schutz gegeben ist, lässt sich nur im Einzelfall beantworten.
Bei der Bewertung kann der [FAIRagro Helpdesk](https://fairagro.net/helpdesk/) unterstützen.

#### Zusammengestellte Daten

Durch die Zusammenstellung und Kuratierung von Daten kann sich ein urheberrechtlicher Schutz ergeben.[^8]

Ob ein solcher Schutz gegeben ist, lässt sich aber nur im Einzelfall beantworten.
Bei der Bewertung kann der [FAIRagro Helpdesk](https://fairagro.net/helpdesk/) unterstützen.


### Datenbankrecht, §§ 87a-87e UrhG {#datenbankrecht}

Ein Datensatz kann auch als Datenbank nach §§ 87a-87e UrhG geschützt sein.
Dabei handelt es sich um ein Leistungsschutzrecht, da es nicht an die schöpferische Tätigkeit einer Person anknüpft, sondern an investierter Leistung.
Damit knüpft die Rechteinhaberschaft auch nicht am dem\*der jeweiligen Schöpfer\*in des Werkes an, sondern am dem\*der Datenbankhersteller\*in.
Ein weiterer Unterschied zum Urheberrecht besteht darin, dass dem\*der Datenbankhersteller\*in nur das ausschließliche Recht zur Vervielfältigung *wesentlicher* Teile der Datenbank zukommt.
Daraus folgt im Umkehrschluss, dass jede Person unwesentliche Teile vervielfältigen kann, zusätzlich zu den Ausnahmen in § 87c UrhG.

Damit ein Datensatz als Datenbank geschützt ist, muss er nach § 87a UrhG fünf Bedingungen erfüllen:
Es muss sich um eine Sammlung von Werken, Daten oder anderen unabhängigen Elementen handeln,
diese müssen systematisch oder methodisch angeordnet, einzeln mit Hilfe elektronischer Mittel oder auf andere Weise zugänglich sein
und schließlich muss die Beschaffung, Überprüfung oder Darstellung eine nach Art oder Umfang wesentliche Investition erfordern.

Sammlung i.S. des § 87a UrhG ist die Zusammenstellung einer Vielzahl von Elementen.[^9]

Unabhängige Elemente i.S. des § 87a UrhG liegen vor, wenn sie aus der Datenbank herausgelöst werden können und ihnen trotzdem ein hinreichender Informationswert verbleibt.[^10]
Ob ein solcher Informationswert verbleibt, ist aus Perspektive eines interessierten Dritten zu beurteilen.[^11]
Damit reicht es aus, wenn irgendwer etwas mit den herausgelösten Elementen anfangen kann.
Zwar muss dies nicht unbedingt auf ein einzelnes Datum zutreffen (wenn es nicht schon den Begriff des Datums i.S. des UrhG erfüllt), allerdings kann das auf Datenabschnitte hinreichender Länge zutreffen.

Die Anordnung ist systematisch, wenn die Sammlung selber sich an einem System, einer Klassifizierung oder einem Ordnungsschema orientiert.[^12]
Sie ist methodisch, wenn die Sammlung selber einer bestimmten ordnenden Handlungsanweisung oder Plan folgt.[^13]
Bei elektronischen Datenbanken komm es vor allem auf die Durchsuchbarkeit an, wofür eine Aufbereitung der Daten mit Ordnungskriterien notwendig ist.[^14]

Ein Zugang zu den einzelnen Elementen wird dann als möglich angesehen, wenn die Sammlung ein geeignetes Zugangssystem umfasst, etwa ein Abfragesystem oder einen Index, welcher einen Einzelzugriff ermöglicht.[^15]
Ein solcher Index kann z.B. ein Inhaltsverzeichnis sein.

Eine wesentliche Investition i.S. des § 87a UrhG muss sich erstens auf Beschaffung, Überprüfung oder Darstellung der Elemente beziehen.
Damit kommt nicht jegliche Investition im Zusammenhang mit der Datenbank in Betracht.
Insbesondere nicht erfasst ist die Generierung von Daten, sondern erst die nachgeordneten Schritte, da eben die Datenbank und nicht die Daten geschützt werden.[^16]

Zweitens muss eine Investition vorliegen und diese wesentlich sein.
Investition sind nicht nur finanzielle Aufwendungen, sondern jeder Einsatz von Zeit, Arbeit und Energie.[^17]
Die Investition ist wesentlich, wenn sie nicht ganz unbedeutend ist und nicht von jedermann leicht erbracht werden könnte.[^18]
Meist werden maschinengenerierte Daten aber „nebenbei“ erzeugt, sodass es an einer entsprechenden Investition fehlt.[^19]

#### Rohdaten

Rohdaten als lediglich ungeordnete Aufzeichnung genügen nicht den Anforderungen an eine systematische oder methodische Anordnung, sodass sie nicht als Datenbank i.S. des § 87a UrhG anzusehen sind.

#### Annotierte Daten

Bei annotierten Daten muss nicht zwingend eine Anordnung erfolgen, da Daten „nur“ angereichert werden, ohne ihr Arrangement zu ändern.

Ob ein solcher Schutz gegeben ist, lässt sich nur im Einzelfall beantworten.
Bei der Bewertung kann der [FAIRagro Helpdesk](https://fairagro.net/helpdesk/) unterstützen.

#### Zusammengestellte Daten

Bei zusammengestellten Daten liegt vermutlich ein Schutz nach §§ 87a ff. UrhG vor.

Ob ein solcher Schutz gegeben ist, lässt sich nur im Einzelfall beantworten.
Bei der Bewertung kann der [FAIRagro Helpdesk](https://fairagro.net/helpdesk/) unterstützen.


### Lichtbildschutz, § 72 UrhG {#lichtbildschutz}

Auch ohne die notwendige Schöpfungshöhe können Lichtbilder nach § 72 UrhG geschützt sein.
Voraussetzung dafür ist einerseits die Schaffung eines „Urbilds“ durch Abbildung von etwas.
Anders formuliert: Nicht ausreichend ist die bloße Reproduktion, etwa durch Kopie.[^20]
Andererseits muss die Erzeugung eines Mindestmaßes an Fertigkeiten bedürfen, welche etwa in Bedienung der jeweiligen Vorrichtung liegen können.[^21]
Damit fallen automatisierte Aufnahmen nicht per se aus dem Schutzbereich heraus.[^22]

Der Schutzumfang entspricht weitestgehend dem „normalen“ Urheberrecht.[^23]

Ob ein solcher Schutz gegeben ist, lässt sich nur im Einzelfall beantworten.
Bei der Bewertung kann der [FAIRagro Helpdesk](https://fairagro.net/helpdesk/) unterstützen.


### Patentrecht 

Der Schutz auf Grundlage des Patentrechts setzt nach § 1 Abs. 1 PatG voraus, dass der Gegenstand des (angestrebten) Patents überhaupt patentfähig ist.
Dafür müsste zunächst eine Erfindung vorliegen.
Zwar gibt es keine feststehende Definition der Erfindung, vielmehr verändert sie sich im Laufe der Zeit mit dem sich verändernden Stand von Wissenschaft und Technik.[^24]
Allerdings hat sich als notwendiger, wenn auch nicht hinreichender Bestandteil der Erfindung das Erfordernis einer technischen Lehre herausgebildet.
Eine solche liegt vor, wenn ein Fachmann aufgrund des Patents wiederholt die Lösung eines Problems herbeiführen und dabei nach dieser Lehre arbeiten kann.[^25]

Daten als solche stellen keine Anweisung zur Lösung eines Problems dar, sondern bilden lediglich die Realität ab.
Damit sind Daten schon wegen Fehlen einer technischen Lehre nicht patentfähig.[^26]


### Geschäftsgeheimnisschutz, §§ 1 ff. GeschGehG {#geschäftsgeheimnisschutz}

Der Geschäftsgeheimnisschutz knüpft nicht an der Datenstruktur, nicht am Datum, sondern an der zugrundeliegenden Information an.
Diese Information muss geheim sein, einen wirtschaftlichen Wert haben und in Bezug auf sie müssen angemessene Geheimhaltungsmaßnahmen getroffen werden und ein berechtigtes Interesse an Geheimhaltung bestehen.
Schließlich ist strittig, ob die Informationen unternehmensbezogen sein müssen.

Die Informationen sind nach § 2 Nr. 1 lit. a Geschäftsgeheimnisgesetz (GeschGehG) geheim, wenn sie weder insgesamt noch in der genauen Anordnung und Zusammensetzung ihrer Bestandteile den Personen in den Kreisen, die üblicherweise mit dieser Art von Informationen umgehen, allgemein bekannt oder ohne Weiteres zugänglich ist.

Das ist jedenfalls der Fall, wenn sämtliche Bestandteile anderen unbekannt sind.[^27]
Auch ist eine Datensammlung in diesem Sinne geheim, wenn die einzelnen Daten öffentlich zugänglich sind, aber die vorgenommene Strukturierung nicht.[^28]
Das gilt nicht, wenn die Daten jederzeit ohne großen Aufwand aus allgemein zugänglichen Quellen erstellt werden können.[^29]
Auch geheim ist eine Information, wenn sie lediglich Personen bekannt ist, die zur Vertraulichkeit verpflichtet sind, selbst wenn es sich dabei um eine größere Personenzahl handelt.[^30]

Die Geheimhaltung entfällt, wenn die Informationen weitergegeben werden, ohne dass ausreichende Vertraulichkeitsvereinbarungen oder Schutzmaßnahmen getroffen werden.[^31]
Das gilt nicht, wenn die Informationen rechtswidrig veröffentlicht werden.
Sonst würde der Schutz durch das GeschGehG ausgehöhlt.[^32]

Ein wirtschaftlicher Wert ist gegeben, wenn eine kommerzielle Nutzung der Daten möglich ist, sei es auch nur eben aufgrund der Geheimhaltung der Daten.[^33]
Ein potentieller, erst durch Auswertung realisierter Wert genügt dabei vollkommen.[^34]



[^1]: *Beigman Klebanov* u. a., Analyzing Disagreements; *Braun*, I beg
    to differ: how disagreement is handled in the annotation of legal
    machine learning data sets, Artif Intell Law 2024, 839; *Sandri*
    u. a., Why Don't You Do It Right? Analysing Annotators' Disagreement
    in Subjective Tasks.

[^2]: *Leistner*, in: Schricker/Loewenheim, 6. Aufl. 2020, § 4 UrhG, Rn.
    38; *Schulze*, in: *Dreier*/*Schulze*, UrhG, 7. Aufl. 2022, § 2
    UrhG.

[^3]: *Leistner*, (Fn. 2), Rn. 40.

[^4]: Vgl. *Bomhard*/*Siglmüller*, in: *Redeker* (Hrsg.), Handbuch der
    IT-Verträge 2024 Rn. 11; *Schulze*, (Fn. 2), Rn. 26.

[^5]: *Schulze*, (Fn. 2), Rn. 14.

[^6]: *Schulze*, ebd. Rn. 18, 20.

[^7]: BGH, GRUR, 1991, 529 (530), - Explosionszeichnungen -; OLG
    Nürnberg, GRUR-RR, 2001, 225 (227), - Dienstanweisung -.

[^8]: *Hacker*, Immaterialgüterrechtlicher Schutz von KI-Trainingsdaten,
    GRUR 2020, 1025 (1028).

[^9]: *Vohwinkel*, in: BeckOK UrhR, 42. Aufl. 2024, § 87a UrhG, Rn. 28
    mwN.

[^10]: EuGH, Urt. v. 29. Oktober 2015 (C-490/14), - Verlag Esterbauer
    - Rn. 17; EuGH, Urt. v. 9. November 2004 (C-444/02), - Fixtures
    Marketing II - Rn. 18 ff.

[^11]: EuGH, (Fn. 10), - Verlag Esterbauer - Rn. 27.

[^12]: *Dreier*, in: *Dreier*/*Schulze*, Urheberrechtsgesetz, 7. Aufl.
    2022, § 4 UrhG, Rn. 17.

[^13]: *Dreier*, ebd. Rn. 17.

[^14]: *Dreier*, in: *Dreier*/*Schulze*, Urheberrechtsgesetz, 7. Aufl.
    2022, § 87a UrhG, Rn. 7.

[^15]: *Leistner*, in: Schricker/Loewenheim, 6. Aufl. 2020, § 4 UrhG,
    Rn. 52.

[^16]: BGH, Urt. v. 1. Dezember 2010 (I ZR 196/08), - Zweite
    Zahnarztmeinung II - Rn. 19 mwN auch zur Rspr. des EuGH; *Zech*,
    Daten als Wirtschaftsgut - Überlegungen zu einem „Recht des
    Datenerzeugers“, CR 2015, 137 (142) f.

[^17]: EuGH, Urt. v. 9. November 2004 (C-444/02), - Fixtures Marketing
    II - Rn. 44.

[^18]: BGH, (Fn. 16), - Zweite Zahnarztmeinung II - Rn. 23.

[^19]: *Vohwinkel*, in: BeckOK UrhR, 42. Aufl. 2024, § 87a UrhG, Rn. 54.

[^20]: *Vogel*, in: Schricker/Loewenheim, 6. Aufl. 2020, § 72 UrhG, Rn.
    33; *Lauber-Rönsberg*, in: BeckOK UrhR, 44. Aufl. 2024, § 72 UrhG,
    Rn. 15-17 mwN.

[^21]: *Vogel*, (Fn. 20), Rn. 34.

[^22]: *Lauber-Rönsberg*, (Fn. 20), Rn. 34.

[^23]: *Lauber-Rönsberg*, ebd. Rn. 27.

[^24]: *Einsele*, in: BeckOK PatR, 33. Aufl. 2024, § 1 PatG, Rn. 26
    f. mwN.

[^25]: BGH, Beschl. v. 27. März 1969 (X ZB 15/67), - Rote Taube -
    juris Rn. 16 f.; *Mes*, in: *Mes*,
    Patentgesetz/Gebrauchsmustergesetz, 5. Aufl. 2020, § 1 PatG, Rn. 10
    mwN; *Einsele*, (Fn. 24), Rn. 27; *Kraßer*/*Ann*, Patentrecht, 8.
    Aufl. 2022, § 11 Rn. 2.

[^26]: So auch *Knoke*, Subjektive Rechte an Forschungsdaten 2023, S.
    80.

[^27]: *Fuhlrott*/*Hiéramente*, in: *Fuhlrott*/*Hiéramente*, BeckOK
    GeschGehG, 20. Aufl. 2024, § 2 GeschGehG, Rn. 8.

[^28]: *Fuhlrott*/*Hiéramente*, ebd. Rn. 8.

[^29]: OLG Schleswig, Urt. v. 28. April 2022 (6 U 39/21), -
    Teil-Kostenrechnung - Rn. 42; BGH, Urt. v. 23. Februar 2012 (I ZR
    136/10), - MOVICOL-Zulassungsantrag - Rn. 21.

[^30]: *Ohly*, Das neue Geschäftsgeheimnisgesetz im Überblick, GRUR
    2019, 441 (443).

[^31]: *Krüger u. a.*, Der Datenpool als Geschäftsgeheimnis, GRUR 2020,
    578 (581).

[^32]: *Alexander*, in: *Köhler*/*Bornkamm*/*Feddersen*, UWG, 42. Aufl.
    2024, § 2 GeschGehG, Rn. 35a zur Gegenansicht.

[^33]: *Fuhlrott*/*Hiéramente*, in: *Fuhlrott*/*Hiéramente*, BeckOK
    GeschGehG, 20. Aufl. 2024, § 2 GeschGehG, Rn. 17.

[^34]: *Ohly*, (Fn. 30), 441 (443) mwN.



---
# <small>Mitwirkende</small>
:fontawesome-solid-user: Constantin Breß [![ORCID icon](../images/ORCID-iD_icon_16x16.png)](https://orcid.org/0000-0002-2133-1541){:target="_blank"}

(*Letztes Update: 2025-09-22*)

---
#<small>Wie zitiert man diese Seite?</small>
Breß, C. (2025). *Rechte an Daten*. FARagro Knowledge Base. [https://knowledgebase.fairagro.net/legal/rights](https://knowledgebase.fairagro.net/legal/rights). Unter: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/){:target="_blank"}.  

[![CC BY Logo](../images/cc-by.png)](https://creativecommons.org/licenses/by/4.0/){:target="_blank"}
