# Wakanda SmartModel

**EXPERIMENTAL**

## About

This project is an attempt to get a smarter SSJS API to define Wakanda Datastore Models

Directions of this API:

* more jQuery/Angular like
* optimized for CommonJS modules
* lighter model files and faster to write
* intuitive and easy to understand
* provide almost all the Wakanda Model Designer automatic mechanisms
* even more Business Logic oriented

Additional future goals

* add/retrieve semantic informations
* add/retrieve informations currently not accessible via the Model API (extraProperties, global access)

## Experimental Expected API

**Note that the API is not definitive**

### Mono-file model

```javascript

require('smartModel')
  .$model(model)

    .$class('Group') // collection name set to GroupCollection & scope to public

      // an attribute named 'ID' of type uuid is created by default as primary key
      .$attr('name') // default: storage / string
      .$attr('contacts', 'Contacts') // will create a relatedEntities attribute once Contacts is found

    .$class('Contact', 'Contacts', 'private') // custom collection name & scope private

      .$primary('email', 'string') // a custom primary key attribute is created
      .$attr('name') // default: storage / string
      .$attr('mobile', 'string', {pattern: PHONE_REGEX}) // apply a pattern for expected values
      // an attribute named 'group' (default name based on class name) as automatically been created by 
      // the contact relationship with kind relatedEntity and className Group
      .$attr('groupName', 'group.name') // 'group.name' include a '.' and start by an attribute name -> alias
 
```


### Multi-file model - 1 file per DataClass

#### Model.js
To load indivudual DataClasses
```javascript
require('smartModel').$model(model, [
    'Model/Group',
    'Model/Contact'
]);

```
Or, to load all DataClasses from a folder
```javascript
require('smartModel').$model(model, ['Model']);

```

#### Modules/Model/index.js
OPTIONNAL (Only to be able to automatically load all DataClasses of the folder)
```javascript
  require('smartModel').$classes(module); 
```

#### Modules/Model/Group.js

```javascript
  require('smartModel').$class(module, 'Group') // collection name set to GroupCollection & scope to public

      // an attribute named 'ID' of type uuid is created by default as primary key
      .$attr('name') // default: storage / string
      .$attr('contacts', 'Contacts') // will create a relatedEntities attribute once Contacts is found
```

#### Modules/Model/Contact.js

```javascript
  require('smartModel').$class(module, 'Contact', 'Contacts', 'private') // custom collection name & scope private

      .$primary('email', 'string') // a custom primary key attribute is created
      .$attr('name') // default: storage / string
      .$attr('mobile', 'string', {pattern: PHONE_REGEX}) // apply a pattern for expected values
      .$attr('group', 'Group') // relatedEntity explicitely created for better understanding
      .$attr('groupName', 'group.name') // 'group.name' include a '.' and start by an attribute name -> alias
 
```

### Multi-file model - Multifile DataClass 


#### Modules/Model/Group/index.js
```javascript
require('smodel').$class(module, 'Group') // collection name set to GroupCollection & scope to public
// thanks to module.id, attributes defined in modules from the same folder are assigned to the dataClass
```
#### Modules/Model/Group/name.js
```javascript
var NB_MS_IN_YEAR = 1000 * 60 * 60 * 24 * 365.25;

// calculated attribute
require('smartModel').$attr(module, 'age', '@number', {
    get: function get(){
        return Math.floor((Date.now() - this.birthdate.getTime()) / NB_MS_IN_YEAR);
    },
    sort: function sort(order) {
        order = order || 'asc';
        order = order === 'asc' ? 'desc' : 'asc';
        return 'birthdate ' + order;
    }
}) 
