/**
 * @module smodel
 **/


/**
 * @method $model
 * @param {Object} model
 * @param {Array} dataClasses
 * @param {string} scope
 * @return SmartModel
 **/
exports.$model = function $model(model, dataclasses, scope) {
    return new this.SmartModel(model, dataclasses, scope); 
};

/**
 * @property SmartModel
 * @type Function
 **/
exports.SmartModel = null;


/**
 * @method $class
 * @param {Object} module
 * @param {string} entityName
 * @param {string} collectionName
 * @param {string} scope
 * @return SmartClass
 **/
exports.$class = function $class(module, entityName, collectionName, scope) {
};


/**
 * @property SmartClass
 * @type Function
 **/
exports.SmartClass = null;


/**
 * @method $attr
 * @param {string} name
 * @param {string} param type or Class or Path
 * @param {Object} options
 * @return SmartAttribute
 **/
exports.$attr = function $attr(name, param, options) {
};


/**
 * @property SmartAttribute
 * @type Function
 **/
exports.SmartAttribute = null;




/*** SMART CLASSES DEFINITIONS ***/


/**
 * @class SmartModel
 * @constructor
 * @param {Object} model
 * @param {Array} dataClasses
 * @param {Object} options
 **/
exports.SmartModel = function SmartModel(model, dataclasses, options) {
};


/**
 * @method $class
 * @param {string} entityName
 * @param {string} collectionName
 * @param {string} scope
 * @param {Object} options
 * @return SmartClass
 **/
exports.SmartModel.prototype.$class = function $class(entityName, collectionName, scope, options) {
};


/**
 * @class SmartClass
 * @constructor
 * @param {Object} module
 * @param {string} entityName
 * @param {string} collectionName
 * @param {string} scope
 * @param {Object} options
 * @see http://doc.wakanda.org/home2.en.html#/Model/DatastoreClass-Constructor/DataClass.301-995600.en.html
 **/
exports.SmartClass = function SmartClass(module, entityName, collectionName, scope, options) {
};


/**
 * @method $attr
 * @param {string} name
 * @param {string} param type or Class or Path
 * @param {Object} options
 * @return SmartClass
 **/
exports.SmartClass.prototype.$attr = function $attr() {
};


/**
 * @method $primary
 * @param {Attribute} attr
 **/
exports.SmartClass.prototype.$primary = function $primary(attr) {
    
};




/**
 * @class SmartAttribute
 * @constructor
 * @param {string} name
 * @param {string} param type or Class or Path
 * @param {Object} options
 * @see http://doc.wakanda.org/home2.en.html#/Model/Attribute-Constructor/Attribute.301-995679.en.html
 **/
exports.SmartAttribute = function SmartAttribute(name, param, options) {

};