# Welche Datentypen existieren in der Agrosystemforschung? 

!!! tip inline end "Data Fact Sheets"
	Schmidt *et al.* (2023): [**DATA FACT SHEETS of the Data Steward Service Center (DSSC) from the NFDI consortium FAIRagro**](https://doi.org/10.4126/FRL01-006461782){:target="_blank"}

Einen kurzen Überblick über relevante Datentypen im Bereich der Agrosystemforschung und deren Besonderheiten im FDM findet ihr hier in unserer Knowledgebase und in unseren [Data Fact Sheets](https://doi.org/10.4126/FRL01-006461782){:target="_blank"}[^1].
Ein besonderes Augenmerk liegt dabei auf der Frage: *Was muss ich bei Erhebung und Publikation – auch in rechtlicher Hinsicht –  beachten?*
Zusätzlich umfasst die Knowledgebase auch einen [Überblick zur rechtlichen Einordnung von Daten](../legal/index.md).

[^1]: Schmidt, M., Beyer, F., Mazón, E. R., Sahwan, W., Singson, L., Vedder, L., Boße, S., & Svoboda, N. (2023). **DATA FACT SHEETS of the Data Steward Service Center (DSSC) from the NFDI consortium FAIRagro**. PUBLISSO. [https://doi.org/10.4126/FRL01-006461782](https://doi.org/10.4126/FRL01-006461782){:target="_blank"}


## Typen von Daten

### Bodendaten
Böden sind nicht nur die Grundlage für das Wachstum von Pflanzen und damit unverzichtbar für eine langfristige Nahrungsmittelsicherheit, sondern auch Archive der Natur- und Klimageschichte.
Bodendaten wie Bodenart (Körnung), Nährstoffkonzentrationen, Dichte und Wassergehalt werden oft nicht eigenständig, sondern im Zusammenhang mit anderen landschaftsökologischen Daten erhoben, wie beispielsweise meteorologischen, mikrobiologischen oder pflanzenphysiologischen Daten.
Bodendaten haben, wenn Sie aus Freilandexperimenten stammen, immer einen Raumbezug (Geodaten).
Ebenfalls wichtig ist ihre Verortung in die Tiefe, als Profile oder in dezidierten Tiefenstufen.
Für die Beschreibung von Böden und ihrer Profile existieren zahlreiche nationale und internationale Standards: z.B. Deutsche Systematik, 
[WRB](https://www.fao.org/soils-portal/data-hub/soil-classification/world-reference-base/en/){:target="_blank"}, 
[USDA](https://www.nrcs.usda.gov/resources/guides-and-instructions/soil-classification){:target="_blank"}. 
\[Schmidt *et al.* 2023, S. 15\][^1]

#### Spezifika im Forschungsdatenmanagement
Bei der Erhebung von Bodendaten kommt eine Vielzahl unterschiedlicher Methoden zur Anwendung.
Bei der Beschreibung der Daten (Metadaten) ist daher die Angabe der verwendeten Methode und des verwendeten Analysegerätes für die Reproduzierbarkeit und Vergleichbarkeit wichtig.
Eine Herausforderung liegt darin, dass wesentliche Daten-Altbestände noch nicht digitalisiert sind.
\[ebd.\]

#### Rechtliche Einordnung
Datenbanken mit Bodendaten können nach aktueller Rechtsprechung durch das Recht aus § 87a ff. UrhG auch für die Erhebenden geschützt sein. 
Dies baut im Kern darauf auf, dass eine Messung als „Beschaffung“ im Sinne von § 87a UrhG verstanden wird.
Allerdings könnten sich durch die Datenverordnung Änderungen ergeben.
Diese haben ihren Weg allerdings noch nicht in die Rechtsprechung gefunden.
Daneben kann sich ein Schutz aufgrund des Aufbereitungsgrades der Daten ergeben.

Bei georeferenzierten Daten *kann* es sich je nach Konstellation auch um personenbezogene Daten handeln.
Ob das der Fall ist, lässt sich aber nur im Einzelfall beantworten.

Details finden sich bei der [Übersicht zu Rechten an Daten](../legal/rights.md).
Im Einzelfall kann der [FAIRagro Helpdesk](https://fairagro.net/helpdesk){:target="_blank"} weiterhelfen.


### Allgemeine Felddaten
Allgemeine Felddaten fallen bei vielen agrarwissenschaftlichen Feldversuchen an. Sie umfassen Informationen zum Betrieb, sowie zu den ausgesäten Kulturen (z.B. Sorte, Saattermin, Ertrag, Pflanzenschutzbehandlungen, Düngung, …).
Häufig spielt auch die Anonymisierung oder Pseudonymisierung von Betriebsdaten eine Rolle.
In aller Regel werden allgemeine Felddaten nicht separat, sondern als Vergleichsdaten innerhalb von Feldstudien erhoben.
In diesem Zusammenhang bieten [landwirtschaftliche Dauerfeldversuche](#dauerfeldversuche) (Long-term field experiments/LTE) ein nachhaltiges Monitoring für Boden- und Pflanzeneigenschaften unter wechselnden klimatischen Bedingungen und Bewirtschaftungsverfahren.
Somit repräsentieren LTE-Daten einen wichtigen landwirtschaftlichen Datenschatz, der u.a. auch auf allgemeinen Felddaten beruht.
Dieser Schatz sollte sorgfältig veröffentlicht werden, um beispielsweise das Verständnis der Auswirkungen des Klimawandels zu fördern und Lösungen für nachhaltige Bodenbewirtschaftung entwickeln zu können.
\[Schmidt *et al.* 2023, S. 16\][^1]

#### Spezifika im Forschungsdatenmanagement
Die Metadaten sollten sich generell an der Fragestellung der eigentlichen Feldstudie/Feldversuch orientieren.
Dennoch sollte auf das Vorhandensein von allgemeinen Felddaten im Datensatz hingewiesen werden, die auch für weitere Studien interessant sein könnten.
\[ebd.\]

#### Rechtliche Einordnung
Datenbanken mit Felddaten können nach aktueller Rechtsprechung durch das Recht aus § 87a ff. UrhG auch für die Erhebenden geschützt sein. 
Dies baut im Kern darauf auf, dass eine Messung als „Beschaffung“ im Sinne von § 87a UrhG verstanden wird.
Allerdings könnten sich durch die Datenverordnung Änderungen ergeben.
Diese haben ihren Weg allerdings noch nicht in die Rechtsprechung gefunden.
Daneben kann sich ein Schutz aufgrund des Aufbereitungsgrades der Daten ergeben.

Bei georeferenzierten Daten *kann* es sich je nach Konstellation auch um personenbezogene Daten handeln.
Ob das der Fall ist, lässt sich aber nur im Einzelfall beantworten.
Gleiches gilt für Angaben zum jeweiligen Betrieb bei den Felddaten.

Details finden sich bei der [Übersicht zu Rechten an Daten](../legal/rights.md).
Im Einzelfall kann der [FAIRagro Helpdesk](https://fairagro.net/helpdesk){:target="_blank"} weiterhelfen.


### Genetische Daten („omics“-Daten) {#genetische-daten}
In vielen Bereichen der lebenswissenschaftlichen Forschung gehören genetische Methoden zum Standard.
So werden u.a. auch im Bereich der Nutzpflanzenforschung vermehrt genetische Studien an z.B. Mais oder Gerste durchgeführt.
Häufig stehen bei diesen Studien Zusammenhänge zwischen verschiedenen Genotypen (genetische Sortenmerkmale) und ihren jeweiligen Phänotypen, den Ausprägungen dieser Merkmale unter den gegebenen Umwelteinflüssen, im Vordergrund.
Daher werden genetische Daten häufig im Zusammenhang mit [Phänotypisierungsdaten](#phanotypisierungdaten) erhoben.
Die in diesen Studien analysierten Gewebeproben (z.B. Blatt- und/oder Wurzelgewebe) können dabei sowohl direkt aus dem Labor (z.B. Klimakammer) oder von einem Versuchsfeld stammen.
Unabhängig davon fallen bei allen Studien in diesem Bereich große Mengen sogenannter „omics“-Daten an, meist durch Sequenzierung der Proben.
Diese Sequenzen werden meist nicht nur untereinander, sondern auch mit sog. Referenzgenomen verglichen.
\[Schmidt *et al.* 2023, S. 17\][^1]

#### Spezifika im Forschungsdatenmanagement
Bei fast allen Nutzpflanzen wird neben der Art eine Sorte, Züchtungslinie oder Variation unterschieden. Diese sollte in den Metadaten mitangegeben werden.
Oft ist es interessant, einen Zusammenhang zwischen Phänotyp und Genotyp herzustellen.
\[ebd.\]

#### Rechtliche Einordnung
Datenbanken mit „omics“-Daten können nach aktueller Rechtsprechung durch das Recht aus § 87a ff. UrhG auch für die Erhebenden geschützt sein. 
Dies baut im Kern darauf auf, dass eine Messung als „Beschaffung“ im Sinne von § 87a UrhG verstanden wird.
Allerdings könnten sich durch die Datenverordnung Änderungen ergeben.
Diese haben ihren Weg allerdings noch nicht in die Rechtsprechung gefunden.
Daneben kann sich ein Schutz aufgrund des Aufbereitungsgrades der Daten ergeben.

Wenn die Daten Abbildungen umfassen, können diese nach § 72 UrhG als Lichtbilder geschützt sein.
Dieser Schutz ähnelt in vielen Punkten dem Urheberrecht.

Details finden sich bei der [Übersicht zu Rechten an Daten](../legal/rights.md).
Im Einzelfall kann der [FAIRagro Helpdesk](https://fairagro.net/helpdesk){:target="_blank"} weiterhelfen.


### Phänotypisierungdaten
Phänotypisierungsdaten sind entscheidend für das Verständnis der Pflanzenbiologie, die Verbesserung von Kulturpflanzen und landwirtschaftliche Praktiken.
Sie ermöglichen es den Forschern, genetische Faktoren zu identifizieren, die mit erwünschten Merkmalen in Verbindung stehen, die Auswirkungen von Umweltfaktoren auf das Wachstum und die Entwicklung von Pflanzen zu untersuchen, Strategien für das Pflanzenmanagement zu optimieren und neue Sorten mit verbesserten Eigenschaften zu entwickeln.
Die Standardisierung und ordnungsgemäße Dokumentation von Phänotypisierungsdaten, wie sie von Initiativen wie [MIAPPE](https://www.miappe.org/) befürwortet wird, ist wichtig, um Datenintegrität, Reproduzierbarkeit und Kompatibilität zwischen verschiedenen wissenschaftlichen Studien zu gewährleisten.
Dies erleichtert den Datenaustausch, die Zusammenarbeit und die Entwicklung umfangreicher Datenbanken und Repositorien für die Pflanzenphänotypisierungs-Forschung.
\[Schmidt *et al.* 2023, S. 18\][^1]

#### Spezifika im Forschungsdatenmanagement
Oft ist es interessant, einen Zusammenhang zwischen Phänotyp und Genotyp herzustellen.
\[ebd.\]

#### Rechtliche Einordnung
Datenbanken mit Phänotypisierungsdaten können nach aktueller Rechtsprechung durch das Recht aus § 87a ff. UrhG auch für die Erhebenden geschützt sein.
Dies baut im Kern darauf auf, dass eine Messung als „Beschaffung“ im Sinne von § 87a UrhG verstanden wird. 
Allerdings könnten sich durch die Datenverordnung Änderungen ergeben. 
Diese haben ihren Weg allerdings noch nicht in die Rechtsprechung gefunden.
Daneben kann sich ein Schutz aufgrund des Aufbereitungsgrades der Daten ergeben.

Wenn die Daten Abbildungen umfassen, können diese nach § 72 UrhG als Lichtbilder geschützt sein.
Dieser Schutz ähnelt in vielen Punkten dem Urheberrecht.

Details finden sich bei der [Übersicht zu Rechten an Daten](../legal/rights.md).
Im Einzelfall kann der [FAIRagro Helpdesk](https://fairagro.net/helpdesk){:target="_blank"} weiterhelfen.


### Feldrobotik & Sensordaten
In der nicht-invasiven Erhebung von phänotypischen, d.h. äußerlich messbaren Parameter in Feldversuchen werden in der Forschung vermehrt Feldroboter und Drohnen eingesetzt.
Diese können mit Hilfe eingebauter Sensoren Messwerte automatisiert erheben.
Dabei können sowohl Daten erhoben werden, die anschließend am Computer ausgewertet werden, als auch Daten, die automatisiert direkt verarbeitet werden und angepasste Applikationen (z.B. pflanzenspezifisches Düngen oder Entfernen von Beikräutern) nach sich ziehen (Farming 4.0).
Wie viele Agrosystemdaten weisen auch Sensordaten in aller Regel eine direkte Georeferenzierung auf.
Diese kann sowohl dem Roboter zur Navigation dienen als auch die Verortung von Daten in einer Übersichtskarte ermöglichen.
Häufig liegen neben den Georeferenzen der aufgezeichneten Daten (GPS-Position) auch Karteninformationen in Form von sogenannten Shape-Files vor.
Bei Messungen im großen Stil kann allein durch die Datenmenge sogenannte [Big Geodata](#geomassedaten) entstehen.
\[Schmidt *et al.* 2023, S. 19\][^1]

#### Spezifika im Forschungsdatenmanagement
Neben den Angaben zur untersuchten Kultur, sollten auch immer Details zu den genutzten Sensoren und der Art der erhaltenen Daten sowie Einheiten und Qualitätskontrolle angegeben werden.
\[ebd.\]

#### Rechtliche Einordnung
Datenbanken mit durch Feldrobotik erhobenen Daten und Sensordaten können nach aktueller Rechtsprechung durch das Recht aus § 87a ff. UrhG auch für die Erhebenden geschützt sein.
Dies baut im Kern darauf auf, dass eine Messung als „Beschaffung“ im Sinne von § 87a UrhG verstanden wird.
Allerdings könnten sich durch die Datenverordnung Änderungen ergeben.
Diese haben ihren Weg allerdings noch nicht in die Rechtsprechung gefunden.
Daneben kann sich ein Schutz aufgrund des Aufbereitungsgrades der Daten ergeben.

Wenn die Daten Abbildungen umfassen, können diese nach § 72 UrhG als Lichtbilder geschützt sein.
Dieser Schutz ähnelt in vielen Punkten dem Urheberrecht.

Bei georeferenzierten Daten *kann* es sich je nach Konstellation auch um personenbezogene Daten handeln.
Ob das der Fall ist, lässt sich aber nur im Einzelfall beantworten.

Details finden sich bei der [Übersicht zu Rechten an Daten](../legal/rights.md).
Im Einzelfall kann der [FAIRagro Helpdesk](https://fairagro.net/helpdesk){:target="_blank"} weiterhelfen.


### Big Geodata/Geomassedaten {#geomassedaten}
Geodaten sind Informationen über physische Objekte, denen ein räumlicher Bezug (bspw. Koordinaten) angehängt ist.
Diese Informationen können Punkte, Linien und Flächen in Form von Messungen im Gelände sein, welche als Geo-Vektordaten bezeichnet werden, als auch bildgebende Messungen von Sensor- und Kamerasystemen im Gelände, aus der Luft und aus dem All, welche als Geo-Rasterdaten bezeichnet werden.
Global gesehen erreicht die „Flut“ an Geodaten heutzutage mehrere dutzende von Petabytes (1 PB = 1.000 TB = 1 Million GB) mit täglich steigender Aufnahmerate hunderter Terrabytes.
Aufgenommen werden sie von einer Fülle unterschiedlichster Sensoren mit verschiedenen raumzeitlichen Skalen.
Um die Masse an Daten verarbeiten zu können braucht es daher neue Konzepte für Speicherung (zentrale Clouds, dezentrale Backups, neue Geodatenmanagementsysteme …) und Prozessierung (skalierbare Architekturen, verteiltes Rechnen, effiziente Algorithmik ...).
Skalierbare Architekturen meint dabei anpassungsfähige, meist cloudbasierte Systeme, in denen anforderungsbedingt Ressourcen (Prozessorkerne, RAM) zusätzlich zugeordnet, oder die Lastanforderungen auf verschiedene Systeme verteilt werden können.
Dafür sind Geodaten-Infrastrukturen notwendig, die die verschiedenen Technologien mit standardisierten Schnittstellen verbindet.
Auf Basis der unterschiedlichen Geodaten kann ein langfristiges Monitoring in der Agrarlandschaft durchgeführt werden, die Veränderungen an der Landoberfläche verfolgt, und dokumentiert werden.
\[Schmidt *et al.* 2023, S. 20\][^1]

#### Spezifika im Forschungsdatenmanagement
Kontinuierlich anfallende Geodaten und moderne komplexe Auswertungsmethoden stellen neue Herausforderungen dar, insbesondere in Bezug auf die Prozessierung der Daten.
Cloud Computing ist eine der Lösungen, wobei Daten auf vernetzten Zentralservern gespeichert, sowie schnell und barrierefrei vollautomatisch verarbeitet werden können.
Damit Geodaten FAIR sind, werden sie in speziellen Softwareumgebungen nach etablierten Metadatenstandards eingepflegt und vorgehalten.
Neben cloud-basierten Infrastrukturen existieren moderne Geodatenmangementsysteme (DataCube-Technologie, GeoNode ...) die zum einen dazu dienen, Daten auffindbar und abrufbar zu machen.
Zum anderen werden die Daten und daraus produzierte Produkte nach Metadatenstandards (ISO19115, INSPIRE, Dublin Core ...) dokumentiert.
\[ebd.\]

#### Rechtliche Einordnung
Datenbanken als Teil von Big Geodata können nach aktueller Rechtsprechung durch das Recht aus § 87a ff. UrhG auch für die Erhebenden geschützt sein.
Dies baut im Kern darauf auf, dass eine Messung als „Beschaffung“ im Sinne von § 87a UrhG verstanden wird. 
Allerdings könnten sich durch die Datenverordnung Änderungen ergeben. 
Diese haben ihren Weg allerdings noch nicht in die Rechtsprechung gefunden.
Daneben kann sich ein Schutz aufgrund des Aufbereitungsgrades der Daten ergeben.

Wenn die Daten Abbildungen umfassen, können diese nach § 72 UrhG als Lichtbilder geschützt sein.
Dieser Schutz ähnelt in vielen Punkten dem Urheberrecht.

Bei georeferenzierten Daten *kann* es sich je nach Konstellation auch um personenbezogene Daten handeln.
Ob das der Fall ist, lässt sich aber nur im Einzelfall beantworten.

Details finden sich bei der [Übersicht zu Rechten an Daten](../legal/rights.md).
Im Einzelfall kann der [FAIRagro Helpdesk](https://fairagro.net/helpdesk){:target="_blank"} weiterhelfen.



## Besonderheiten

### Dauerfeldversuche (Long-term field experiments/LTE) {#dauerfeldversuche}
Viele Experimente im nutzpfanzenwissenschaftlichen Kontext erstrecken sich über einen kompletten Zyklus bestehend aus Aussaat, Pflanzenwachstum (inkl. Behandlungen) und Ernte.
Im Freiland sind solche Experimente immer auch von den Standortbedingungen abhänig, sowohl in Bezug auf den Boden als auch in Bezug auf Wetter und Klima.
Die entsprechenden Parameter werden daher in der Regel im Rahmen der [allgemeinen Felddaten](#allgemeine-felddaten) erhoben.  
Bei landwirtschaftlichen Dauerversuchen werden am selben Standort über viele Jahre hinweg gleiche oder ähnliche Versuche unternommen und alle Variabeln konsistent erfasst.
Daher bieten sie ein nachhaltiges Monitoring für Boden- und Pflanzeneigenschaften unter wechselnden klimatischen Bedingungen und Bewirtschaftungsverfahren.
LTE-Daten stellen einen wichtigen landwirtschaftlichen Datenschatz dar, der sorgfältig veröffentlicht werden sollte.
(vgl. Schmidt *et al.* 2023, S. 16)[^1]

Eine gute Übersicht über bereits veröffentlichte Dauerfeldversuche in Europa bietet die [LTE-Übersichtskarte](https://tools.bonares.de/ltfe/){:target="_blank"} von BonaRes[^2].
Dort sind Daten von mehr als 570 landwirtschaftlichen Experimenten mit einer Dauer von jeweils min. 20 Jahren gesammelt.

#### Spezifika im Forschungsdatenmanagement
Die spezifischen Besonderheiten im FDM ergeben sich grundsätzlich aus den konkret erhobenen Daten 
(vgl. die entsprechenden Abschnitte zu den Themen z.B. [Bodendaten](#bodendaten) oder [Phänotypisierungsdaten](#phanotypisierungdaten)).
Dazu kommen die mit zu erfassenden [allgemeinen Felddaten](#allgemeine-felddaten), von denen manche jährlich neu zu erheben sind (z.B. Aussaatdatum) und manche immer gleich bleiben (z.B. Standort).
Eine übersichtliche Dokumentation v.a. der Datenstruktur ist daher empfehlenswert.

#### Rechtliche Einordnung
Datenbanken mit Daten aus Dauerfeldversuchen können nach aktueller Rechtsprechung durch das Recht aus § 87a ff. UrhG auch für die Erhebenden geschützt sein.
Dies baut im Kern darauf auf, dass eine Messung als „Beschaffung“ im Sinne von § 87a UrhG verstanden wird. 
Allerdings könnten sich durch die Datenverordnung Änderungen ergeben. 
Diese haben ihren Weg allerdings noch nicht in die Rechtsprechung gefunden.
Daneben kann sich ein Schutz aufgrund des Aufbereitungsgrades der Daten ergeben.

Wenn die Daten Abbildungen umfassen, können diese nach § 72 UrhG als Lichtbilder geschützt sein.
Dieser Schutz ähnelt in vielen Punkten dem Urheberrecht.

Bei georeferenzierten Daten *kann* es sich je nach Konstellation auch um personenbezogene Daten handeln.
Ob das der Fall ist, lässt sich aber nur im Einzelfall beantworten.

Details finden sich bei der [Übersicht zu Rechten an Daten](../legal/rights.md).
Im Einzelfall kann der [FAIRagro Helpdesk](https://fairagro.net/helpdesk){:target="_blank"} weiterhelfen.


[^2]: BonaRes Repository. [https://doi.org/10.25504/FAIRsharing.2cw3HU](https://doi.org/10.25504/FAIRsharing.2cw3HU){:target="_blank"}



---
# <small>Mitwirkende</small>
:fontawesome-solid-user: Lucia Vedder [![ORCID icon](../images/ORCID-iD_icon_16x16.png)](https://orcid.org/0000-0002-8924-9800){:target="_blank"},
:fontawesome-solid-user: Marcus Schmidt [![ORCID icon](../images/ORCID-iD_icon_16x16.png)](https://orcid.org/0000-0002-5546-5521){:target="_blank"}

(*Letztes Update: 2025-09-11*)

---
#<small>Wie zitiert man diese Seite?</small>
Vedder, L. & Schmidt, M. (2025). *Agrarspezifische Daten*. FARagro Knowledge Base. [https://knowledgebase.fairagro.net/rdm/specific_data/](https://knowledgebase.fairagro.net/rdm/specific_data/). Unter: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/){:target="_blank"}.  

[![CC BY Logo](../images/cc-by.png)](https://creativecommons.org/licenses/by/4.0/){:target="_blank"}
