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
class Employees {
    static getAttributeTypeMap() {
        return Employees.attributeTypeMap;
    }
}
exports.Employees = Employees;
Employees.discriminator = undefined;
Employees.attributeTypeMap = [
    {
        "name": "employees",
        "baseName": "Employees",
        "type": "Array<Employee>"
    }
];
//# sourceMappingURL=employees.js.map