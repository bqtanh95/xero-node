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
class ReportFields {
    static getAttributeTypeMap() {
        return ReportFields.attributeTypeMap;
    }
}
exports.ReportFields = ReportFields;
ReportFields.discriminator = undefined;
ReportFields.attributeTypeMap = [
    {
        "name": "fieldID",
        "baseName": "FieldID",
        "type": "string"
    },
    {
        "name": "description",
        "baseName": "Description",
        "type": "string"
    },
    {
        "name": "value",
        "baseName": "Value",
        "type": "string"
    }
];
//# sourceMappingURL=reportFields.js.map