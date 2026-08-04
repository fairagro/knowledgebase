# FAIRagro Publication Metadata Set version archive
This page archives all former versions of FAIRagros Publication Metadata Set.
*currently under development*

# FAIRagro Publication Metadata Set Changelog

All notable changes to the FAIRagro Publication Metadata Set will be documented on this page.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/2.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.0.1] - 2026-07-31

### Changed
- Changed name of property "Access type" to fit with Schema.org name of the property.
- Changed cardinality of "keyword" property from "1-n" to "0-n" to not make it mandatory. Keywords are seen as crucial for findability purposes but requiring their availability could exclude important data sources from the FAIRagro Search Hub.
- Changed cardinality of "affiliation" property of "Person" from "1" to "0-1". Affiliation information is seen as important but there might be cases of people involved in dataset publication without an official affiliation or Research Data Infrastructures not requiring affiliation metadata for all submissions. To not potentially exclude such data sources from the FAIRagro Search Hub, cardinality has changed.
- Changed cardinality of "identifier" property of "Person" from "1" to "0-1". Identifiers such as ORCID are seen as crucial but there might be cases of Research Data Infrastructures not requiring identifier metadata for all people. To not potentially exclude such data sources from the FAIRagro Search Hub, cardinality has changed.
- Changed property IDs accordingly due to removed "Point of Contact" property 

### Removed
- Removed "Point of Contact" property. This property was required to guarantee validity of metadata instances towards Dataverse metadata requirements. To ease implementation instead of modeling it per dataset instance, where the information is rarely available, it will be generated for the FAIRagro Search Hub during metadata ingest by adding default contact point adresses on Research Data Infrastructure level instead of personal/dataset level.

## [1.0.0] - 2025-12-22

### Added
- Initial version released via FAIRagro Knowledge Base (https://knowledgebase.fairagro.net/en/tech-guides/core_metadata_specification/#2-publication-metadata-set)

---
<!-- UPDATE information -->

# <small>Contributors</small>


For feedback contact Gabriel Schneider ([schneiderg@zbmed.de](mailto:schneiderg@zbmed.de){:target="_blank"}).

(*Last Update: 2026-08-04*)

---
#<small>How to cite this page?</small>
Schneider, G., Jung, J., Reinosch, N. & Martini, D. *et al.* (2026). *FAIRagro Publication Metadata Set version archive*. FAIRagro Knowledge Base. [https://knowledgebase.fairagro.net/en/tech-guides/core_metadata_specification/archive/publication_metadata_set/](https://knowledgebase.fairagro.net/en/tech-guides/core_metadata_specification/archive/publication_metadata_set/). Under: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/){:target="_blank"}.  

[![CC BY Logo](../../../../images/cc-by.png)](https://creativecommons.org/licenses/by/4.0/){:target="_blank"}