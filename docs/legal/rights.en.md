# What rights exist in terms of data?

The rights that apply to data depend on the **type of data**, but also on the **degree of processing**.
Legal peculiarities for each type of data are listed in the article on [agriculture-specific data](../rdm/specific_data.md) under the heading “Legal classification”.

Here, however, you will find a **general introduction** to data rights. 
A distinction is made between different “levels of processing” of data: raw data, annotated data and compiled data.

Basically, the following can be summarised:  
*Measurement data is usually not protected. However, recordings and annotations of measurement data may be protected. Often, the case depends on the specific situation.*


## Levels of Processing

The different types of data can be processed to different degrees.
The following distinctions can be made: raw data, annotated data and compiled data.

### Raw Data

Raw data are data that have been recorded “as is” and have not been further processed.

### Annotated Data

“Annotated data” refers to data that has been labeled by humans.
This gives it additional information.
Examples of annotating data include marking plants in images, providing headings for (legal) norms, or assessing whether a statement in a survey is legally correct.

Depending on the type of annotation, the labels assigned by the annotators may differ significantly from one another.
These differences can, to some extent, be attributed to the subjectivity of the assignments.[^1]

### Compiled Data

Compiled data refers to datasets that have been compiled according to a specific criterion (e.g. representativeness).


## Overview of Data Rights

### Copyright

Protection as a work under the UrhG (Urheberrechtsgesetz, German Copyright Act) requires at least a personal creative act. The work must meet the so-called *“creative threshold”* (§ 2 Abs. 2 UrhG, for database works § 4 UrhG).
A personal creative act exists if the work is based on a human-creative activity.[^2]
As long as a machine is used just as an aid, such a creative act may be possible if a human has shaping influence.[^3]

At least individual data is acquired according to (specialized) specifications, so that the researcher has no sufficient creative leeway.
Consequently, the requirements of § 2 (2) and § 4 UrhG are not met to justify copyright protection.[^4]

The concept of computer programs does not entail protection of the data resulting from their use.
These data are generally not created by the program itself or rather not “contained” in the program.[^5]

#### Raw Data

Due to lack of creativity, raw data are not protected by copyright.

#### Annotated Data

Depending on the kind of label used for annotation the annotators have more or less leeway regarding their decisions.
In this context the [subjectivity of annotations](#annotated-data) can play a role,
as the UrhG is protecting this subjectivity.[^6]
There does not need to be much subjectivity[^7], so that annotations could be copyrightable.

Whether such protection is given can only be answered in individual cases.
When assessing this, the [FAIRagro Helpdesk](https://fairagro.net/en/helpdesk/) can support.

#### Compiled Data

Through the compilation and curation of data, copyright protection may arise.[^8]

Whether such protection is given can only be answered in individual cases.
When assessing this, the [FAIRagro Helpdesk](https://fairagro.net/en/helpdesk/) can support.


### Database protection, §§ 87a-87e UrhG {#database-protection}

A dataset may also be protected as a database by §§ 87a--87e UrhG. 
This is a protection for invested work, as it does not depend on the creative activity of a person, but on the investment and work. 
Therefore, the rights of ownership do not depend on the creator of the work, but on the database manufacturer.
A further difference from copyright is that the database manufacturer only has exclusive rights to reproduce the *essential* parts of the database.
This implies that any person may reproduce non-essential parts, in addition to the exceptions in § 87c UrhG.

For a dataset to be considered a database protected under §§ 87a UrhG, it must meet five conditions:
It must consist of a collection of works, data, or other independent elements;
these elements must be systematically or methodically arranged; they must be individually accessible through electronic means or in another way;
and finally, the acquisition, verification, or presentation must represent a significant investment.

The concept of a “collection” within the meaning of § 87a UrhG is the compilation of numerous elements.[^9]

Independent elements within the meaning of § 87a UrhG exist, if the elements can be extracted from the database and still retain a sufficient informational value.[^10] 
Whether such informational value exists is to be assessed from the perspective of a interested third party.[^11]
It is sufficient if anyone can do something with the extracted elements.
While this may not apply to a single date, it may apply to data segments of sufficient length.

The arrangement is systematic if the collection itself is organized according to a system, a classification or a structured order.[^12]
The arrangement is methodically if the collection itself follows a specific ordering instruction or plan.[^13]
In the case of electronic databases, this is mainly about searchability, which requires data processing with ordering criteria.[^14]

Access to individual elements is considered possible if the collection includes a suitable access system, such as a query system or an index that enables individual access.[^15]
Such an index could be a table of contents, for example.

A substantial investment within the meaning of § 87a UrhG must firstly relate to the acquisition, verification, or presentation of the elements.
This means that not every investment in connection with the database can be considered.
In particular, the generation of data is not covered, but only the subsequent steps, since it is the database and not the data that is protected.[^16]

Secondly, there must be an investment and it must be substantial.
Investments are not only financial expenses, but also any investment of time, labour, and energy.[^17]
The investment is substantial if it is not entirely insignificant and could not be easily made by anyone.[^18]
In most cases, however, machine-generated data is produced “incidentally”, so that there is no corresponding investment.[^19]

#### Raw data

Raw data as merely unordered records does not meet the requirements for systematic or methodical arrangement, so that it cannot be regarded as a database within the meaning of § 87a UrhG.

#### Annotated data

Annotated data does not necessarily have to be arranged, as data is “only” enriched without changing its arrangement.

Whether such protection is provided can only be answered on a case-by-case basis.
The [FAIRagro Helpdesk](https://fairagro.net/en/helpdesk/) can assist with the assessment.

#### Compiled data

Compiled data is likely to be protected under §§ 87a ff. UrhG.

Whether such protection applies can only be determined on a case-by-case basis.
The [FAIRagro Helpdesk](https://fairagro.net/en/helpdesk/) can assist with the assessment.


### Protection of Photographs, § 72 UrhG {#protection-of-photographs}

Even without the necessary level of creativity, photographs may be protected under § 72 UrhG.
The prerequisite for this is, on the one hand, the creation of an “original image” by depicting something.
In other words, mere reproduction, for example by means of a copy, is not sufficient.[^20]
On the other hand, the creation must require a minimum level of skill, which may lie, for example, in the operation of the respective device.[^21]
This means that automated recordings are not necessarily excluded from the protection.[^22]

The scope of protection largely corresponds to “normal” copyright law.[^23]

Whether such protection is granted can only be answered on a case-by-case basis.
The [FAIRagro Helpdesk](https://fairagro.net/en/helpdesk/) can assist with the assessment.


### Patent Law 

Protection under patent law, according to § 1 (1) PatG (Patentgesetz, German Patent Act), is contingent on the patentability of the subject matter of the (pursued) patent.
This would require an invention to exist first.
Although there is no fixed definition of an invention; rather, it changes over time with the changing state of science and technology.[^24]
However, a technical teaching is now considered a necessary, if not sufficient, component of the invention.
This means that a technician can repeatedly solve a problem using the patent and work accordingly.[^25]

Data as such do not constitute an instruction for solving a problem, but merely represent reality.
Therefore, data are not patentable due to the absence of a technical teaching.[^26]


### Trade Secret Law, §§ 1 ff. GeschGehG {#trade-secret-law}

Trade secret protection is not based on the data structure, but on the underlying information.
This information must be secret, have an economic value and appropriate confidentiality measures must be taken and a legitimate interest in confidentiality must exist.
Finally, it is disputed whether the information must be company-related.

According to § 2 No. 1 lit. a GeschGehG (Geschäftsgeheimnisgesetz, German Trade Secret Act), information is secret if it is not in general knowledge or readily accessible to people in the circles who normally deal with this type of information. 

This is certainly the case if all components are unknown to others.[^27]
A data collection is also secret in this sense if the individual data is publicly accessible, but the structure is not.[^28]
This does not apply if the data can be created at any time without great effort from generally accessible sources.[^29]
Information is also secret if it is only known to persons who are bound to confidentiality, even if this involves many persons.[^30]

Confidentiality ceases to apply if the information is disclosed without sufficient confidentiality agreements or protective measures being in place.[^31]
This does not apply if the information is published unlawfully.
Otherwise, the protection provided by the GeschGehG would be undermined.[^32]

Economic value exists if commercial use of the data is possible, even if only because of the secrecy of the data.[^33]
A potential value that is only realised through evaluation is sufficient.[^34]



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

[^7]: BGH, GRUR, 1991, 529 (530), - Explosionszeichnungen - ; OLG
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
# <small>Contributors</small>
:fontawesome-solid-user: Constantin Breß [![ORCID icon](../images/ORCID-iD_icon_16x16.png)](https://orcid.org/0000-0002-2133-1541){:target="_blank"}

(*Last Update: 2025-09-25*)

---
#<small>How to cite this page?</small>
Breß, C. (2025). *Data Rights*. FARagro Knowledge Base. [https://knowledgebase.fairagro.net/en/legal/rights](https://knowledgebase.fairagro.net/en/legal/rights). Unter: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/){:target="_blank"}.  

[![CC BY Logo](../images/cc-by.png)](https://creativecommons.org/licenses/by/4.0/){:target="_blank"}
