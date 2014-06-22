# Wakanda SmartClass

**EXPERIMENTAL**

## About

This project is an attempt to get a smarter SSJS API to define Wakanda Datastore Models

Directions of this API:

* more jQuery/Angular like
* optimized for CommonJS modules
* lighter model files and faster to write
* intuitive and easy to understand
* even more Business Logic oriented

Additional future goals

* add/retrieve semantic informations
* add/retrieve informations currently not accessible via the Model API (extraProperties, global access)

## Example

**Note that the API is not definitive**

```javascript

require('smodel')
  .$class(module, 'Contact', 'Contacts', 'public'),

  .$primary('ID'), // default: uuid / mandatory / auto-generate 
  .$attr('name'), // default: storage / string
  .$attr('mobile'), // default: storage / string
  .$attr('group', 'Group'), // Group is a DataClass singular name -> relatedEntity / Group / Group
  .$attr('groupName', 'group.name') // 'group.name' include a '.' and start by an attribute -> alias

```