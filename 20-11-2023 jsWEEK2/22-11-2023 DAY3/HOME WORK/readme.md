**String
The String object is used to represent and manipulate a sequence of characters.

Description
Strings are useful for holding data that can be represented in text form. Some of the most-used operations on strings are to check their length, to build and concatenate them using the + and += string operators, checking for the existence or location of substrings with the indexOf() method, or extracting substrings with the substring() method.

Creating strings
Strings can be created as primitives, from string literals, or as objects, using the String() constructor:

JS

const string1 = "A string primitive";
const string2 = 'Also a string primitive';
const string3 = `Yet another string primitive`;
JS

const string4 = new String("A String object");
String primitives and string objects share many behaviors, but have other important differences and caveats. See "String primitives and String objects" below.

String literals can be specified using single or double quotes, which are treated identically, or using the backtick character `. This last form specifies a template literal: with this form you can interpolate expressions. For more information on the syntax of string literals, see lexical grammar.

Character access
There are two ways to access an individual character in a string. The first is the charAt() method:

JS

"cat".charAt(1); // gives value "a"
The other way is to treat the string as an array-like object, where individual characters correspond to a numerical index:

JS

"cat"[1]; // gives value "a"
When using bracket notation for character access, attempting to delete or assign a value to these properties will not succeed. The properties involved are neither writable nor configurable. (See Object.defineProperty() for more information.)