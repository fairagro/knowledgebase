# FAIRagro Metadata Versioning Policy

FAIRagro metadata versioning policy
03.11.2026, version 1.0

## Introduction
This document describes FAIRagros policy concerning the versioning processes of developed metadata resources and specifications. It is meant as documentation to make update processes transparent with clear responsibilities.

## Scope
The FAIRagro metadata versioning policy currently applies to the [Publication Metadata Set](https://knowledgebase.fairagro.net/en/tech-guides/core_metadata_specification/#2-publication-metadata-set) and [Agrischemas](https://knowledgebase.fairagro.net/en/tech-guides/core_metadata_specification/#3-agrischemas) which constitute FAIRagros [Core Metadata Specification](https://knowledgebase.fairagro.net/en/tech-guides/core_metadata_specification/). These types of resources (e.g. a specification) that is a part of FAIRagros bigger metadata framework are called metadata components in this policy. 

## Version numbers
Each metadata component follows its own release and versioning cycle. Updates and version number changes follow general [Semantic Versioning](https://semver.org/  ) principles and are adapted to application for a specification-type document instead of an API.

In general, updates to versions of metadata components come in three different types:

- Patch version Z (x.y.Z | x > 0) MUST be incremented if only backward compatible bug fixes are introduced. A bug fix is defined as an internal change that fixes incorrect behavior. (taken from https://semver.org/#spec-item-6)
- Minor version Y (x.Y.z | x > 0) MUST be incremented if new, backward compatible functionality is introduced to the metadata component. It MUST be incremented if any public implementation functionality is marked as deprecated. It MAY be incremented if substantial new functionality or improvements are introduced within the metadata component. It MAY include patch level changes. Patch version MUST be reset to 0 when minor version is incremented. (adapted from https://semver.org/#spec-item-7)
- Major version X (X.y.z | X > 0) MUST be incremented if any backward incompatible changes are introduced to the metadata component. It MAY also include minor and patch level changes. Patch and minor versions MUST be reset to 0 when major version is incremented. (adapted from https://semver.org/#spec-item-8)

Furthermore, released versions are unchangeable and persistent. Once a metadata component version has been released, the contents of that version MUST NOT be modified. Any modifications MUST be released as a new version. (taken from https://semver.org/#spec-item-3)

---
<!-- UPDATE information -->

# <small>Contributors</small>


For feedback contact Gabriel Schneider ([schneiderg@zbmed.de](mailto:schneiderg@zbmed.de){:target="_blank"}).

(*Last Update: 2026-11-03*)

---
#<small>How to cite this page?</small>
Schneider, G., Jung, J., Reinosch, N. & Martini, D. *et al.* (2026). *FAIRagro Metadata Versioning Policy*. FAIRagro Knowledge Base. [https://knowledgebase.fairagro.net/en/tech-guides/core_metadata_specification/archive/](https://knowledgebase.fairagro.net/en/tech-guides/core_metadata_specification/archive/). Under: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/){:target="_blank"}.  

[![CC BY Logo](../../../images/cc-by.png)](https://creativecommons.org/licenses/by/4.0/){:target="_blank"}
