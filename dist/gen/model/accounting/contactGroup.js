"use strict";
/**
 * Accounting API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.0.1
 * Contact: api@xero.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
class ContactGroup {
    static getAttributeTypeMap() {
        return ContactGroup.attributeTypeMap;
    }
}
exports.ContactGroup = ContactGroup;
ContactGroup.discriminator = undefined;
ContactGroup.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "Name",
        "type": "string"
    },
    {
        "name": "status",
        "baseName": "Status",
        "type": "ContactGroup.StatusEnum"
    },
    {
        "name": "contactGroupID",
        "baseName": "ContactGroupID",
        "type": "string"
    },
    {
        "name": "contacts",
        "baseName": "Contacts",
        "type": "Array<Contact>"
    }
];
(function (ContactGroup) {
    let StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["ACTIVE"] = 'ACTIVE'] = "ACTIVE";
        StatusEnum[StatusEnum["DELETED"] = 'DELETED'] = "DELETED";
    })(StatusEnum = ContactGroup.StatusEnum || (ContactGroup.StatusEnum = {}));
})(ContactGroup = exports.ContactGroup || (exports.ContactGroup = {}));
//# sourceMappingURL=contactGroup.js.map