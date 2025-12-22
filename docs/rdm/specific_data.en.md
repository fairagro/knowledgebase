# What data types exist in agrosystem science?

!!! tip inline end "Data Fact Sheets"
	Schmidt *et al.* (2023): [**DATA FACT SHEETS of the Data Steward Service Center (DSSC) from the NFDI consortium FAIRagro**](https://doi.org/10.4126/FRL01-006461782){:target="_blank"}

You can find a short overview of relevant data types within the agrosystem science and their special features in RDM here in our knowledgebase and in our [Data Fact Sheets](https://doi.org/10.4126/FRL01-006461782){:target="_blank"}[^1].
Special attention is paid to the question: *What do I have to consider when collecting and publishing data - including the legal perspective?*
The knowledgebase also includes an [overview of the legal categorisation of data](../legal/index.md).

[^1]: Schmidt, M., Beyer, F., Mazón, E. R., Sahwan, W., Singson, L., Vedder, L., Boße, S., & Svoboda, N. (2023). **DATA FACT SHEETS of the Data Steward Service Center (DSSC) from the NFDI consortium FAIRagro**. PUBLISSO. [https://doi.org/10.4126/FRL01-006461782](https://doi.org/10.4126/FRL01-006461782){:target="_blank"}


## Types of Data

### Soil Data
Soils are not only the basis for plant growth and therefore essential for long-term food security, but also archives of natural and climate history.
Soil data such as soil type (grain size), nutrient concentrations, bulk density and water content are often not collected independently, but in conjunction with other landscape ecological data, such as meteorological, microbiological or plant physiological data.
When soil data comes from field experiments, it always has a spatial reference (geodata).
It is also important to describe them throughout their depth, as profiles or in dedicated depth levels.
There are numerous national and international standards for describing soils and their profiles: e.g. German systematics,
[WRB](https://www.fao.org/soils-portal/data-hub/soil-classification/world-reference-base/en/){:target="_blank"},
[USDA](https://www.nrcs.usda.gov/resources/guides-and-instructions/soil-classification){:target="_blank"}. 
\[Schmidt *et al.* 2023, p. 3\][^1]

#### Specifics in research data management
A variety of different methods are used to collect soil data.
When describing the data (metadata), it is therefore important for reproducibility and comparability to specify the method and analytical device used.
One challenge is that significant amounts of data has not yet been digitized.
\[ibid.\]

#### Legal Aspects
According to current case law, databases containing soil data may also be protected for those collecting the data under the provisions of Section 87a et seq. of the German Copyright Act (UrhG). 
This is essentially based on the fact that a measurement is understood as ‘procurement’ within the meaning of Section 87a UrhG.
However, changes could result from the data regulation.
These have not yet found their way into case law, however.
In addition, protection may arise based on the degree of processing of the data.

Depending on the circumstances, georeferenced data *may* also constitute personal data.
However, whether this is the case can only be determined on a case-by-case basis.

Details can be found in the [Overview of rights to data](../legal/rights.md).
The [FAIRagro Helpdesk](https://fairagro.net/en/helpdesk){:target="_blank"} can assist in individual cases.


### General Field Data
General field data is generated in many agricultural field experiments. They include information about the business and the crops sown (e.g. variety, sowing date, yield, crop protection treatments, fertilization, etc.).
The anonymization or pseudonymization of operational data often plays a role.
Often, general field data is not collected separately, but as comparative data within field studies.
In this context, [long-term field experiments](#lte) (LTE) offer sustainable monitoring of soil and plant properties under changing climatic conditions and management methods.
LTE data therefore represents an important agricultural data treasure, which is based, among other things, on general field data.
This treasure should be carefully published, for example to promote understanding of the effects of climate change and to develop solutions for sustainable land management.
\[Schmidt *et al.* 2023, p. 4\][^1]

#### Specifics in research data management
The metadata should generally be based on the question of the actual field study/field experiment.
Nevertheless, the presence of general field data in the data set should be noted, which could also be of interest for further studies.
\[ibid.\]

#### Legal Aspects
According to current case law, databases containing field data may also be protected for those collecting the data under the provisions of Section 87a et seq. of the German Copyright Act (UrhG). 
This is essentially based on the fact that a measurement is understood as ‘procurement’ within the meaning of Section 87a UrhG.
However, changes could result from the data regulation.
These have not yet found their way into case law, however.
In addition, protection may arise based on the degree of processing of the data.

Depending on the circumstances, georeferenced data *may* also constitute personal data.
However, whether this is the case can only be determined on a case-by-case basis.
The same applies to information about the respective farm in the field data.

Details can be found in the [Overview of rights to data](../legal/rights.md).
The [FAIRagro Helpdesk](https://fairagro.net/en/helpdesk){:target="_blank"} can assist in individual cases.


### Genetic Data (“omics data”)
Genetic methods are standard in many areas of life science research.
In the area of crop research, for example, genetic studies are increasingly being carried out on maize or barley, for example.
These studies often focus on connections between different genotypes (genetic variety characteristics) and their respective phenotypes, the expression of these characteristics under the given environmental influences.
Therefore, genetic data is often collected in conjunction with [phenotyping data](#phenotyping-data).
The tissue samples analyzed in these studies (e.g. leaf and/or root tissue) can come either directly from the laboratory (e.g. climate chamber) or from a test field.
Regardless, all studies in this area generate large amounts of so-called “omics” data, usually through sequencing the samples.
These sequences are usually not only compared with each other, but also with so-called reference genomes.
\[Schmidt *et al.* 2023, p. 5\][^1]

#### Specifics in research data management
For almost all crops, in addition to the species, a variety, breeding line or variation is distinguished. This should be included in the metadata.
It is often interesting to establish a connection between phenotype and genotype.
\[ibid.\]

#### Legal Aspects
According to current case law, databases containing “omics data” may also be protected for those collecting the data under the provisions of Section 87a et seq. of the German Copyright Act (UrhG). 
This is essentially based on the fact that a measurement is understood as ‘procurement’ within the meaning of Section 87a UrhG.
However, changes could result from the data regulation.
These have not yet found their way into case law, however.
In addition, protection may arise based on the degree of processing of the data.

If the data includes images, these may be protected as photographs under Section 72 UrhG.
This protection is similar in many respects to copyright law.

Details can be found in the [Overview of rights to data](../legal/rights.md).
The [FAIRagro Helpdesk](https://fairagro.net/en/helpdesk){:target="_blank"} can assist in individual cases.


### Phenotyping Data
Phenotyping data is crucial for understanding plant biology, improving crops, and agricultural practices.
They allow researchers to identify genetic factors associated with desirable traits, study the effects of environmental factors on plant growth and development, optimize crop management strategies, and develop new varieties with improved traits.
Standardization and proper documentation of phenotyping data, as advocated by initiatives such as [MIAPPE](https://www.miappe.org/), is important to ensure data integrity, reproducibility and compatibility between different scientific studies.
This facilitates data sharing, collaboration, and development of large-scale databases and repositories for plant phenotyping research.
\[Schmidt *et al.* 2023, p. 6\][^1]

#### Specifics in research data management
It is often interesting to establish a connection between phenotype and genotype.
\[ibid.\]

#### Legal Aspects
According to current case law, databases containing phenotyping data may also be protected for those collecting the data under the provisions of Section 87a et seq. of the German Copyright Act (UrhG). 
This is essentially based on the fact that a measurement is understood as ‘procurement’ within the meaning of Section 87a UrhG.
However, changes could result from the data regulation.
These have not yet found their way into case law, however.
In addition, protection may arise based on the degree of processing of the data.

If the data includes images, these may be protected as photographs under Section 72 UrhG.
This protection is similar in many respects to copyright law.

Details can be found in the [Overview of rights to data](../legal/rights.md).
The [FAIRagro Helpdesk](https://fairagro.net/en/helpdesk){:target="_blank"} can assist in individual cases.


### Field robotics & sensor data
In the non-invasive collection of phenotypic, i.e. externally measurable, parameters in field experiments, field robots and drones are increasingly being used in research.
These can collect measured values automatically using built-in sensors.
Data can be collected that is then evaluated on the computer, as well as data that is automatically processed directly and results in customized applications (e.g. plant-specific fertilization or removal of weeds) (Farming 4.0).
Like many agricultural system data, sensor data usually has direct georeferencing.
This can be used for navigation by the robot as well as allowing data to be located in an overview map.
In addition to the georeferences of the recorded data (GPS position), map information is often available in the form of so-called shape files.
When measuring on a large scale, so-called [Big Geodata](#big-geodata) can arise simply due to the amount of data.
\[Schmidt *et al.* 2023, p. 7\][^1]

#### Specifics in research data management
In addition to the information about the culture examined, details about the sensors used and the type of data obtained as well as units and quality control should always be provided.
\[ibid.\]

#### Legal Aspects
According to current case law, databases containing data collected by field robotics and sensor data may also be protected for those collecting the data under the provisions of Section 87a et seq. of the German Copyright Act (UrhG). 
This is essentially based on the fact that a measurement is understood as ‘procurement’ within the meaning of Section 87a UrhG.
However, changes could result from the data regulation.
These have not yet found their way into case law, however.
In addition, protection may arise based on the degree of processing of the data.

If the data includes images, these may be protected as photographs under Section 72 UrhG.
This protection is similar in many respects to copyright law.

Depending on the circumstances, georeferenced data *may* also constitute personal data.
However, whether this is the case can only be determined on a case-by-case basis.

Details can be found in the [Overview of rights to data](../legal/rights.md).
The [FAIRagro Helpdesk](https://fairagro.net/en/helpdesk){:target="_blank"} can assist in individual cases.


### Big GeoData
Geodata is information about physical objects to which a spatial reference (e.g. coordinates) is attached.
This information can be points, lines and areas in the form of measurements in the terrain, which are referred to as geo-vector data, as well as imaging measurements from sensor and camera systems in the terrain, from the air and from space, which are referred to as geo-raster data.
Globally, the “flood” of geodata now reaches several tens of petabytes (1 PB = 1,000 TB = 1 million GB), with the ingestion rate of hundreds of terabytes increasing daily.
They are recorded by a huge variety of different sensors with different spatiotemporal scales.
In order to be able to process the mass of data, new concepts for storage (central clouds, decentralized backups, new geodata management systems, ...) and processing (scalable architectures, distributed computing, efficient algorithms, ...) are needed.
Scalable architectures mean adaptable, mostly cloud-based systems in which additional resources (processor cores, RAM) can be allocated depending on requirements, or the load requirements can be distributed across different systems.
This requires geodata infrastructures that connect the various technologies with standardized interfaces.
Based on the different geodata, long-term monitoring can be carried out in the agricultural landscape, the changes on the land surface can be tracked and documented.
\[Schmidt *et al.* 2023, p. 8\][^1]

#### Specifics in research data management
Continuously accumulating geodata and modern, complex evaluation methods pose new challenges, especially with regard to the processing of the data.
Cloud computing is one of the solutions in which data can be stored on networked central servers and processed quickly and fully automatic.
To ensure that geodata is FAIR, it is entered and stored in special software environments according to established metadata standards.
In addition to cloud-based infrastructures, there are modern geodata management systems (DataCube technology, GeoNode, etc.), which serve to make data discoverable and accessible.
On the other hand, the data and the products produced from it are documented according to metadata standards (ISO19115, INSPIRE, Dublin Core ...).
\[ibid.\]

#### Legal Aspects
According to current case law, databases that form part of big geodata may also be protected for those collecting the data under the provisions of Section 87a et seq. of the German Copyright Act (UrhG).
This is essentially based on the fact that a measurement is understood as ‘procurement’ within the meaning of Section 87a UrhG.
However, changes could result from the data regulation.
These have not yet found their way into case law, however.
In addition, protection may arise based on the degree of processing of the data.

If the data includes images, these may be protected as photographs under Section 72 UrhG.
This protection is similar in many respects to copyright law.

Depending on the circumstances, georeferenced data *may* also constitute personal data.
However, whether this is the case can only be determined on a case-by-case basis.

Details can be found in the [Overview of rights to data](../legal/rights.md).
The [FAIRagro Helpdesk](https://fairagro.net/en/helpdesk){:target="_blank"} can assist in individual cases.



## Special features

### Long-term field experiments (LTE) {#lte}
Many experiments in the context of crop science extend over a complete cycle consisting of sowing, plant growth (incl. treatments) and harvest.
In the field, such experiments are always dependent on the site conditions, both in terms of soil and in terms of weather and climate.
The relevant parameters are therefore usually collected as part of the [general field data](#general-field-data).  
In long-term field experiments, the same or similar experiments are carried out at the same location over many years and all variables are recorded consistently.
Therefore, they provide a sustainable monitoring of soil and plant properties under changing climatic conditions and management methods.
LTE data represent an important agricultural data treasure that should be carefully publicised.
(cf. Schmidt *et al.* 2023, p. 4)[^1]

The [LTE overview map](https://tools.bonares.de/ltfe/){:target="_blank"} from BonaRes[^2] provides a good overview of already published long-term field experiments in Europe.
Data from more than 570 agricultural experiments with a duration of at least 20 years each are collected there.

#### Specifics in research data management
The specific features of RDM are essentially derived from the concrete data collected 
(see the relevant sections on topics such as [soil data](#soil-data) or [phenotyping data](#phenotyping-data)).
In addition, there is the [general field data](#general-field-data) to be recorded, some of which must be collected annually (e.g. sowing date) and some of which remains the same (e.g. location).
Clear documentation, especially of the data structure, is therefore recommended.

#### Legal Aspects
According to current case law, databases containing data from long-term field experiments may also be protected for those collecting the data under the provisions of Section 87a et seq. of the German Copyright Act (UrhG).
This is essentially based on the fact that a measurement is understood as ‘procurement’ within the meaning of Section 87a UrhG.
However, changes could result from the data regulation.
These have not yet found their way into case law, however.
In addition, protection may arise based on the degree of processing of the data.

If the data includes images, these may be protected as photographs under Section 72 UrhG.
This protection is similar in many respects to copyright law.

Depending on the circumstances, georeferenced data *may* also constitute personal data.
However, whether this is the case can only be determined on a case-by-case basis.

Details can be found in the [Overview of rights to data](../legal/rights.md).
The [FAIRagro Helpdesk](https://fairagro.net/en/helpdesk){:target="_blank"} can assist in individual cases.


[^2]: BonaRes Repository. [https://doi.org/10.25504/FAIRsharing.2cw3HU](https://doi.org/10.25504/FAIRsharing.2cw3HU){:target="_blank"}



---
# <small>Contributors</small>
:fontawesome-solid-user: Lucia Vedder [![ORCID icon](../images/ORCID-iD_icon_16x16.png)](https://orcid.org/0000-0002-8924-9800){:target="_blank"},
:fontawesome-solid-user: Marcus Schmidt [![ORCID icon](../images/ORCID-iD_icon_16x16.png)](https://orcid.org/0000-0002-5546-5521){:target="_blank"}

(*Last Update: 2025-09-11*)

---
#<small>How to cite this page?</small>
Vedder, L. & Schmidt, M. (2025). *Agriculture-specific Data*. FARagro Knowledge Base. [https://knowledgebase.fairagro.net/en/rdm/specific_data/](https://knowledgebase.fairagro.net/en/rdm/specific_data/). Under: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/){:target="_blank"}.  

[![CC BY Logo](../images/cc-by.png)](https://creativecommons.org/licenses/by/4.0/){:target="_blank"}
