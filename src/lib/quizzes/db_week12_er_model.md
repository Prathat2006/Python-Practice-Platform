### Week 12: Entity Relationship Model

**Question 1**
Which symbol represents an entity set in an ER diagram?
A. Diamond
B. Rectangle
C. Ellipse
D. Triangle

**Answer:** B
**Explanation:** Rectangles in an Entity-Relationship (ER) diagram represent entity sets (collections of similar entities).

---

**Question 2**
Which ER component represents attributes?
A. Rectangle
B. Diamond
C. Ellipse
D. Arrow

**Answer:** C
**Explanation:** Ellipses in an ER diagram represent attributes, which are the properties of an entity set or relationship set.

---

**Question 3**
A derived attribute is represented using:
A. Double rectangle
B. Dashed ellipse
C. Double ellipse
D. Double diamond

**Answer:** B
**Explanation:** Derived attributes (attributes whose values can be computed from other related attributes, like Age from Date of Birth) are represented using dashed ellipses.

---

**Question 4**
Which of the following is an example of a multivalued attribute?
A. Age
B. Roll number
C. Phone numbers
D. Date of birth

**Answer:** C
**Explanation:** A multivalued attribute can have more than one value for a specific entity. An individual can have multiple phone numbers, making it multivalued.

---

**Question 5**
An entity is:
A. A relationship between tables
B. An object distinguishable from others
C. A database constraint
D. A schema diagram

**Answer:** B
**Explanation:** An entity is an object or thing in the real world that is distinguishable from all other objects (e.g., a specific person, department, or book).

---

**Question 6**
A collection of entities of the same type is called:
A. Relation
B. Attribute set
C. Entity set
D. Domain

**Answer:** C
**Explanation:** An entity set is a collection or set of entities of the same type that share the same properties or attributes.

---

**Question 7**
Which attribute type can be divided into smaller subparts?
A. Derived
B. Multivalued
C. Composite
D. Single-valued

**Answer:** C
**Explanation:** Composite attributes can be divided into subparts or smaller independent attributes (e.g., a Name attribute can be split into First Name, Middle Name, and Last Name).

---

**Question 8**
Which of the following is a derived attribute?
A. Name
B. Address
C. Age from DOB
D. Phone number

**Answer:** C
**Explanation:** Age is a derived attribute because it can be calculated dynamically from the current date and the stored Date of Birth (DOB) attribute.

---

**Question 9**
The set of permitted values for an attribute is called:
A. Entity set
B. Domain
C. Schema
D. Key set

**Answer:** B
**Explanation:** The domain (or value set) of an attribute defines the set of all permitted values that can be assigned to it.

---

**Question 10**
Which ER symbol is used for a weak entity?
A. Double ellipse
B. Double rectangle
C. Double line
D. Dashed rectangle

**Answer:** B
**Explanation:** A weak entity set—which does not have a primary key of its own and depends on an identifying strong entity set—is depicted using a double rectangle.

---

**Question 11**
A weak entity depends on:
A. Attribute
B. Relationship set
C. Strong entity
D. Derived attribute

**Answer:** C
**Explanation:** A weak entity set cannot exist or be uniquely identified without a corresponding identifying relationship set with a strong (owner) entity set.

---

**Question 12**
The identifying relationship of a weak entity is shown using:
A. Dashed ellipse
B. Double diamond
C. Double rectangle
D. Thick line

**Answer:** B
**Explanation:** The relationship linking a weak entity set to its identifying strong entity set is represented as a double diamond.

---

**Question 13**
A relationship among three entity sets is called:
A. Unary relationship
B. Binary relationship
C. Ternary relationship
D. Recursive relationship

**Answer:** C
**Explanation:** A ternary relationship is a relationship set that involves three distinct entity sets.

---

**Question 14**
In ER modeling, “manager” and “worker” are examples of:
A. Entities
B. Attributes
C. Roles
D. Domains

**Answer:** C
**Explanation:** Roles are the labels placed on the lines connecting an entity set to a relationship set, indicating the function or role that each entity plays in the relationship.

---

**Question 15**
Which mapping cardinality allows one entity in A to relate to many entities in B?
A. One-to-one
B. Many-to-many
C. One-to-many
D. Many-to-one

**Answer:** C
**Explanation:** In a one-to-many mapping, an entity in A can be associated with any number of entities in B, while an entity in B can be associated with at most one entity in A.

---

**Question 16**
In a many-to-many relationship:
A. One entity maps to exactly one entity
B. One side must be weak
C. Multiple entities from both sides can be associated
D. Only total participation is allowed

**Answer:** C
**Explanation:** A many-to-many (M:N) cardinality mapping allows an entity in A to be associated with any number of entities in B, and an entity in B to be associated with any number of entities in A.

---

**Question 17**
Underlined attributes in ER diagrams represent:
A. Derived attributes
B. Composite attributes
C. Primary keys
D. Foreign keys

**Answer:** C
**Explanation:** To indicate a primary key attribute, its name is underlined inside the ellipse in the ER schema.

---

**Question 18**
Which of the following is NOT an ER diagram component?
A. Rectangle
B. Diamond
C. Ellipse
D. Hexagon

**Answer:** D
**Explanation:** Hexagons are not used in standard Entity-Relationship (ER) notations (only rectangles, diamonds, ellipses, lines, and triangles for ISA hierarchies).

---

**Question 19**
The relationship set borrower between customer and loan is an example of:
A. Attribute mapping
B. Entity specialization
C. Association among entities
D. Weak entity

**Answer:** C
**Explanation:** A relationship set in ER design constitutes an association among several entities.

---

**Question 20**
Which statement about weak entities is TRUE?
A. They exist independently
B. They have no attributes
C. They depend on identifying entities
D. They cannot participate in relationships

**Answer:** C
**Explanation:** Weak entity sets have dependent existence, requiring an identifying relationship with a strong owner entity set.

---

**Question 21**
Which attribute is most likely composite?
A. Salary
B. Address
C. Age
D. Gender

**Answer:** B
**Explanation:** Address is standardly modeled as a composite attribute since it is divisible into components like Street, City, State, and Zip Code.

---

**Question 22**
Which cardinality means “at most one”?
A. Many
B. Directed line toward entity set
C. Double ellipse
D. Dashed line

**Answer:** B
**Explanation:** In the standard model, a directed line (with an arrow) pointing toward an entity set means "one" or "at most one" participation on that side of the relationship.

---

**Question 23**
An ER diagram mainly helps in:
A. Physical storage optimization
B. Conceptual database design
C. Machine learning
D. Transaction recovery

**Answer:** B
**Explanation:** The ER model provides a rich set of constructs to map real-world scenarios into a high-level conceptual schema to guide database design.

---

**Question 24**
Which relationship type is most useful for describing binary relationship sets?
A. Recursive
B. Cardinality mapping
C. Aggregation
D. Normalization

**Answer:** B
**Explanation:** Cardinality mapping limits are highly useful to specify how many entities can relate to each other on either side of a binary relationship set.

---

**Question 25**
A weak entity must participate in:
A. Partial participation only
B. Total participation in identifying relationship
C. No relationships
D. Recursive relationships only

**Answer:** B
**Explanation:** Because its existence depends on an identifying strong entity set, a weak entity set must have total participation in its identifying relationship set.

---

### Section B: Multiple-Select Questions

**Question 26**
Which of the following are attribute types? (Select all that apply)
A. Composite
B. Multivalued
C. Derived
D. Recursive

**Answer:** A, B, C
**Explanation:** Standard attributes in ER modeling can be classified as simple, composite (A), single-valued, multivalued (B), or derived (C). Recursive refers to a relationship type, not an attribute type.

---

**Question 27**
Which symbols are correctly matched? (Select all that apply)
A. Rectangle → Entity set
B. Diamond → Relationship set
C. Ellipse → Attribute
D. Underline → Derived attribute

**Answer:** A, B, C
**Explanation:** In an ER diagram, entity sets are shown by rectangles (A), relationships by diamonds (B), and attributes by ellipses (C). An underline represents a primary key, not a derived attribute.

---

**Question 28**
Which can be composite attributes? (Select all that apply)
A. Name
B. Address
C. Age
D. Phone number

**Answer:** A, B
**Explanation:** Name (First Name, Last Name) and Address (Street, City, Zip) can be divided into smaller constituent parts, making them composite (A, B). Phone number is multivalued but not usually composite, and Age is derived and simple.

---

**Question 29**
Weak entities: (Select all that apply)
A. Are existence dependent
B. Require identifying relationships
C. Are represented by double rectangles
D. Exist independently

**Answer:** A, B, C
**Explanation:** Weak entities are existence-dependent on strong entities (A), require an identifying relationship represented by double diamonds (B), and are visually denoted by double rectangles (C).

---

**Question 30**
Which statements about relationships are TRUE? (Select all that apply)
A. Relationships associate entities
B. Relationship sets can involve more than two entities
C. Relationships cannot have attributes
D. Binary relationships are common

**Answer:** A, B, D
**Explanation:** A relationship is an association among several entities (A). Relationship sets can involve more than two entities, such as in ternary relationships (B). Relationship sets can indeed have descriptive attributes (C is false). Binary relationships are the most common in practice (D).

---

**Question 31**
Which are examples of cardinality mappings? (Select all that apply)
A. One-to-one
B. One-to-many
C. Many-to-one
D. Many-to-many

**Answer:** A, B, C, D
**Explanation:** Cardinality mapping specifies the number of entities to which another entity can be associated via a relationship set. All four options are valid mappings.

---

**Question 32**
Derived attributes: (Select all that apply)
A. Can be computed from other attributes
B. Are shown using dashed ellipses
C. Must always be stored physically
D. Example: age from DOB

**Answer:** A, B, D
**Explanation:** Derived attributes are computed from other data (A, D), shown with dashed ellipses (B), and do not need to be physically stored.

---

**Question 33**
Which statements about domains are TRUE? (Select all that apply)
A. Domain defines permitted values
B. Every attribute has a domain
C. Domains are relationship sets
D. Domain restricts valid attribute values

**Answer:** A, B, D
**Explanation:** A domain (or value set) restricts attribute values to a permitted group of values (A, B, D). They have nothing to do with relationship sets (C).

---

**Question 34**
Which may be multivalued attributes? (Select all that apply)
A. Skills
B. Phone numbers
C. Email IDs
D. Age

**Answer:** A, B, C
**Explanation:** An entity can possess multiple skills, phone numbers, or email addresses, making them multivalued attributes (A, B, C). Age is single-valued and derived.

---

**Question 35**
Which are characteristics of strong entities? (Select all that apply)
A. Independent existence
B. Do not depend on another entity
C. Must have identifying relationship
D. Are regular entities

**Answer:** A, B, D
**Explanation:** Strong entities (or regular entities) have independent existence (A) and do not require another entity set to be uniquely identified (B, D). Identifying relationships are only for weak entities.

---

**Question 36**
In ER diagrams, roles: (Select all that apply)
A. Clarify participation semantics
B. Are labels on connecting lines
C. Are mandatory always
D. Help distinguish repeated entity participation

**Answer:** A, B, D
**Explanation:** Roles describe the function of entities in a relationship (A) and are marked on connecting lines (B). They are essential to distinguish relative behaviors during recursive relationships (D), but are not mandatory in typical simple binary relationships (C).

---

**Question 37**
Which are valid ER concepts? (Select all that apply)
A. Entity
B. Relationship
C. Attribute
D. Transaction log

**Answer:** A, B, C
**Explanation:** The three core foundations of the ER model are Entities, Relationships, and Attributes (A, B, C). Transaction logs belong to recovery/concurrency engines, not the conceptual ER diagram.

---

**Question 38**
Which statements about one-to-many relationships are TRUE? (Select all that apply)
A. One entity may connect to several entities
B. Reverse side may connect to at most one entity
C. It is same as many-to-many
D. Common in databases

**Answer:** A, B, D
**Explanation:** In a 1:N mapping, one entity on the "one" side can connect to multiple on the "many" side (A), but entities on the "many" side can trace back to at most one entity on the "one" side (B, D). It is not the same as a many-to-many mapping (C).

---

**Question 39**
Which can appear in relationship sets? (Select all that apply)
A. Attributes
B. Entities
C. Roles
D. Cardinalities

**Answer:** A, B, C, D
**Explanation:** Relationship sets coordinate elements via associated entities (B), can have descriptive attributes of their own (A), have role indicators (C), and are structured with cardinality limits (D).

---

**Question 40**
ER diagrams are useful for: (Select all that apply)
A. Requirement analysis
B. Database conceptual design
C. Visual representation of data
D. CPU scheduling

**Answer:** A, B, C
**Explanation:** ER modeling is an essential visual and intellectual design paradigm utilized for requirement collection (A), high-level conceptual engineering (B), and data visualization (C). It is unrelated to scheduling task execution (D).

---

### Section C: Fill-in-the-Blank Questions

**Question 41**
Rectangles in ER diagrams represent __________ sets.
**Answer:** entity
**Explanation:** Rectangles visually represent entity sets.

---

**Question 42**
Diamonds represent __________ sets.
**Answer:** relationship
**Explanation:** Diamonds are the standard notation representing relationship sets.

---

**Question 43**
Double ellipses represent __________ attributes.
**Answer:** multivalued
**Explanation:** Double ellipses denote multivalued attributes that can hold several distinct values.

---

**Question 44**
Dashed ellipses represent __________ attributes.
**Answer:** derived
**Explanation:** Dashed ellipses represent derived attributes that are calculated from other database attributes.

---

**Question 45**
A weak entity is represented using a double __________.
**Answer:** rectangle
**Explanation:** A double rectangle represents a weak entity set.

---

**Question 46**
The set of allowed values for an attribute is called its __________.
**Answer:** domain
**Explanation:** The domain represents the restricted value space allowed for any given attribute.

---

**Question 47**
A relationship among three entities is called a __________ relationship.
**Answer:** ternary
**Explanation:** A relationship connecting three entity sets is named a ternary relationship.

---

**Question 48**
Underlined attributes usually denote the __________ key.
**Answer:** primary
**Explanation:** Underlining the names of attributes indicates that they form the primary key of the entity set.

---

**Question 49**
A weak entity depends on a __________ entity for existence.
**Answer:** strong
**Explanation:** A weak entity set is existentially dependent on a strong owner entity set.

---

**Question 50**
One-to-many, many-to-one, and many-to-many are examples of mapping __________.
**Answer:** cardinalities
**Explanation:** These are different mapping cardinalities specifying connectivity bounds.
