# FAIRagro Core Metadata Specification
*Version 1.0*

##  Einleitung und Motivation
FAIRagro bietet ein Metadaten-Framework für die Veröffentlichung von Forschungsdaten im Bereich der Agrosystemforschung an, das für die Implementierung in Datenpublikationsdiensten wie Forschungsdateninfrastrukturen (RDIs) und Datenrepositorien vorgesehen ist.

Für generische Metadaten baut das Publication Metadata Set auf [Schema.org](https://schema.org){:target="_blank"} und anderen Standards  auf ([DC Terms](https://www.dublincore.org/specifications/dublin-core/dcmi-terms/){:target="_blank"}, [DCAT](https://www.w3.org/TR/vocab-dcat-3/){:target="_blank"}) und kombiniert diese, um eine Reihe von Typen, Eigenschaften und Kardinalitäten sowie Verknüpfungen zwischen den Typen zu definieren. 

Domänenspezifische Metadaten werden über das Agrischemas-Framework ausgedrückt. Es baut zusätzlich auf [Bioschemas](https://bioschemas.org/){:target="_blank"} auf, um landwirtschaftliche Informationen zu [Dataset](https://schema.org/Dataset){:target="_blank"}-Metadaten hinzuzufügen, wobei der Schwerpunkt auf der Verbesserung der Auffindbarkeit liegt. Es verwendet vorhandene [Typen](https://bioschemas.org/types/){:target="_blank"} und [Eigenschaften](https://schema.org/Property){:target="_blank"} und empfiehlt semantische Konzepte, um Interoperabilität zu erreichen. Es kann in bereits vorhandene [Schema.org](https://schema.org){:target="_blank"}-Schnittstellen implementiert werden, indem domänenspezifische Informationen, die in lokalen Daten/Metadaten verfügbar sind, auf die in diesem Dokument beschriebenen Strukturen gemapped werden. 
**Agrischemas bietet eine Liste empfohlener Typen und Eigenschaften für die Auffindbarkeit auf der Grundlage dieses Ansatzes.**

Diese beiden Komponenten des FAIRagros-Metadatenansatzes bilden eine Core Metadata Specificiation, um die erforderlichen Informationen für FAIRagro-Dienste wie den [FAIRagro Search Hub](https://search-hub.fairagro.net/){:target="_blank"} verfügbar zu machen, der auf [Dataverse](https://dataverse.org/){:target="_blank"} basiert. Die Core Metadata Specificiation ist mit bestehenden generischen Metadatenstandards sowie laufenden [NFDI](https://www.nfdi.de/){:target="_blank"}-weiten Entwicklungen harmonisiert.



!!! info 
	<big>Die komplette Core Metadata Specification ist auf der [englischsprachigen Seite dieses Artikels](https://knowledgebase.fairagro.net/en/tech-guides/core_metadata_specification/) verfügbar.</big>




---
# <small>Mitwirkende</small>
Das Publication Metadata Set und Agrischemas sind kollaborative Entwicklungen innerhalb des FAIRagro Konsortiums und angrenzender Communities. Beitragende stammen aus FAIRagro Task Areas [3](https://fairagro.net/fairagro_team_category/ta-3/){:target="_blank"}, [4](https://fairagro.net/fairagro_team_category/ta-4/){:target="_blank"} und für Agrischemas zusätzlich aus dem [„Agri-schemas“-Projekt](https://github.com/Rothamsted/agri-schemas/tree/master){:target="_blank"}.

Kontakt bei Fragen oder Feedback:  Gabriel Schneider ([schneiderg@zbmed.de](mailto:schneiderg@zbmed.de){:target="_blank"}) oder die [Agrischemas Mailingliste](mailto:agri-wg-bioschemas@listserv.dfn.de){:target="_blank"}.

(*Letztes Update: 2025-12-17*)

---
# <small>Wie zitiert man diese Seite?</small>
Schneider, G., Jung, J., Reinosch, N. & Martini, D. *et al.* (2025). *FAIRagro Core Metadata Specification*. FAIRagro Knowledge Base. [https://knowledgebase.fairagro.net/tech-guides/core_metadata_specification/](https://knowledgebase.fairagro.net/tech-guides/core_metadata_specification/). Unter: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/){:target="_blank"}.  

[![CC BY Logo](../images/cc-by.png)](https://creativecommons.org/licenses/by/4.0/){:target="_blank"}
